"use client"

import { useEffect, useState } from "react"

interface UseTypewriterOptions {
  text: string
  speed?: number
  delay?: number
}

export function useTypewriter({ text, speed = 50, delay = 0 }: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let charIndex = 0

    const startTyping = () => {
      setIsTyping(true)

      const typeNextChar = () => {
        if (charIndex < text.length) {
          setDisplayText(text.substring(0, charIndex + 1))
          charIndex++
          timeout = setTimeout(typeNextChar, speed)
        } else {
          setIsTyping(false)
          setIsDone(true)
        }
      }

      typeNextChar()
    }

    const delayTimeout = setTimeout(() => {
      startTyping()
    }, delay)

    return () => {
      clearTimeout(timeout)
      clearTimeout(delayTimeout)
    }
  }, [text, speed, delay])

  return { displayText, isTyping, isDone }
}
