import { notFound } from "next/navigation"

/**
 * Utility function to handle 404 errors
 * @param condition - If true, will trigger a 404 error
 * @param message - Optional message for debugging (not shown to users)
 */
export function handleNotFound(condition: boolean, message?: string): void {
  if (condition) {
    console.log(`Not found: ${message || "Resource not found"}`)
    notFound()
  }
}
