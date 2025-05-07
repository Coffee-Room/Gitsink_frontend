"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

interface LoadingContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  isHydrated: boolean
  sectionsLoaded: Record<string, boolean>
  setSectionLoaded: (sectionId: string, loaded: boolean) => void
  allSectionsLoaded: boolean
}

// Create a default context value to avoid the "must be used within a provider" error
const defaultContextValue: LoadingContextType = {
  isLoading: true,
  setIsLoading: () => {},
  isHydrated: false,
  sectionsLoaded: {},
  setSectionLoaded: () => {},
  allSectionsLoaded: false,
}

const LoadingContext = createContext<LoadingContextType>(defaultContextValue)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isHydrated, setIsHydrated] = useState(false)
  const [sectionsLoaded, setSectionsLoaded] = useState<Record<string, boolean>>({})

  // Calculate if all sections are loaded
  const allSectionsLoaded =
    Object.values(sectionsLoaded).every((loaded) => loaded) && Object.keys(sectionsLoaded).length > 0

  // Mark a section as loaded - use useCallback to prevent recreation on each render
  const setSectionLoaded = useCallback((sectionId: string, loaded: boolean) => {
    if (!sectionId) return // Guard against empty section IDs

    setSectionsLoaded((prev) => {
      // Only update if the value is actually changing
      if (prev[sectionId] === loaded) return prev

      // Create a new object to avoid reference issues
      return {
        ...prev,
        [sectionId]: loaded,
      }
    })
  }, [])

  // Set hydration state on client
  useEffect(() => {
    setIsHydrated(true)

    // Set initial loading state
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800) // Short delay to ensure critical content is loaded

    return () => clearTimeout(timer)
  }, [])

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isHydrated,
        sectionsLoaded,
        setSectionLoaded,
        allSectionsLoaded,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  // No need to throw an error, as we've provided a default context value
  return context
}
