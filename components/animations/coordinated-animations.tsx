"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { useInView } from "@/hooks/use-in-view"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { useIsMobile } from "@/hooks/use-is-mobile"

interface CoordinatedAnimationProps {
  children: ReactNode
  delay?: number
  type: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom"
  className?: string
  threshold?: number
  once?: boolean
}

export function CoordinatedAnimation({
  children,
  delay = 0,
  type = "fade",
  className = "",
  threshold = 0.1,
  once = true,
}: CoordinatedAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold, once })
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile()
  const hasAnimated = useRef(false)

  // Simplify animations on mobile
  const mobileOptimizedDelay = isMobile ? Math.min(delay, 200) : delay

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    if (inView && !hasAnimated.current) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        hasAnimated.current = true
      }, mobileOptimizedDelay)

      return () => clearTimeout(timer)
    }
  }, [inView, mobileOptimizedDelay, prefersReducedMotion])

  // If user prefers reduced motion, skip animations
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (type) {
        case "fade":
          return "opacity-0"
        case "slide-up":
          return "opacity-0 translate-y-8"
        case "slide-down":
          return "opacity-0 -translate-y-8"
        case "slide-left":
          return "opacity-0 translate-x-8"
        case "slide-right":
          return "opacity-0 -translate-x-8"
        case "zoom":
          return "opacity-0 scale-95"
        default:
          return "opacity-0"
      }
    }
    return "opacity-100 translate-x-0 translate-y-0 scale-100"
  }

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${getAnimationStyles()} ${className}`}>
      {children}
    </div>
  )
}
