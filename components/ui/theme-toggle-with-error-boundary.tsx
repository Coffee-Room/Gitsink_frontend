"use client"

import { ErrorBoundary } from "@/components/error-handling/error-boundary"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

// Fallback UI for when the theme toggle fails
function ThemeToggleFallback() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-9 h-9 text-muted-foreground"
      aria-label="Theme toggle (unavailable)"
      title="Theme toggle is currently unavailable"
    >
      <AlertCircle className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  )
}

// Error boundary wrapped theme toggle
export function ThemeToggleWithErrorBoundary() {
  return (
    <ErrorBoundary fallback={<ThemeToggleFallback />}>
      <ThemeToggle />
    </ErrorBoundary>
  )
}
