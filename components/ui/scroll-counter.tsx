"use client"

import { useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

interface ScrollCounterProps {
  start?: number
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function ScrollCounter({
  start = 0,
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: ScrollCounterProps) {
  const [count, setCount] = useState(start)
  const { ref, isInView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * (end - start) + start))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [start, end, duration, isInView])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
