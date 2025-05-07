"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import { z } from "zod"
import { cookies } from "next/headers"
import { v4 as uuidv4 } from "uuid"
import { getClientIp } from "@/lib/get-client-ip"

// Define validation schema
const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address").trim().toLowerCase(),
  name: z.string().max(100).optional(),
  company: z.string().max(100).optional(),
  githubUsername: z.string().max(100).optional(),
  referralSource: z.string().max(200).optional(),
  honeypot: z.string().max(0).optional(), // Should be empty if not a bot
  formToken: z.string().uuid().optional(),
})

export type WaitlistFormData = z.infer<typeof waitlistSchema>

// For production, use Redis or a similar service for rate limiting
// This is a simple in-memory implementation for development
const ipSubmissions = new Map<string, { count: number; lastSubmission: number }>()

// Rate limit: 3 submissions per IP per hour
const RATE_LIMIT = 3
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds

export async function generateWaitlistFormToken() {
  const token = uuidv4()
  cookies().set("waitlistFormToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 30, // 30 minutes
  })
  return token
}

export async function joinWaitlist(formData: FormData) {
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
    const email = formData.get("email") as string
    const name = formData.get("name") as string
    const company = formData.get("company") as string
    const githubUsername = formData.get("githubUsername") as string
    const referralSource = formData.get("referralSource") as string
    const honeypot = formData.get("website") as string // Honeypot field
    const submittedToken = formData.get("formToken") as string

    // Verify CSRF token
    const storedToken = cookies().get("waitlistFormToken")?.value

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
        message: "You've been added to our waitlist! We'll send you an early access code when we launch.",
      }
    }

    const data = {
      email,
      name: name || undefined,
      company: company || undefined,
      githubUsername: githubUsername || undefined,
      referralSource: referralSource || undefined,
      honeypot,
      formToken: submittedToken,
    }

    // Validate the data
    const result = waitlistSchema.safeParse(data)

    if (!result.success) {
      return {
        success: false,
        message: "Invalid form data",
        errors: result.error.flatten().fieldErrors,
      }
    }

    // Initialize Supabase client
    const supabase = createServerSupabaseClient()

    // Insert data into waitlist table
    const { error } = await supabase.from("waitlist").insert([
      {
        email: data.email,
        name: data.name,
        company: data.company,
        github_username: data.githubUsername,
        referral_source: data.referralSource,
        ip_address: clientIp, // Store IP for audit purposes
      },
    ])

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === "23505") {
        return {
          success: true,
          message: "You're already on our waitlist! We'll send you an early access code when we launch.",
        }
      }

      console.error("Error inserting into waitlist:", error)
      return {
        success: false,
        message: "Failed to join waitlist. Please try again later.",
      }
    }

    // Update rate limit data
    ipSubmissions.set(clientIp, {
      count: ipData.count + 1,
      lastSubmission: now,
    })

    // Clear the form token after successful submission
    cookies().delete("waitlistFormToken")

    return {
      success: true,
      message: "You've been added to our waitlist! We'll send you an early access code when we launch.",
    }
  } catch (error) {
    console.error("Error in joinWaitlist:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
