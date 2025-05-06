"use client"

import { useEffect, useState } from "react"

interface UseScrollToTopOptions {
  threshold?: number
}

export function useScrollToTop({ threshold = 300 }: UseScrollToTopOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Initialize on mount
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return { isVisible, scrollToTop }
}
