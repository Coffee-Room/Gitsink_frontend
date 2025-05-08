"use client"

import { useSearchParams as useNextSearchParams } from "next/navigation"
import { useMemo } from "react"

// A safe wrapper around useSearchParams that works in both client and server contexts
export function useSearchParams() {
  const params = useNextSearchParams()

  // Memoize the URLSearchParams object to avoid unnecessary re-renders
  return useMemo(() => {
    if (typeof window !== "undefined") {
      return params
    }

    // Return empty Map for server-side rendering
    return new URLSearchParams()
  }, [params])
}

// Helper function to get a search param value safely
export function getSearchParam(params: URLSearchParams | null, key: string): string | null {
  if (!params) return null
  return params.get(key)
}
