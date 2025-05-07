"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function useScrollToTopOnNavigation() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [pathname])
}
