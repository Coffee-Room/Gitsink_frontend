"use client"

import { useEffect, useState } from "react"
import { useLoading } from "@/contexts/loading-context"

export function GlobalLoading() {
  const { isLoading, isHydrated } = useLoading()
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    // Only hide the loader when we're hydrated and not loading
    if (isHydrated && !isLoading) {
      // Add a small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setShowLoader(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isHydrated, isLoading])

  // Don't render anything if we shouldn't show the loader
  if (!showLoader) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-300 ${
        isHydrated && !isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-live="polite"
      aria-busy={isLoading}
    >
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
        <p className="mt-4 text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}
