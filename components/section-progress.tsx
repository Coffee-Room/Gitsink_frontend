"use client"

import type { ReactNode } from "react"
import { useSectionVisibility } from "@/hooks/use-section-visibility"

interface SectionProgressProps {
  children: ReactNode
  onProgress?: (progress: number) => void
  onVisibilityChange?: (isVisible: boolean) => void
  threshold?: number
  rootMargin?: string
  className?: string
}

export default function SectionProgress({
  children,
  onProgress,
  onVisibilityChange,
  threshold = 0.3,
  rootMargin = "0px",
  className = "",
}: SectionProgressProps) {
  const { ref, isVisible, progress } = useSectionVisibility({
    threshold,
    rootMargin,
  })

  // Call the callbacks when values change
  if (onProgress) onProgress(progress)
  if (onVisibilityChange) onVisibilityChange(isVisible)

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  )
}
