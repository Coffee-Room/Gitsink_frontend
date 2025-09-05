"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollAnimatedBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function ScrollAnimatedBackground({ children, className = "" }: ScrollAnimatedBackgroundProps) {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])
  const gradientOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.3])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        backgroundPosition: `center ${backgroundY}`,
        opacity,
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-purple-500/10"
        style={{
          opacity: gradientOpacity,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

export default ScrollAnimatedBackground
