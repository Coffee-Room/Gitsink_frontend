"use client"

import type React from "react"

import { useEffect } from "react"
import { LoadingProvider } from "@/contexts/loading-context"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { ScrollToTopOnNavigation } from "@/components/scroll-to-top-on-navigation"
import { GlobalErrorHandler } from "@/components/error-handling/global-error-handler"
import { AnalyticsProvider } from "@/components/analytics/analytics-provider"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  // Log environment variables for debugging (without exposing sensitive data)
  useEffect(() => {
    console.log("Environment:", {
      nodeEnv: process.env.NODE_ENV,
      hasBaseUrl: !!process.env.NEXT_PUBLIC_BASE_URL,
      hasSiteUrl: !!process.env.NEXT_PUBLIC_SITE_URL,
    })
  }, [])

  return (
    <LoadingProvider>
      <GlobalErrorHandler>
        <AnalyticsProvider>
          <ScrollToTopOnNavigation />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieConsent />
        </AnalyticsProvider>
      </GlobalErrorHandler>
    </LoadingProvider>
  )
}
