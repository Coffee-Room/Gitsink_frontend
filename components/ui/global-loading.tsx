"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

export function GlobalLoading() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Hide the loading indicator after a short delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}
