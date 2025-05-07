"use client"

import type { ReactNode } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useIsMobile } from "@/hooks/use-is-mobile"
import { useRef } from "react"

interface ScrollRevealProps {
  children: ReactNode
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom" | "rotate"
  duration?: number
  delay?: number
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  className?: string
  disableOnMobile?: boolean
}

export default function ScrollReveal({
  children,
  animation = "fade",
  duration = 600,
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
  className = "",
  disableOnMobile = false,
}: ScrollRevealProps) {
  const isMobile = useIsMobile()
  const elementRef = useRef<HTMLDivElement>(null)

  // Simplify animations on mobile
  const mobileOptimizedAnimation = isMobile ? "fade" : animation
  const mobileOptimizedDuration = isMobile ? Math.min(duration, 400) : duration
  const mobileOptimizedDelay = isMobile ? Math.min(delay, 100) : delay

  const { ref, style } = useScrollReveal({
    animation: mobileOptimizedAnimation,
    duration: mobileOptimizedDuration,
    delay: mobileOptimizedDelay,
    threshold,
    rootMargin,
    triggerOnce,
  })

  // Skip animation entirely if disableOnMobile is true
  if (isMobile && disableOnMobile) {
    return <div className={className}>{children}</div>
  }

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}
