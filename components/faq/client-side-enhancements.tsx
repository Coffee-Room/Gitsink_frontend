"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import the scroll to top button with ssr: false
const ScrollToTopButton = dynamic(() => import("@/components/ui/scroll-to-top-button"), {
  ssr: false,
  loading: () => null,
})

export default function ClientSideEnhancements() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <ScrollToTopButton />
    </>
  )
}
