"use client"

import { useEffect, useRef } from "react"
import { useScrollProgress } from "@/hooks/use-scroll-progress"

interface ScrollAnimatedBackgroundProps {
  className?: string
}

export default function ScrollAnimatedBackground({ className = "" }: ScrollAnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const progress = useScrollProgress()

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

      // Enable shadow blur for all circles
      ctx.shadowBlur = 15
      ctx.shadowColor = "rgba(267, 75%, 50%, 0.2)"

      // Number of circles to draw
      const numCircles = 20

      // Draw circles that move based on scroll progress
      for (let i = 0; i < numCircles; i++) {
        const size = (canvas.width / 30) * (0.8 + (i % 4) * 0.3)

        // Position circles based on scroll progress
        const x = (canvas.width / numCircles) * i + ((progress * 1.5) % canvas.width)
        const y = canvas.height / 2 + Math.sin(progress / 15 + i) * (canvas.height / 10)

        // Use purple theme colors that match the site's aesthetic
        const opacity = 0.04 + (i % 3) * 0.01 // Slightly reduced opacity to account for blur
        const hue = 267 // Primary purple hue from our theme
        const saturation = 75 // Match the primary color saturation
        const lightness = 50 + (i % 5) * 5 // Subtle variations in lightness
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`

        // Draw main circle
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()

        // Draw a smaller, slightly brighter inner circle for a glow effect
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness + 10}%, ${opacity * 1.5})`
        ctx.beginPath()
        ctx.arc(x, y, size * 0.6, 0, Math.PI * 2)
        ctx.fill()
      }

      // Reset shadow for other operations
      ctx.shadowBlur = 0

      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [progress])

  return (
    <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full -z-10 pointer-events-none ${className}`} />
  )
}
