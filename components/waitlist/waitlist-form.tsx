"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2, Share2 } from "lucide-react"
import { joinWaitlist, generateWaitlistFormToken } from "@/app/actions/waitlist"
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

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formToken, setFormToken] = useState("")
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
    errors?: Record<string, string[]>
  }>({})
  const [formStarted, setFormStarted] = useState(false)
  const [formFields, setFormFields] = useState({
    email: false,
    name: false,
    company: false,
    githubUsername: false,
    referralSource: false,
  })

  useEffect(() => {
    // Generate CSRF token when component mounts
    const getToken = async () => {
      try {
        const token = await generateWaitlistFormToken()
        setFormToken(token)
      } catch (error) {
        console.error("Error generating form token:", error)
      }
    }
    getToken()

    // Track conversion start when form is viewed
    trackConversionStart(ConversionGoal.WAITLIST_SIGNUP, FunnelStep.INTENT, {
      form: "waitlist",
      source: document.referrer || "direct",
    })

    // Track form abandonment
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!formStatus.success && formStarted) {
        trackConversionAbandon(ConversionGoal.WAITLIST_SIGNUP, FunnelStep.INTENT, "page_exit", {
          form: "waitlist",
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
      trackConversionStep(ConversionGoal.WAITLIST_SIGNUP, FunnelStep.INTENT, "form_started", 1, 3, { field })
    }

    if (!formFields[field]) {
      setFormFields((prev) => ({ ...prev, [field]: true }))

      // Count completed fields
      const completedFields = Object.values({ ...formFields, [field]: true }).filter(Boolean).length
      const totalFields = Object.keys(formFields).length

      trackConversionStep(
        ConversionGoal.WAITLIST_SIGNUP,
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
    trackConversionStep(ConversionGoal.WAITLIST_SIGNUP, FunnelStep.INTENT, "form_submission", 2, 3, {
      fields_completed: Object.values(formFields).filter(Boolean).length,
    })

    try {
      const formData = new FormData(event.currentTarget)
      formData.append("formToken", formToken)

      const result = await joinWaitlist(formData)
      setFormStatus(result)

      if (result.success) {
        // Track successful conversion
        trackConversionComplete(ConversionGoal.WAITLIST_SIGNUP, {
          form: "waitlist",
          email_domain: formData.get("email")?.toString().split("@")[1] || "unknown",
        })

        // Reset form on success
        event.currentTarget.reset()
        // Get a new token for the next submission
        const newToken = await generateWaitlistFormToken()
        setFormToken(newToken)
      } else {
        // Track form error
        trackEvent(EventName.FORM_ERROR, EventCategory.ERROR, {
          form: "waitlist",
          error: result.message,
          fields_with_errors: JSON.stringify(result.errors),
        })

        trackConversionAbandon(ConversionGoal.WAITLIST_SIGNUP, FunnelStep.INTENT, "form_error", {
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
        form: "waitlist",
        error: "unexpected_error",
      })

      trackConversionAbandon(ConversionGoal.WAITLIST_SIGNUP, FunnelStep.INTENT, "unexpected_error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleShare = () => {
    // Track share action
    trackEvent(EventName.LINK_CLICK, EventCategory.ENGAGEMENT, {
      action: "share",
      context: "waitlist_success",
    })

    if (navigator.share) {
      navigator
        .share({
          title: "Join the Gitsink Waitlist",
          text: "I just joined the waitlist for Gitsink, a revolutionary Git-based content management system. Check it out!",
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing:", error))
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("Link copied to clipboard!"))
        .catch((error) => console.error("Error copying to clipboard:", error))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      {/* Honeypot field - hidden from users but bots will fill it out */}
      <div className="hidden">
        <Label htmlFor="website">Website</Label>
        <Input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          required
          disabled={isSubmitting || formStatus.success}
          onFocus={() => handleFieldFocus("email")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Name (Optional)</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          disabled={isSubmitting || formStatus.success}
          onFocus={() => handleFieldFocus("name")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Company/Organization (Optional)</Label>
          <Input
            id="company"
            name="company"
            placeholder="Your company"
            disabled={isSubmitting || formStatus.success}
            onFocus={() => handleFieldFocus("company")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="githubUsername">GitHub Username (Optional)</Label>
          <Input
            id="githubUsername"
            name="githubUsername"
            placeholder="Your GitHub username"
            disabled={isSubmitting || formStatus.success}
            onFocus={() => handleFieldFocus("githubUsername")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="referralSource">How did you hear about us? (Optional)</Label>
        <Input
          id="referralSource"
          name="referralSource"
          placeholder="Google, Twitter, Friend, etc."
          disabled={isSubmitting || formStatus.success}
          onFocus={() => handleFieldFocus("referralSource")}
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

      {formStatus.success ? (
        <div className="flex flex-col sm:flex-row gap-4">
          <Button type="button" className="flex items-center gap-2" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
            Share with Friends
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              // Track return to home
              trackEvent(EventName.LINK_CLICK, EventCategory.NAVIGATION, {
                action: "return_home",
                context: "waitlist_success",
              })
              window.location.href = "/"
            }}
          >
            Return to Home
          </Button>
        </div>
      ) : (
        <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting || !formToken}>
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </Button>
      )}
    </form>
  )
}
