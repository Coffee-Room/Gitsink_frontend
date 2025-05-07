"use client"

import { useState, useEffect } from "react"

interface ApiResponseProps {
  jsonData: string
  loadingDelay?: number
  typingSpeed?: number
  className?: string
}

export function ApiResponse({ jsonData, loadingDelay = 2000, typingSpeed = 15, className = "" }: ApiResponseProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [responseText, setResponseText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  // Simulate loading and then typing the response
  useEffect(() => {
    // Initial loading delay
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)

      // Start typing effect after loading
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= jsonData.length) {
          setResponseText(jsonData.substring(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
        }
      }, typingSpeed)

      return () => clearInterval(typingInterval)
    }, loadingDelay)

    return () => clearTimeout(loadingTimer)
  }, [jsonData, loadingDelay, typingSpeed])

  // Loading animation component
  const LoadingAnimation = () => (
    <div className="flex flex-col space-y-3">
      <div className="h-4 bg-gray-700 rounded-md w-3/4 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded-md w-1/2 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded-md w-5/6 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded-md w-2/3 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded-md w-3/4 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded-md w-1/2 animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded-md w-2/3 animate-pulse"></div>
    </div>
  )

  return (
    <div className={`bg-zinc-900 p-4 font-mono text-sm overflow-x-auto min-h-[200px] ${className}`}>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <pre className="text-blue-400">
          {responseText}
          {cursorVisible && <span className="inline-block w-2 h-4 bg-blue-400 ml-0.5 animate-pulse"></span>}
        </pre>
      )}
    </div>
  )
}
