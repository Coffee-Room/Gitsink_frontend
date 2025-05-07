"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { submitContactForm, generateContactFormToken } from "@/app/actions/contact"
import {
  trackConversionStart,
  trackConversionStep,
  trackConversionComplete,
  trackConversionAbandon,
  ConversionGoal,
  FunnelStep,
  EventCategory,
  EventName,
  trackEvent,
} from "@/lib/analytics"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formToken, setFormToken] = useState("")
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
    errors?: Record<string, string[]>
  }>({})
  const [formStarted, setFormStarted] = useState(false)
  const [formFields, setFormFields] = useState({
    name: false,
    email: false,
    inquiryType: false,
    subject: false,
    message: false,
  })

  useEffect(() => {
    // Generate CSRF token when component mounts
    const getToken = async () => {
      try {
        const token = await generateContactFormToken()
        setFormToken(token)
      } catch (error) {
        console.error("Error generating form token:", error)
      }
    }
    getToken()

    // Track conversion start when form is viewed
    trackConversionStart(ConversionGoal.CONTACT_SUBMISSION, FunnelStep.INTENT, {
      form: "contact",
      source: document.referrer || "direct",
    })

    // Track form abandonment
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!formStatus.success && formStarted) {
        trackConversionAbandon(ConversionGoal.CONTACT_SUBMISSION, FunnelStep.INTENT, "page_exit", {
          form: "contact",
          fields_completed: Object.values(formFields).filter(Boolean).length,
        })
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [formStarted, formFields, formStatus.success])

  const handleFieldFocus = (field: keyof typeof formFields) => {
    if (!formStarted) {
      setFormStarted(true)
      trackConversionStep(ConversionGoal.CONTACT_SUBMISSION, FunnelStep.INTENT, "form_started", 1, 3, { field })
    }

    if (!formFields[field]) {
      setFormFields((prev) => ({ ...prev, [field]: true }))

      // Count completed fields
      const completedFields = Object.values({ ...formFields, [field]: true }).filter(Boolean).length
      const totalFields = Object.keys(formFields).length

      trackConversionStep(
        ConversionGoal.CONTACT_SUBMISSION,
        FunnelStep.INTENT,
        `field_${field}`,
        completedFields,
        totalFields,
        { field },
      )
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus({})

    // Track form submission attempt
    trackConversionStep(ConversionGoal.CONTACT_SUBMISSION, FunnelStep.INTENT, "form_submission", 2, 3, {
      fields_completed: Object.values(formFields).filter(Boolean).length,
    })

    try {
      const formData = new FormData(event.currentTarget)
      formData.append("formToken", formToken)

      const result = await submitContactForm(formData)
      setFormStatus(result)

      if (result.success) {
        // Track successful conversion
        trackConversionComplete(ConversionGoal.CONTACT_SUBMISSION, {
          form: "contact",
          inquiry_type: formData.get("inquiryType")?.toString() || "unknown",
          email_domain: formData.get("email")?.toString().split("@")[1] || "unknown",
        })

        // Reset form on success
        event.currentTarget.reset()
        // Get a new token for the next submission
        const newToken = await generateContactFormToken()
        setFormToken(newToken)
      } else {
        // Track form error
        trackEvent(EventName.FORM_ERROR, EventCategory.ERROR, {
          form: "contact",
          error: result.message,
          fields_with_errors: JSON.stringify(result.errors),
        })

        trackConversionAbandon(ConversionGoal.CONTACT_SUBMISSION, FunnelStep.INTENT, "form_error", {
          error: result.message,
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })

      // Track error
      trackEvent(EventName.FORM_ERROR, EventCategory.ERROR, {
        form: "contact",
        error: "unexpected_error",
      })

      trackConversionAbandon(ConversionGoal.CONTACT_SUBMISSION, FunnelStep.INTENT, "unexpected_error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      {/* Honeypot field - hidden from users but bots will fill it out */}
      <div className="hidden">
        <Label htmlFor="website">Website</Label>
        <Input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            disabled={isSubmitting}
            onFocus={() => handleFieldFocus("name")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
            disabled={isSubmitting}
            onFocus={() => handleFieldFocus("email")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="inquiryType">Inquiry Type</Label>
        <Select
          name="inquiryType"
          defaultValue="support"
          disabled={isSubmitting}
          onValueChange={() => handleFieldFocus("inquiryType")}
        >
          <SelectTrigger id="inquiryType" onFocus={() => handleFieldFocus("inquiryType")}>
            <SelectValue placeholder="Select inquiry type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="support">Technical Support</SelectItem>
            <SelectItem value="feature">Feature Request</SelectItem>
            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
            <SelectItem value="business">Business Inquiry</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="Subject of your message"
          required
          disabled={isSubmitting}
          onFocus={() => handleFieldFocus("subject")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message..."
          rows={6}
          required
          disabled={isSubmitting}
          onFocus={() => handleFieldFocus("message")}
        />
      </div>

      {formStatus.message && (
        <Alert
          variant={formStatus.success ? "default" : "destructive"}
          className={formStatus.success ? "bg-green-50 text-green-800 border-green-200" : ""}
        >
          {formStatus.success ? (
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
          <AlertDescription>{formStatus.message}</AlertDescription>
        </Alert>
      )}

      <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting || !formToken}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
