"use client"

import type React from "react"

import { useCallback } from "react"

export function useErrorLogger() {
  const logError = useCallback((error: Error, errorInfo?: React.ErrorInfo) => {
    // In a real app, you would send this to your error tracking service
    // like Sentry, LogRocket, etc.
    console.error("Error caught:", error)
    if (errorInfo) {
      console.error("Component stack:", errorInfo.componentStack)
    }

    // You could also send this to your backend API
    // Example:
    // fetch('/api/log-error', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     message: error.message,
    //     stack: error.stack,
    //     componentStack: errorInfo?.componentStack
    //   })
    // }).catch(console.error)
  }, [])

  return { logError }
}
