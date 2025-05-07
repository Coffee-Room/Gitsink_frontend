"use client"

import { useState, useEffect, useRef } from "react"

interface UseLazyLoadOptions {
  rootMargin?: string
  threshold?: number
  triggerOnce?: boolean
}

export function useLazyLoad({ rootMargin = "200px 0px", threshold = 0, triggerOnce = true }: UseLazyLoadOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            setHasTriggered(true)
            observer.unobserve(currentRef)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [rootMargin, threshold, triggerOnce])

  // If we've already triggered once and it's set to triggerOnce, always return true
  const shouldRender = triggerOnce && hasTriggered ? true : isVisible

  return { ref, isVisible: shouldRender }
}
