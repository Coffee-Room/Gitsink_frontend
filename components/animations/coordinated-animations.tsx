"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const hasAnimated = useRef(false)

  // In SSR, just render the children without animation
  if (typeof window === "undefined") {
    return <div className={className}>{children}</div>
  }

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  // Check for mobile devices
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Set up intersection observer
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          const timer = setTimeout(
            () => {
              setIsVisible(true)
              hasAnimated.current = true
            },
            isMobile ? Math.min(delay, 200) : delay,
          )

          if (once) {
            observer.unobserve(element)
          }

          return () => clearTimeout(timer)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px",
      },
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [delay, threshold, once, isMobile])

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
