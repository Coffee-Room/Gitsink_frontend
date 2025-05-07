"use client"

import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SectionErrorFallbackProps {
  error?: Error
  resetErrorBoundary: () => void
  sectionName?: string
}

export function SectionErrorFallback({
  error,
  resetErrorBoundary,
  sectionName = "section",
}: SectionErrorFallbackProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl rounded-lg border border-destructive/20 bg-destructive/5 p-6 md:p-8 text-center">
          <div className="mb-4 flex justify-center">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-destructive">Error Loading {sectionName}</h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            {error?.message || "An unexpected error occurred while rendering this section."}
          </p>
          <div className="mt-6 md:mt-8">
            <Button variant="outline" onClick={resetErrorBoundary}>
              Retry
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
