"use client"

import { Button } from "@/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center text-center p-4">
          <div className="max-w-md space-y-6">
            <h1 className="text-3xl font-bold">Something went wrong</h1>
            <p className="text-gray-600">We apologize for the inconvenience. A critical error has occurred.</p>
            <div className="flex justify-center gap-4">
              <Button onClick={reset}>Try again</Button>
              <Button variant="outline" onClick={() => (window.location.href = "/")}>
                Go to homepage
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
