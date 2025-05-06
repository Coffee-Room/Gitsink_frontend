"use client"

import { Children, type ReactNode, cloneElement, isValidElement } from "react"
import { useIsMobile } from "@/hooks/use-is-mobile"

interface StaggeredItemsProps {
  children: ReactNode
  baseDelay?: number
  delayIncrement?: number
  disableOnMobile?: boolean
}

export default function StaggeredItems({
  children,
  baseDelay = 0,
  delayIncrement = 100,
  disableOnMobile = false,
}: StaggeredItemsProps) {
  const isMobile = useIsMobile()

  // Reduce stagger delay on mobile
  const mobileOptimizedBaseDelay = isMobile ? Math.min(baseDelay, 100) : baseDelay
  const mobileOptimizedDelayIncrement = isMobile ? Math.min(delayIncrement, 50) : delayIncrement

  // Skip staggering entirely if disableOnMobile is true
  if (isMobile && disableOnMobile) {
    return <>{children}</>
  }

  const childrenArray = Children.toArray(children)

  return (
    <>
      {childrenArray.map((child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            ...child.props,
            delay: mobileOptimizedBaseDelay + index * mobileOptimizedDelayIncrement,
            key: index,
          })
        }
        return child
      })}
    </>
  )
}
