"use client"

import { useTypewriter } from "@/hooks/use-typewriter"
import { useIsMobile } from "@/hooks/use-is-mobile"
import { useMemo } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  disableOnMobile?: boolean
}

export default function AnimatedText({
  text,
  className = "",
  speed: initialSpeed = 50,
  delay: initialDelay = 0,
  disableOnMobile = false,
}: AnimatedTextProps) {
  const isMobile = useIsMobile()

  const { speed, delay } = useMemo(() => {
    let calculatedSpeed = initialSpeed
    let calculatedDelay = initialDelay

    if (isMobile) {
      if (disableOnMobile) {
        return { speed: 0, delay: 0 } // Effectively disable animation
      }

      // Faster typing on mobile
      calculatedSpeed = Math.max(20, initialSpeed / 2)
      calculatedDelay = Math.min(initialDelay, 300)
    }

    return { speed: calculatedSpeed, delay: calculatedDelay }
  }, [isMobile, disableOnMobile, initialSpeed, initialDelay])

  const { displayText } = useTypewriter({ text, speed, delay })

  if (isMobile && disableOnMobile) {
    return <span className={className}>{text}</span>
  }

  return <span className={className}>{displayText}</span>
}
