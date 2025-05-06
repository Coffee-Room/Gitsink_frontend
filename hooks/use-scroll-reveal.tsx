"use client"

import { useEffect, useRef, useState } from "react"

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

  const getInitialStyles = () => {
    switch (animation) {
      case "fade":
        return { opacity: 0 }
      case "slide-up":
        return { opacity: 0, transform: "translateY(50px)" }
      case "slide-down":
        return { opacity: 0, transform: "translateY(-50px)" }
      case "slide-left":
        return { opacity: 0, transform: "translateX(50px)" }
      case "slide-right":
        return { opacity: 0, transform: "translateX(-50px)" }
      case "zoom":
        return { opacity: 0, transform: "scale(0.8)" }
      case "rotate":
        return { opacity: 0, transform: "rotate(-10deg)" }
      default:
        return { opacity: 0 }
    }
  }

  const getFinalStyles = () => {
    switch (animation) {
      case "fade":
      case "slide-up":
      case "slide-down":
      case "slide-left":
      case "slide-right":
      case "zoom":
      case "rotate":
        return { opacity: 1, transform: "none" }
      default:
        return { opacity: 1 }
    }
  }

  const style = {
    ...getInitialStyles(),
    transition: `all ${duration}ms ease-out ${delay}ms`,
    ...(isRevealed ? getFinalStyles() : {}),
  }

  return { ref, style, isRevealed }
}
