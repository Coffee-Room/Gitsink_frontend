import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Configuration for maintenance mode
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === "true"
const MAINTENANCE_TOKEN = process.env.MAINTENANCE_TOKEN || "gitsink-bypass-maintenance"

// Paths that should bypass maintenance mode
const BYPASS_PATHS = ["/api/health", "/api/status", "/_next", "/images", "/favicon.ico", "/maintenance"]

export function middleware(request: NextRequest) {
  // Get response to modify
  const response = NextResponse.next()

  // Add security headers
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64")

  // Content Security Policy
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim()

  // Add security headers
  const securityHeaders = {
    "Content-Security-Policy": cspHeader,
    "X-XSS-Protection": "1; mode=block",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    "X-DNS-Prefetch-Control": "on",
  }

  // Add security headers to response
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // Check if we're in maintenance mode
  if (MAINTENANCE_MODE) {
    const { pathname } = request.nextUrl

    // Allow access to specific paths even in maintenance mode
    if (BYPASS_PATHS.some((path) => pathname.startsWith(path))) {
      return response
    }

    // Check for bypass token in cookies or query params
    const bypassCookie = request.cookies.get("maintenance_bypass")?.value
    const bypassQuery = request.nextUrl.searchParams.get("maintenance_bypass")

    if (bypassCookie === MAINTENANCE_TOKEN || bypassQuery === MAINTENANCE_TOKEN) {
      // Allow access with valid bypass token

      // If the token was in query params, set it as a cookie for future requests
      if (bypassQuery === MAINTENANCE_TOKEN && bypassCookie !== MAINTENANCE_TOKEN) {
        response.cookies.set("maintenance_bypass", MAINTENANCE_TOKEN, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24, // 24 hours
          path: "/",
        })
      }

      return response
    }

    // Redirect to maintenance page
    const url = request.nextUrl.clone()
    url.pathname = "/maintenance"
    return NextResponse.rewrite(url)
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public image files)
     */
    "/((?!_next/static|_next/image|favicon.ico|images).*)",
  ],
}
