"use client"

import type React from "react"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { initAnalytics, trackPageView, initConversionPageTracking } from "@/lib/analytics"

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize analytics on first load
    initAnalytics()
    initConversionPageTracking()
  }, [])

  useEffect(() => {
    // Track page views on route changes
    if (pathname) {
      const url = searchParams?.size ? `${pathname}?${searchParams.toString()}` : pathname

      trackPageView(url)

      // Track conversion goals on page navigation
      initConversionPageTracking()
    }
  }, [pathname, searchParams])

  return <>{children}</>
}
