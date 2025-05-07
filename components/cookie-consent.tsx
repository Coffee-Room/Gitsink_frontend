"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    try {
      const consentGiven = localStorage.getItem("cookie-consent")
      if (!consentGiven) {
        // Show banner after a short delay
        const timer = setTimeout(() => {
          setShowBanner(true)
        }, 1000)
        return () => clearTimeout(timer)
      }
    } catch (error) {
      // In case localStorage is not available (e.g., in incognito mode)
      console.error("Error accessing localStorage:", error)
    }
  }, [])

  const acceptAll = () => {
    try {
      localStorage.setItem("cookie-consent", "all")
      setShowBanner(false)
      // Here you would initialize any tracking scripts
    } catch (error) {
      console.error("Error setting localStorage:", error)
    }
  }

  const acceptEssential = () => {
    try {
      localStorage.setItem("cookie-consent", "essential")
      setShowBanner(false)
      // Only essential cookies will be used
    } catch (error) {
      console.error("Error setting localStorage:", error)
    }
  }

  const dismiss = () => {
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">Cookie Consent</h3>
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
              traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-2 md:mt-0">
            <Button variant="outline" size="sm" onClick={acceptEssential}>
              Essential Only
            </Button>
            <Button size="sm" onClick={acceptAll}>
              Accept All
            </Button>
            <Button variant="ghost" size="sm" className="p-0 h-8 w-8" onClick={dismiss}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
