"use client"

import { useCountUp } from "@/hooks/use-count-up"

interface AnimatedCounterProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  formatter?: (value: number) => string
  className?: string
}

export default function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  formatter,
  className = "",
}: AnimatedCounterProps) {
  const { ref, formattedCount } = useCountUp({
    end,
    start,
    duration,
    delay,
    formatter,
  })

  return (
    <span ref={ref} className={className}>
      {formattedCount}
    </span>
  )
}
