"use client"

import { useCallback } from "react"

export function useErrorLogger() {
  const logError = useCallback((error: Error, componentStack?: string) => {
    console.error("Error caught:", error.message)
    if (error.stack) {
      console.error("Error stack:", error.stack)
    }
    if (componentStack) {
      console.error("Component stack:", componentStack)
    }

    // Here you could send the error to an error tracking service
    // Example: sendToErrorTrackingService(error, componentStack)
  }, [])

  return { logError }
}
