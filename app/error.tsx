"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useErrorLogger } from "@/hooks/use-error-logger"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { logError } = useErrorLogger()

  useEffect(() => {
    // Log the error to the console
    logError(error)
  }, [error, logError])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center p-4">
      <div className="max-w-md space-y-6">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="text-muted-foreground">We apologize for the inconvenience. An unexpected error has occurred.</p>
        <div className="flex justify-center gap-4">
          <Button onClick={reset}>Try again</Button>
          <Button variant="outline" onClick={() => (window.location.href = "/")}>
            Go to homepage
          </Button>
        </div>
      </div>
    </div>
  )
}
