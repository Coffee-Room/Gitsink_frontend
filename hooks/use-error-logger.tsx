"use client"

import { useCallback } from "react"

export function useErrorLogger() {
  const logError = useCallback((error: Error, componentStack?: string) => {
    console.error("Error caught:", error.message)

    // Special handling for URL construction errors
    if (error.message.includes("URL")) {
      console.error("URL Error Details:", {
        message: error.message,
        // Log environment variables (without exposing sensitive data)
        hasBaseUrl: typeof process.env.NEXT_PUBLIC_BASE_URL === "string" && !!process.env.NEXT_PUBLIC_BASE_URL,
        hasSiteUrl: typeof process.env.NEXT_PUBLIC_SITE_URL === "string" && !!process.env.NEXT_PUBLIC_SITE_URL,
      })
    }

    // Special handling for module import errors
    if (error.message.includes("does not provide an export")) {
      console.error("Module Export Error Details:", {
        message: error.message,
        stack: error.stack,
      })
    }

    // Special handling for fetch errors
    if (error.message.includes("fetch") || error.message.includes("Failed to fetch")) {
      console.error("Fetch Error Details:", {
        message: error.message,
        stack: error.stack,
      })
    }

    if (error.stack) {
      console.error("Error stack:", error.stack)
    }
    if (componentStack) {
      console.error("Component stack:", componentStack)
    }
  }, [])

  return { logError }
}
