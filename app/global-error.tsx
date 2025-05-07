"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw } from "lucide-react"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { useErrorLogger } from "@/hooks/use-error-logger"

// Space Grotesk for headings - a quirky, modern display font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

// DM Sans for body - slightly quirky but still readable
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { logError } = useErrorLogger()

  useEffect(() => {
    // Log the error to an error reporting service
    logError(error)
  }, [error, logError])

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <title>Error - Gitsink</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body className="font-sans bg-background text-foreground">
        <div className="flex min-h-screen flex-col items-center justify-center p-4">
          <div className="w-full max-w-md text-center">
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-destructive/10 p-4">
                <AlertTriangle className="h-10 w-10 text-destructive" />
              </div>
            </div>
            <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl mb-4">Critical Error</h1>
            <p className="mb-8 text-muted-foreground">
              We've encountered a critical error. Our team has been notified and is working to resolve the issue.
            </p>
            <Button onClick={reset} className="mx-auto">
              <RefreshCw className="mr-2 h-4 w-4" />
              Reload Application
            </Button>
            {error.digest && (
              <p className="mt-8 text-xs text-muted-foreground">
                Error ID: <code className="font-mono">{error.digest}</code>
              </p>
            )}
          </div>
        </div>
      </body>
    </html>
  )
}
