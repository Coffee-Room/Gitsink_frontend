"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCcw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error:", error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center text-center p-4">
          <div className="mb-8 rounded-full bg-red-100 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10 text-red-600"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <h1 className="mb-2 text-3xl font-bold">Application Error</h1>
          <p className="mb-8 max-w-md text-gray-600">
            We're sorry, but something went wrong. Please try again or contact support if the problem persists.
          </p>
          <Button onClick={() => reset()}>
            <RefreshCcw className="mr-2 h-4 w-4" />
            Try again
          </Button>
          {error.digest && <p className="mt-8 text-sm text-gray-500">Error ID: {error.digest}</p>}
        </div>
      </body>
    </html>
  )
}
