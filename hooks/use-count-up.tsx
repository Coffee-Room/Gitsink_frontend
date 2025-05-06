"use client"

import { useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

interface UseCountUpOptions {
  end: number
  start?: number
  duration?: number
  delay?: number
  formatter?: (value: number) => string
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useCountUp({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  formatter = (value) => Math.round(value).toString(),
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start)
  const { ref, isInView } = useInView({
    threshold,
    rootMargin,
    triggerOnce,
  })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number
    let currentCount = start

    const startAnimation = () => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)

        currentCount = start + progress * (end - start)
        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        }
      }

      animationFrame = requestAnimationFrame(step)
    }

    const delayTimeout = setTimeout(() => {
      startAnimation()
    }, delay)

    return () => {
      cancelAnimationFrame(animationFrame)
      clearTimeout(delayTimeout)
    }
  }, [start, end, duration, delay, isInView])

  return { ref, count, formattedCount: formatter(count), isInView }
}
