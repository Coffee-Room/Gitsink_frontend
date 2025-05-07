"use client"

import { useEffect, useState, useRef, type ReactNode } from "react"
import { useLoading } from "@/contexts/loading-context"

interface CoordinatedAnimationProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  disabled?: boolean
  type?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom"
  waitForHydration?: boolean
}

export function CoordinatedAnimation({
  children,
  delay = 0,
  duration = 600,
  className = "",
  disabled = false,
  type = "fade",
  waitForHydration = true,
}: CoordinatedAnimationProps) {
  const { isHydrated } = useLoading()
  const [isVisible, setIsVisible] = useState(!waitForHydration)
  const animationStarted = useRef(false)

  useEffect(() => {
    if (disabled || animationStarted.current) {
      return
    }

    if (waitForHydration && !isHydrated) return

    const timer = setTimeout(() => {
      setIsVisible(true)
      animationStarted.current = true
    }, delay)

    return () => clearTimeout(timer)
  }, [delay, disabled, isHydrated, waitForHydration])

  // Define initial and animated styles based on animation type
  const getStyles = () => {
    if (disabled || (!waitForHydration && !isHydrated)) {
      return {}
    }

    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "none" : "",
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    }

    if (!isVisible) {
      switch (type) {
        case "slide-up":
          return { ...baseStyles, transform: "translateY(20px)" }
        case "slide-down":
          return { ...baseStyles, transform: "translateY(-20px)" }
        case "slide-left":
          return { ...baseStyles, transform: "translateX(20px)" }
        case "slide-right":
          return { ...baseStyles, transform: "translateX(-20px)" }
        case "zoom":
          return { ...baseStyles, transform: "scale(0.95)" }
        case "fade":
        default:
          return baseStyles
      }
    }

    return baseStyles
  }

  return (
    <div className={className} style={getStyles()}>
      {children}
    </div>
  )
}
