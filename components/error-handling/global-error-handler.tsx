"use client"

import type React from "react"

import { useEffect } from "react"
import { useErrorLogger } from "@/hooks/use-error-logger"

export function GlobalErrorHandler({ children }: { children?: React.ReactNode }) {
  const { logError } = useErrorLogger()

  useEffect(() => {
    // Set up global error handler
    const originalOnError = window.onerror

    window.onerror = (message, source, lineno, colno, error) => {
      // Log the error
      if (error) {
        logError(error)
      } else {
        logError(new Error(message as string))
      }

      // Call the original handler if it exists
      if (typeof originalOnError === "function") {
        return originalOnError(message, source, lineno, colno, error)
      }

      // Prevent the default browser error handling
      return true
    }

    // Set up unhandled promise rejection handler
    const originalOnUnhandledRejection = window.onunhandledrejection

    window.onunhandledrejection = (event) => {
      // Log the error
      if (event.reason instanceof Error) {
        logError(event.reason)
      } else {
        logError(new Error(String(event.reason)))
      }

      // Call the original handler if it exists
      if (typeof originalOnUnhandledRejection === "function") {
        return originalOnUnhandledRejection(event)
      }
    }

    // Clean up
    return () => {
      window.onerror = originalOnError
      window.onunhandledrejection = originalOnUnhandledRejection
    }
  }, [logError])

  return <>{children}</>
}
