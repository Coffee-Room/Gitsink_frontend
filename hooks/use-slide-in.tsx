"use client"

import type { CSSProperties } from "react"
import { useInView } from "@/hooks/use-in-view"

type Direction = "left" | "right" | "up" | "down"

interface UseSlideInOptions {
  direction?: Direction
  distance?: number
  duration?: number
  delay?: number
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useSlideIn({
  direction = "left",
  distance = 50,
  duration = 600,
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
}: UseSlideInOptions = {}) {
  const { ref, isInView } = useInView({
    threshold,
    rootMargin,
    triggerOnce,
  })

  const getTransform = (dir: Direction, dist: number): string => {
    switch (dir) {
      case "left":
        return `translateX(-${dist}px)`
      case "right":
        return `translateX(${dist}px)`
      case "up":
        return `translateY(-${dist}px)`
      case "down":
        return `translateY(${dist}px)`
      default:
        return `translateX(-${dist}px)`
    }
  }

  const style: CSSProperties = {
    opacity: 0,
    transform: getTransform(direction, distance),
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  }

  if (isInView) {
    style.opacity = 1
    style.transform = "translate(0)"
  }

  return { ref, style, isInView }
}
