"use client"

import { useEffect, useRef } from "react"
import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { useIsMobile } from "@/hooks/use-is-mobile"

interface ScrollAnimatedBackgroundProps {
  className?: string
}

export default function ScrollAnimatedBackground({ className = "" }: ScrollAnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const progress = useScrollProgress()
  const isMobile = useIsMobile()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    // Draw animated background based on scroll progress
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Reduce effects on mobile
      const numCircles = isMobile ? 8 : 16
      const shadowBlur = isMobile ? 5 : 15

      // Enable shadow blur for all circles (reduced on mobile)
      ctx.shadowBlur = shadowBlur
      ctx.shadowColor = "rgba(33, 175, 230, 0.2)"

      // Draw circles that move based on scroll progress
      for (let i = 0; i < numCircles; i++) {
        // Smaller circles on mobile
        const sizeFactor = isMobile ? 0.5 : 0.8
        const size = (canvas.width / 30) * sizeFactor * (0.8 + (i % 4) * 0.3)

        // Slower movement on mobile
        const speedFactor = isMobile ? 0.3 : 0.8
        const x = (canvas.width / numCircles) * i + ((progress * 1.5 * speedFactor) % canvas.width)
        const y = canvas.height / 2 + Math.sin(progress / 15 + i) * (canvas.height / 10) * speedFactor

        // Use blue theme colors that match the logo
        const opacity = 0.04 + (i % 3) * 0.01 // Slightly reduced opacity to account for blur
        const hue = 195 // Blue hue from the logo
        const saturation = 100 // Match the logo saturation
        const lightness = 50 + (i % 5) * 5 // Subtle variations in lightness
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`

        // Draw main circle
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()

        // On mobile, skip drawing the inner circle for better performance
        if (!isMobile) {
          // Draw a smaller, slightly brighter inner circle for a glow effect
          ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness + 10}%, ${opacity * 1.5})`
          ctx.beginPath()
          ctx.arc(x, y, size * 0.6, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Reset shadow for other operations
      ctx.shadowBlur = 0

      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [progress, isMobile])

  // On very small devices, don't render the background at all
  if (typeof window !== "undefined" && window.innerWidth < 360) {
    return null
  }

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 pointer-events-none ${className}`}
      style={{ maxWidth: "100vw", overflow: "hidden" }}
    />
  )
}
