"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy, CheckCircle, Loader2 } from "lucide-react"
import { submitToWaitlist, type WaitlistResponse } from "@/lib/getwaitlist"
import { useLanguage } from "@/contexts/language-context"
import { siteTranslations } from "@/lib/translations/site"

interface FormData {
  email: string
  firstName: string
  lastName: string
  company: string
  githubUsername: string
  interestedFeatures: string
}

export function GetWaitlistForm() {
  const { currentLanguage } = useLanguage()
  const t = siteTranslations[currentLanguage]?.waitlist || siteTranslations.en.waitlist

  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    githubUsername: "",
    interestedFeatures: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<WaitlistResponse | null>(null)
  const [linkCopied, setLinkCopied] = useState(false)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): string | null => {
    if (!formData.email.trim()) {
      return t.errors.emailRequired
    }

    if (!validateEmail(formData.email)) {
      return t.errors.emailInvalid
    }

    if (!formData.firstName.trim()) {
      return t.errors.firstNameRequired
    }

    if (!formData.lastName.trim()) {
      return t.errors.lastNameRequired
    }

    if (!formData.interestedFeatures.trim()) {
      return t.errors.featuresRequired
    }

    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const result = await submitToWaitlist({
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        metadata: {
          company: formData.company,
          github_username: formData.githubUsername,
          interested_features: formData.interestedFeatures,
        },
      })

      setSuccess(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : t.errors.submitError)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError(null)
  }

  const copyReferralLink = async () => {
    if (success?.referral_link) {
      try {
        await navigator.clipboard.writeText(success.referral_link)
        setLinkCopied(true)
        setTimeout(() => setLinkCopied(false), 2000)
      } catch (err) {
        console.error("Failed to copy link:", err)
      }
    }
  }

  const resetForm = () => {
    setSuccess(null)
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      company: "",
      githubUsername: "",
      interestedFeatures: "",
    })
  }

  if (success) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-600">{t.success.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-lg font-semibold">
              {t.success.position.replace("{{position}}", success.priority.toString())}
            </p>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">{t.success.referralLink}</Label>
            <div className="flex gap-2">
              <Input value={success.referral_link} readOnly className="text-sm" />
              <Button onClick={copyReferralLink} variant="outline" size="sm" className="shrink-0 bg-transparent">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            {linkCopied && <p className="text-sm text-green-600">{t.success.linkCopied}</p>}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {t.success.totalReferrals.replace("{{count}}", success.total_referrals.toString())}
            </p>
          </div>

          <Button onClick={resetForm} variant="outline" className="w-full bg-transparent">
            {t.success.backToForm}
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">{t.title}</CardTitle>
        <CardDescription className="text-center">{t.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">{t.form.firstName}</Label>
              <Input
                id="firstName"
                type="text"
                placeholder={t.form.firstNamePlaceholder}
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">{t.form.lastName}</Label>
              <Input
                id="lastName"
                type="text"
                placeholder={t.form.lastNamePlaceholder}
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t.form.email}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t.form.emailPlaceholder}
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">{t.form.company}</Label>
            <Input
              id="company"
              type="text"
              placeholder={t.form.companyPlaceholder}
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="githubUsername">{t.form.githubUsername}</Label>
            <Input
              id="githubUsername"
              type="text"
              placeholder={t.form.githubUsernamePlaceholder}
              value={formData.githubUsername}
              onChange={(e) => handleInputChange("githubUsername", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interestedFeatures">{t.form.interestedFeatures}</Label>
            <Textarea
              id="interestedFeatures"
              placeholder={t.form.interestedFeaturesPlaceholder}
              value={formData.interestedFeatures}
              onChange={(e) => handleInputChange("interestedFeatures", e.target.value)}
              required
              rows={3}
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t.form.submitting}
              </>
            ) : (
              t.form.submit
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
