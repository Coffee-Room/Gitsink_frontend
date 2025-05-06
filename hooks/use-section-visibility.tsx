"use client"

import { useEffect, useRef, useState } from "react"

interface UseSectionVisibilityOptions {
  threshold?: number
  rootMargin?: string
}

export function useSectionVisibility({ threshold = 0.3, rootMargin = "0px" }: UseSectionVisibilityOptions = {}) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    const handleScroll = () => {
      if (!element) return

      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how much of the section is visible
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
      const sectionHeight = rect.height

      // Calculate progress through the section (0 to 1)
      const sectionProgress = Math.max(0, Math.min(1, visibleHeight / sectionHeight))
      setProgress(sectionProgress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Initialize on mount
    handleScroll()

    return () => {
      if (element) {
        observer.unobserve(element)
      }
      window.removeEventListener("scroll", handleScroll)
    }
  }, [threshold, rootMargin])

  return { ref, isVisible, progress }
}
