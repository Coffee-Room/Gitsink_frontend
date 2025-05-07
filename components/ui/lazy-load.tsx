"use client"

import { Suspense, lazy, type ReactNode, type ComponentType } from "react"
import { useLazyLoad } from "@/hooks/use-lazy-load"
import { SectionSkeleton, CardSkeleton } from "@/components/ui/loading-skeleton"
import { ErrorBoundary } from "@/components/error-handling/error-boundary"

interface LazyLoadProps {
  children: ReactNode
  fallback?: ReactNode
  rootMargin?: string
  threshold?: number
  triggerOnce?: boolean
  className?: string
}

export function LazyLoad({
  children,
  fallback = <SectionSkeleton />,
  rootMargin = "200px 0px",
  threshold = 0,
  triggerOnce = true,
  className = "",
}: LazyLoadProps) {
  const { ref, isVisible } = useLazyLoad({ rootMargin, threshold, triggerOnce })

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <ErrorBoundary>
          <Suspense fallback={fallback}>{children}</Suspense>
        </ErrorBoundary>
      ) : (
        fallback
      )}
    </div>
  )
}

interface LazyComponentProps<T> {
  component: () => Promise<{ default: ComponentType<T> }>
  props: T
  fallback?: ReactNode
  rootMargin?: string
  threshold?: number
  triggerOnce?: boolean
  className?: string
}

export function LazyComponent<T>({
  component,
  props,
  fallback = <CardSkeleton />,
  rootMargin = "200px 0px",
  threshold = 0,
  triggerOnce = true,
  className = "",
}: LazyComponentProps<T>) {
  const { ref, isVisible } = useLazyLoad({ rootMargin, threshold, triggerOnce })
  const LazyComponent = lazy(component)

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <ErrorBoundary>
          <Suspense fallback={fallback}>
            <LazyComponent {...props} />
          </Suspense>
        </ErrorBoundary>
      ) : (
        fallback
      )}
    </div>
  )
}
