"use client"

import { ArrowUp } from "lucide-react"
import { useScrollToTop } from "@/hooks/use-scroll-to-top"
import { Button } from "@/components/ui/button"

interface ScrollToTopButtonProps {
  threshold?: number
}

export default function ScrollToTopButton({ threshold = 300 }: ScrollToTopButtonProps) {
  const { isVisible, scrollToTop } = useScrollToTop({ threshold })

  if (!isVisible) return null

  return (
    <Button
      variant="secondary"
      size="icon"
      className="fixed bottom-6 right-6 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-opacity z-50"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}
