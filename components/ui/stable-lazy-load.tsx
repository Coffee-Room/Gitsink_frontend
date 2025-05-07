"use client"

import { Suspense, useEffect, useState, useRef, type ReactNode } from "react"
import { useLoading } from "@/contexts/loading-context"
import { ErrorBoundary } from "@/components/error-handling/error-boundary"

interface StableLazyLoadProps {
  children: ReactNode
  fallback: ReactNode
  id: string
  minHeight?: number | string
  className?: string
  priority?: boolean
}

export function StableLazyLoad({
  children,
  fallback,
  id,
  minHeight = "auto",
  className = "",
  priority = false,
}: StableLazyLoadProps) {
  const { setSectionLoaded } = useLoading()
  const [shouldRender, setShouldRender] = useState(priority)
  const [hasRendered, setHasRendered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | null>(null)
  const hasMarkedLoaded = useRef(false)

  // Set up intersection observer to detect when component is near viewport
  useEffect(() => {
    if (priority) {
      setShouldRender(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setShouldRender(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: "400px 0px", // Load when within 400px of viewport
        threshold: 0,
      },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  // When content is loaded, mark section as loaded
  useEffect(() => {
    if (hasRendered && !hasMarkedLoaded.current) {
      setSectionLoaded(id, true)
      hasMarkedLoaded.current = true
    }
  }, [hasRendered, id, setSectionLoaded])

  // Handle content loaded
  const handleContentLoaded = () => {
    setHasRendered(true)

    // Get the actual height of the content
    if (containerRef.current) {
      const contentHeight = containerRef.current.scrollHeight
      if (contentHeight > 0) {
        setHeight(contentHeight)
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        minHeight: typeof minHeight === "number" ? `${minHeight}px` : minHeight,
        height: height ? `${height}px` : undefined,
        transition: "height 0.3s ease-in-out",
      }}
    >
      {shouldRender ? (
        <ErrorBoundary>
          <Suspense fallback={fallback}>
            <div onLoad={handleContentLoaded}>{children}</div>
          </Suspense>
        </ErrorBoundary>
      ) : (
        fallback
      )}
    </div>
  )
}
