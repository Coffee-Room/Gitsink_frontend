"use client"

import { useState, useEffect, type RefObject } from "react"

interface UseInViewOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  triggerOnce?: boolean
  skip?: boolean
}

export function useInView({
  root = null,
  rootMargin = "0px",
  threshold = 0,
  triggerOnce = false,
  skip = false,
}: UseInViewOptions = {}): [RefObject<Element>, boolean] {
  const [ref, setRef] = useState<Element | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    // Skip if SSR or explicitly skipped
    if (typeof window === "undefined" || skip) {
      return
    }

    if (ref) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          const inView = entry.isIntersecting
          setIsInView(inView)

          if (inView && triggerOnce) {
            observer.unobserve(ref)
          }
        },
        { root, rootMargin, threshold },
      )

      observer.observe(ref)

      return () => {
        observer.disconnect()
      }
    }
  }, [ref, root, rootMargin, threshold, triggerOnce, skip])

  return [setRef as unknown as RefObject<Element>, isInView]
}
