"use client"

import type { CSSProperties } from "react"
import { useInView } from "@/hooks/use-in-view"

interface UseFadeInOptions {
  duration?: number
  delay?: number
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useFadeIn({
  duration = 600,
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
}: UseFadeInOptions = {}) {
  const { ref, isInView } = useInView({
    threshold,
    rootMargin,
    triggerOnce,
  })

  const style: CSSProperties = {
    opacity: 0,
    transform: "translateY(20px)",
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  }

  if (isInView) {
    style.opacity = 1
    style.transform = "translateY(0)"
  }

  return { ref, style, isInView }
}
