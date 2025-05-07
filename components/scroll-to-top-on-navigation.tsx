"use client"

import { useScrollToTopOnNavigation } from "@/hooks/use-scroll-to-top-on-navigation"

export function ScrollToTopOnNavigation() {
  // This hook handles the scroll behavior
  useScrollToTopOnNavigation()

  // This component doesn't render anything
  return null
}
