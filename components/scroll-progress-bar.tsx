"use client"

import { useScrollProgress } from "@/hooks/use-scroll-progress"

interface ScrollProgressBarProps {
  color?: string
  height?: number
  position?: "top" | "bottom"
  zIndex?: number
}

export default function ScrollProgressBar({
  color = "bg-primary",
  height = 4,
  position = "top",
  zIndex = 50,
}: ScrollProgressBarProps) {
  const progress = useScrollProgress()

  return (
    <div
      className={`fixed left-0 ${position === "top" ? "top-0" : "bottom-0"} w-full ${color}`}
      style={{
        zIndex,
        height: `${height}px`,
        width: `${progress}%`,
        transition: "width 0.1s ease-out",
      }}
    />
  )
}
