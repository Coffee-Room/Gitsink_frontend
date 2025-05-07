import { headers } from "next/headers"

export function getClientIp(): string {
  const headersList = headers()

  // Try to get IP from standard headers
  const forwardedFor = headersList.get("x-forwarded-for")
  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwardedFor.split(",")[0].trim()
  }

  // Try Vercel-specific header
  const vercelIp = headersList.get("x-vercel-forwarded-for")
  if (vercelIp) {
    return vercelIp.trim()
  }

  // Try real IP header
  const realIp = headersList.get("x-real-ip")
  if (realIp) {
    return realIp.trim()
  }

  // Fallback to a placeholder for local development
  return "127.0.0.1"
}
