"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // Simple console logging without hooks
  console.error("Error caught:", error.message)

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-md px-4 py-16 sm:py-24 md:py-32 text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-destructive/10 p-4">
              <AlertTriangle className="h-10 w-10 text-destructive" />
            </div>
          </div>
          <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl mb-4">500</h1>
          <h2 className="text-2xl font-heading font-semibold tracking-tight sm:text-3xl mb-6">Something Went Wrong</h2>
          <p className="mb-8 text-muted-foreground">
            We're sorry, but we encountered an unexpected error. Our team has been notified and is working on a fix.
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
          <div className="mt-12">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/gitsink-logo-icon.png"
                alt="Gitsink Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold tracking-tight">Gitsink</span>
            </Link>
          </div>
          {error.digest && (
            <p className="mt-4 text-xs text-muted-foreground">
              Error ID: <code className="font-mono">{error.digest}</code>
            </p>
          )}
        </div>
      </main>
    </div>
  )
}
