"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // Simple console logging without hooks
  console.error("Global error caught:", error.message)

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col">
          <main className="flex-1 flex items-center justify-center">
            <div className="container max-w-md px-4 py-16 sm:py-24 md:py-32 text-center">
              <div className="mb-8 flex justify-center">
                <div className="rounded-full bg-red-100 p-4">
                  <AlertTriangle className="h-10 w-10 text-red-600" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">500</h1>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl mb-6">Global Error</h2>
              <p className="mb-8 text-gray-600">
                We're sorry, but we encountered a critical error. Our team has been notified and is working on a fix.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={reset}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
              {error.digest && (
                <p className="mt-4 text-xs text-gray-500">
                  Error ID: <code className="font-mono">{error.digest}</code>
                </p>
              )}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
