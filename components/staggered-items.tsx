"use client"

import { Children, type ReactNode, cloneElement, isValidElement } from "react"

interface StaggeredItemsProps {
  children: ReactNode
  baseDelay?: number
  delayIncrement?: number
}

export default function StaggeredItems({ children, baseDelay = 0, delayIncrement = 100 }: StaggeredItemsProps) {
  const childrenArray = Children.toArray(children)

  return (
    <>
      {childrenArray.map((child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            ...child.props,
            delay: baseDelay + index * delayIncrement,
            key: index,
          })
        }
        return child
      })}
    </>
  )
}
