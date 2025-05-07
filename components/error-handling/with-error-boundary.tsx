import type React from "react"
import { ErrorBoundary } from "@/components/error-handling/error-boundary"
import { SectionErrorFallback } from "@/components/error-handling/section-error-fallback"

interface WithErrorBoundaryOptions {
  sectionName?: string
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  { sectionName, onError }: WithErrorBoundaryOptions = {},
) {
  const displayName = Component.displayName || Component.name || "Component"
  const componentSectionName = sectionName || displayName

  function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary
        onError={onError}
        fallback={
          <SectionErrorFallback
            resetErrorBoundary={() => window.location.reload()}
            sectionName={componentSectionName}
          />
        }
      >
        <Component {...props} />
      </ErrorBoundary>
    )
  }

  WithErrorBoundary.displayName = `WithErrorBoundary(${displayName})`
  return WithErrorBoundary
}
