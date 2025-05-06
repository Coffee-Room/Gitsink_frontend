"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom" | "rotate"
  duration?: number
  delay?: number
}

export function useScrollReveal({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
  animation = "fade",
  duration = 600,
  delay = 0,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLElement | null>(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsRevealed(true)
          }, delay)

          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsRevealed(false)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, triggerOnce, delay])

  // If user prefers reduced motion, only use fade animation with shorter duration
  const effectiveAnimation = prefersReducedMotion ? "fade" : animation
  const effectiveDuration = prefersReducedMotion ? Math.min(duration, 300) : duration

  const getInitialStyles = () => {
    // If user prefers reduced motion, use minimal initial styles
    if (prefersReducedMotion) {
      return { opacity: 0 }
    }

    switch (effectiveAnimation) {
      case "fade":
        return { opacity: 0 }
      case "slide-up":
        return { opacity: 0, transform: "translateY(30px)" }
      case "slide-down":
        return { opacity: 0, transform: "translateY(-30px)" }
      case "slide-left":
        return { opacity: 0, transform: "translateX(30px)" }
      case "slide-right":
        return { opacity: 0, transform: "translateX(-30px)" }
      case "zoom":
        return { opacity: 0, transform: "scale(0.9)" }
      case "rotate":
        return { opacity: 0, transform: "rotate(-5deg)" }
      default:
        return { opacity: 0 }
    }
  }

  const getFinalStyles = () => {
    return { opacity: 1, transform: "none" }
  }

  const style = {
    ...getInitialStyles(),
    transition: `all ${effectiveDuration}ms ease-out ${delay}ms`,
    ...(isRevealed ? getFinalStyles() : {}),
    willChange: "opacity, transform",
  }

  return { ref, style, isRevealed }
}
