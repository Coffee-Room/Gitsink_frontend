"use client"

import type { ReactNode } from "react"
import { useFadeIn } from "@/hooks/use-fade-in"
import { useIsMobile } from "@/hooks/use-is-mobile"
import { useRef } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  disableOnMobile?: boolean
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 600,
  disableOnMobile = false,
}: AnimatedSectionProps) {
  const isMobile = useIsMobile()
  const sectionRef = useRef<HTMLDivElement>(null)

  // Simplify animations on mobile
  const mobileOptimizedDuration = isMobile ? Math.min(duration, 400) : duration
  const mobileOptimizedDelay = isMobile ? Math.min(delay, 100) : delay

  const { ref, style } = useFadeIn({
    delay: mobileOptimizedDelay,
    duration: mobileOptimizedDuration,
    disabled: isMobile && disableOnMobile,
  })

  // Skip animation entirely if disableOnMobile is true
  if (isMobile && disableOnMobile) {
    return (
      <div ref={sectionRef} className={className}>
        {children}
      </div>
    )
  }

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}
