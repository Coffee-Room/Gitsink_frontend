"use client"

import type React from "react"
import { useCallback } from "react"

export function useErrorLogger() {
  const logError = useCallback((error: Error, errorInfo?: React.ErrorInfo) => {
    // Basic console logging with more detailed information
    console.error("Error caught:", error.message)

    // Log the error name and message
    if (error.name) {
      console.error("Error name:", error.name)
    }

    // Log the stack trace if available
    if (error.stack) {
      console.error("Stack trace:", error.stack)
    }

    // Log component stack if available
    if (errorInfo?.componentStack) {
      console.error("Component stack:", errorInfo.componentStack)
    }

    // In a production environment, you would send this to an error tracking service
  }, [])

  return { logError }
}
