"use client"

import { useEffect, useState, type ReactNode } from "react"
import { useInView } from "react-intersection-observer"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

type AnimationType = "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom" | "none"

interface CoordinatedAnimationProps {
  children: ReactNode
  type?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  className?: string
}

export function CoordinatedAnimation({
  children,
  type = "fade",
  delay = 0,
  duration = 500,
  threshold = 0.1,
  once = true,
  className = "",
}: CoordinatedAnimationProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
    // Skip if SSR
    skip: typeof window === "undefined",
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  // Handle animation state
  useEffect(() => {
    if (inView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true)
      }, delay)

      return () => clearTimeout(timer)
    }
    return () => {}
  }, [inView, delay, hasAnimated])

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  // Initial styles based on animation type
  const getInitialStyles = (): string => {
    if (typeof window === "undefined") return className // Return just the className for SSR

    if (type === "none" || hasAnimated) return className

    switch (type) {
      case "fade":
        return `opacity-0 ${className}`
      case "slide-up":
        return `opacity-0 translate-y-8 ${className}`
      case "slide-down":
        return `opacity-0 -translate-y-8 ${className}`
      case "slide-left":
        return `opacity-0 translate-x-8 ${className}`
      case "slide-right":
        return `opacity-0 -translate-x-8 ${className}`
      case "zoom":
        return `opacity-0 scale-95 ${className}`
      default:
        return className
    }
  }

  // Animation styles
  const getAnimationStyles = (): string => {
    if (typeof window === "undefined") return "" // Return empty string for SSR

    if (type === "none") return ""

    const transitionDuration = `${duration}ms`
    const transitionDelay = delay > 0 ? `${delay}ms` : ""

    return `transition-all ease-out ${
      transitionDuration ? `duration-${Math.floor(duration / 100)}00` : ""
    } ${transitionDelay ? `delay-${Math.floor(delay / 100)}00` : ""}`
  }

  return (
    <div
      ref={ref}
      className={`${getInitialStyles()} ${hasAnimated ? "opacity-100 translate-x-0 translate-y-0 scale-100" : ""} ${getAnimationStyles()}`}
    >
      {children}
    </div>
  )
}
