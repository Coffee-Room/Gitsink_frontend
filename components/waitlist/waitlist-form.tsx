"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2, Copy } from "lucide-react"
import { joinWaitlist, generateWaitlistFormToken } from "@/app/actions/waitlist"
import { useToast } from "@/components/ui/use-toast"
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
  const { toast } = useToast()
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
  const [showForm, setShowForm] = useState(true)
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [isSharing, setIsSharing] = useState(false)

  // Get the site URL from environment variable or fallback to current location
  const getSiteUrl = () => {
    // Use the environment variable if available
    if (process.env.NEXT_PUBLIC_SITE_URL) {
      // Ensure the URL doesn't have a trailing slash
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
      return `${baseUrl}/waitlist`
    }

    // Fallback to current location if env var is not available
    return typeof window !== "undefined" ? window.location.href : ""
  }

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

  const copyToClipboard = async () => {
    const shareUrl = getSiteUrl()

    try {
      await navigator.clipboard.writeText(shareUrl)
      toast({
        title: "Link copied to clipboard!",
        description: "Share the link with your friends and colleagues.",
        variant: "default",
      })
      return true
    } catch (error) {
      console.error("Error copying to clipboard:", error)
      toast({
        title: "Couldn't copy link",
        description: "Please select and copy the URL manually from your browser's address bar.",
        variant: "destructive",
      })
      return false
    }
  }

  const handleShare = async () => {
    if (isSharing) return
    setIsSharing(true)

    // Track share action
    trackEvent(EventName.LINK_CLICK, EventCategory.ENGAGEMENT, {
      action: "share",
      context: "waitlist_success",
    })

    const shareUrl = getSiteUrl()

    try {
      // Skip Web Share API in preview/development environments
      const isPreviewOrDev =
        window.location.hostname.includes("localhost") ||
        window.location.hostname.includes("vercel.app") ||
        window.location.hostname.includes("preview")

      // Only try Web Share API in production environments on supported devices
      if (!isPreviewOrDev && navigator.share && typeof navigator.share === "function") {
        try {
          await navigator.share({
            title: "Join the Gitsink Waitlist",
            text: "I just joined the waitlist for Gitsink, a revolutionary Git-based content management system. Check it out!",
            url: shareUrl,
          })
          toast({
            title: "Shared successfully!",
            description: "Thanks for spreading the word about Gitsink.",
            variant: "default",
          })
        } catch (shareError) {
          console.error("Web Share API error:", shareError)
          // If permission denied or other error, fall back to clipboard
          if (
            (shareError as Error).name === "NotAllowedError" ||
            (shareError as Error).message.includes("Permission denied")
          ) {
            await copyToClipboard()
          } else if ((shareError as Error).name !== "AbortError") {
            // Only show error for non-abort errors (abort means user cancelled)
            await copyToClipboard()
          }
        }
      } else {
        // Fallback to clipboard for environments without Web Share API
        await copyToClipboard()
      }
    } catch (error) {
      console.error("Error in share handler:", error)
      toast({
        title: "Sharing failed",
        description: "Please try copying the URL manually from your browser.",
        variant: "destructive",
      })
    } finally {
      setIsSharing(false)
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

      // Save email for sharing context
      const emailValue = formData.get("email") as string
      if (emailValue) {
        setSubmittedEmail(emailValue)
      }

      const result = await joinWaitlist(formData)
      setFormStatus(result)

      if (result.success) {
        // Track successful conversion
        trackConversionComplete(ConversionGoal.WAITLIST_SIGNUP, {
          form: "waitlist",
          email_domain: emailValue?.split("@")[1] || "unknown",
        })

        // Show success toast with share option
        toast({
          title: "Successfully joined the waitlist!",
          description: (
            <div className="mt-2 flex flex-col gap-3">
              <p>We'll notify you when Gitsink launches.</p>
              <Button
                onClick={handleShare}
                variant="outline"
                className="mt-1 w-full flex items-center justify-center gap-2"
              >
                <Copy className="h-4 w-4" />
                Copy Invite Link
              </Button>
            </div>
          ),
          variant: "default",
          duration: 10000, // Show for 10 seconds to give time to share
        })

        // Hide the form and show success state
        setShowForm(false)
      } else {
        // Show error toast
        toast({
          title: "Error joining waitlist",
          description: result.message || "Please try again later.",
          variant: "destructive",
        })

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

      // Show error toast
      toast({
        title: "Something went wrong",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
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

  if (!showForm) {
    return (
      <div className="text-center space-y-6 py-8 max-w-xl mx-auto">
        <div className="bg-green-50 text-green-800 p-6 rounded-lg border border-green-200">
          <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-green-600" />
          <h3 className="text-xl font-bold mb-2">You're on the waitlist!</h3>
          <p className="mb-4">
            Thank you for joining the Gitsink waitlist. We'll notify you at <strong>{submittedEmail}</strong> when we
            launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleShare} className="flex items-center gap-2" disabled={isSharing}>
              <Copy className="h-4 w-4" />
              {isSharing ? "Copying..." : "Copy Invite Link"}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
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
        </div>
      </div>
    )
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
          disabled={isSubmitting}
          onFocus={() => handleFieldFocus("email")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Name (Optional)</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          disabled={isSubmitting}
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
            disabled={isSubmitting}
            onFocus={() => handleFieldFocus("company")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="githubUsername">GitHub Username (Optional)</Label>
          <Input
            id="githubUsername"
            name="githubUsername"
            placeholder="Your GitHub username"
            disabled={isSubmitting}
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
          disabled={isSubmitting}
          onFocus={() => handleFieldFocus("referralSource")}
        />
      </div>

      {formStatus.message && !formStatus.success && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{formStatus.message}</AlertDescription>
        </Alert>
      )}

      <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting || !formToken}>
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  )
}
