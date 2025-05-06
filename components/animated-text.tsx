"use client"

import { useTypewriter } from "@/hooks/use-typewriter"

interface AnimatedTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export default function AnimatedText({ text, className = "", speed = 50, delay = 0 }: AnimatedTextProps) {
  const { displayText } = useTypewriter({ text, speed, delay })

  return <span className={className}>{displayText}</span>
}
