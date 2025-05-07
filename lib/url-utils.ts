/**
 * Safely creates a URL object with fallback to a default URL if the input is invalid
 * @param urlString The URL string to construct
 * @returns A valid URL object or undefined if it can't be constructed
 */
export function createSafeUrl(urlString?: string): URL | undefined {
  // Default fallback URL
  const fallbackUrl = "https://www.gitsink.tech"

  // If no URL string is provided, use environment variables or fallback
  if (!urlString) {
    try {
      if (process.env.NEXT_PUBLIC_SITE_URL) {
        // Make sure URL has protocol
        const url = process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
          ? process.env.NEXT_PUBLIC_SITE_URL
          : `https://${process.env.NEXT_PUBLIC_SITE_URL}`
        return new URL(url)
      }
      if (process.env.NEXT_PUBLIC_BASE_URL) {
        // Make sure URL has protocol
        const url = process.env.NEXT_PUBLIC_BASE_URL.startsWith("http")
          ? process.env.NEXT_PUBLIC_BASE_URL
          : `https://${process.env.NEXT_PUBLIC_BASE_URL}`
        return new URL(url)
      }
      // Fall back to hardcoded URL
      return new URL(fallbackUrl)
    } catch (error) {
      console.error("Failed to create URL from environment variables", error)
      return new URL(fallbackUrl)
    }
  }

  try {
    // Try to create a URL directly
    return new URL(urlString)
  } catch (error) {
    // If that fails, try to create a URL with a base
    try {
      // Try with environment variables
      if (process.env.NEXT_PUBLIC_SITE_URL) {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
          ? process.env.NEXT_PUBLIC_SITE_URL
          : `https://${process.env.NEXT_PUBLIC_SITE_URL}`
        return new URL(urlString, baseUrl)
      }
      if (process.env.NEXT_PUBLIC_BASE_URL) {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL.startsWith("http")
          ? process.env.NEXT_PUBLIC_BASE_URL
          : `https://${process.env.NEXT_PUBLIC_BASE_URL}`
        return new URL(urlString, baseUrl)
      }
      // Fall back to hardcoded base
      return new URL(urlString, fallbackUrl)
    } catch (innerError) {
      // If all attempts fail, log the error and return undefined
      console.error(`Failed to create URL from: ${urlString}`, innerError)
      return undefined
    }
  }
}

/**
 * Gets the absolute URL for a path with robust fallbacks
 * @param path The relative path
 * @returns The absolute URL as a string
 */
export function getAbsoluteUrl(path = ""): string {
  // Default fallback URL
  let baseUrl = "https://www.gitsink.tech"

  // Try to use environment variables if available
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    // Make sure URL has protocol
    baseUrl = process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
      ? process.env.NEXT_PUBLIC_SITE_URL
      : `https://${process.env.NEXT_PUBLIC_SITE_URL}`
  } else if (process.env.NEXT_PUBLIC_BASE_URL) {
    // Make sure URL has protocol
    baseUrl = process.env.NEXT_PUBLIC_BASE_URL.startsWith("http")
      ? process.env.NEXT_PUBLIC_BASE_URL
      : `https://${process.env.NEXT_PUBLIC_BASE_URL}`
  }

  // Remove trailing slash from base and leading slash from path to avoid double slashes
  const cleanBase = baseUrl.replace(/\/$/, "")
  const cleanPath = path.replace(/^\//, "")

  return cleanPath ? `${cleanBase}/${cleanPath}` : cleanBase
}

/**
 * Checks if a string is a valid URL
 * @param urlString The URL string to validate
 * @returns boolean indicating if the string is a valid URL
 */
export function isValidUrl(urlString: string): boolean {
  try {
    new URL(urlString)
    return true
  } catch (e) {
    return false
  }
}
