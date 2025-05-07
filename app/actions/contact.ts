"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import { z } from "zod"
import { cookies } from "next/headers"
import { v4 as uuidv4 } from "uuid"
import { getClientIp } from "@/lib/get-client-ip"

// Define validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").trim().toLowerCase(),
  inquiryType: z.enum(["support", "feature", "partnership", "business", "other"]),
  subject: z.string().min(2, "Subject must be at least 2 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  honeypot: z.string().max(0).optional(), // Should be empty if not a bot
  formToken: z.string().uuid().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>

// Simple rate limiting with a Map (in a production app, use Redis or similar)
const ipSubmissions = new Map<string, { count: number; lastSubmission: number }>()

// Rate limit: 5 submissions per IP per hour
const RATE_LIMIT = 5
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds

export async function generateContactFormToken() {
  const token = uuidv4()
  cookies().set("contactFormToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 30, // 30 minutes
  })
  return token
}

export async function submitContactForm(formData: FormData) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp()

    // Check rate limit
    const now = Date.now()
    const ipData = ipSubmissions.get(clientIp) || { count: 0, lastSubmission: 0 }

    // Reset count if outside window
    if (now - ipData.lastSubmission > RATE_LIMIT_WINDOW) {
      ipData.count = 0
    }

    // Check if rate limited
    if (ipData.count >= RATE_LIMIT) {
      return {
        success: false,
        message: "Too many submissions. Please try again later.",
      }
    }

    // Extract and validate form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const inquiryType = formData.get("inquiryType") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string
    const honeypot = formData.get("website") as string // Honeypot field
    const submittedToken = formData.get("formToken") as string

    // Verify CSRF token
    const storedToken = cookies().get("contactFormToken")?.value

    if (!storedToken || submittedToken !== storedToken) {
      return {
        success: false,
        message: "Invalid form submission. Please try again.",
      }
    }

    // Check honeypot (if filled, likely a bot)
    if (honeypot) {
      // Silently reject but return success to not alert bots
      return {
        success: true,
        message: "Your message has been sent! We'll get back to you soon.",
      }
    }

    const data = {
      name,
      email,
      inquiryType,
      subject,
      message,
      honeypot,
      formToken: submittedToken,
    }

    // Validate the data
    const result = contactSchema.safeParse(data)

    if (!result.success) {
      return {
        success: false,
        message: "Invalid form data",
        errors: result.error.flatten().fieldErrors,
      }
    }

    // Initialize Supabase client
    const supabase = createServerSupabaseClient()

    // First, ensure the contact_messages table exists
    await supabase.rpc("create_contact_messages_if_not_exists")

    // Insert data into contact_messages table
    const { error } = await supabase.from("contact_messages").insert([
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        inquiry_type: data.inquiryType,
        ip_address: clientIp, // Store IP for audit purposes
      },
    ])

    if (error) {
      console.error("Error inserting into contact_messages:", error)
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      }
    }

    // Update rate limit data
    ipSubmissions.set(clientIp, {
      count: ipData.count + 1,
      lastSubmission: now,
    })

    // Clear the form token after successful submission
    cookies().delete("contactFormToken")

    return {
      success: true,
      message: "Your message has been sent! We'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error in submitContactForm:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
