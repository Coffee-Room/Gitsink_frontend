"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Home, RefreshCcw } from "lucide-react"
import { useErrorLogger } from "@/hooks/use-error-logger"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const logError = useErrorLogger()

  useEffect(() => {
    // Log the error to an error reporting service
    logError("Client-side error", error)
  }, [error, logError])

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center px-4">
      <div className="mb-8 rounded-full bg-destructive/10 p-4">
        <AlertTriangle className="h-10 w-10 text-destructive" />
      </div>
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Something went wrong!</h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={() => reset()}>
          <RefreshCcw className="mr-2 h-4 w-4" />
          Try again
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Link>
        </Button>
      </div>
      {error.digest && <p className="mt-8 text-sm text-muted-foreground">Error ID: {error.digest}</p>}
    </div>
  )
}
