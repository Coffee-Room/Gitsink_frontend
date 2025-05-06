"use client"

import type { ReactNode } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface ScrollRevealProps {
  children: ReactNode
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom" | "rotate"
  duration?: number
  delay?: number
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  className?: string
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
}: ScrollRevealProps) {
  const { ref, style } = useScrollReveal({
    animation,
    duration,
    delay,
    threshold,
    rootMargin,
    triggerOnce,
  })

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}
