"use client"

import type { ReactNode } from "react"
import { useParallax } from "@/hooks/use-parallax"

interface ParallaxElementProps {
  children: ReactNode
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  reverse?: boolean
  className?: string
}

export default function ParallaxElement({
  children,
  speed = 0.1,
  direction = "up",
  reverse = false,
  className = "",
}: ParallaxElementProps) {
  const { ref, style } = useParallax({ speed, direction, reverse })

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}
