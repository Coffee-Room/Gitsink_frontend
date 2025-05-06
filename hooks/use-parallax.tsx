"use client"

import { useEffect, useRef, useState } from "react"

interface UseParallaxOptions {
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  reverse?: boolean
}

export function useParallax({ speed = 0.1, direction = "up", reverse = false }: UseParallaxOptions = {}) {
  const ref = useRef<HTMLElement | null>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const elementTop = element.getBoundingClientRect().top
      const elementBottom = element.getBoundingClientRect().bottom
      const windowHeight = window.innerHeight

      // Only apply parallax when element is in view
      if (elementBottom > 0 && elementTop < windowHeight) {
        // Calculate how far the element is from the center of the viewport
        const scrollPosition = (elementTop - windowHeight / 2) * (reverse ? -1 : 1)
        setOffset(scrollPosition * speed)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Initialize on mount
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed, reverse, direction])

  const style = {
    transform:
      direction === "up" || direction === "down"
        ? `translateY(${direction === "down" ? offset : -offset}px)`
        : `translateX(${direction === "right" ? offset : -offset}px)`,
    transition: "transform 0.1s ease-out",
  }

  return { ref, style, offset }
}
