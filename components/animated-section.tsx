"use client"

import type { ReactNode } from "react"
import { useFadeIn } from "@/hooks/use-fade-in"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export default function AnimatedSection({ children, className = "", delay = 0, duration = 600 }: AnimatedSectionProps) {
  const { ref, style } = useFadeIn({ delay, duration })

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}
