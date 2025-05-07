import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Configuration for maintenance mode
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === "true"
const MAINTENANCE_TOKEN = process.env.MAINTENANCE_TOKEN || "gitsink-bypass-maintenance"

// Paths that should bypass maintenance mode
const BYPASS_PATHS = ["/api/health", "/api/status", "/_next", "/images", "/favicon.ico", "/maintenance"]

export function middleware(request: NextRequest) {
  // Check if we're in maintenance mode
  if (MAINTENANCE_MODE) {
    const { pathname } = request.nextUrl

    // Allow access to specific paths even in maintenance mode
    if (BYPASS_PATHS.some((path) => pathname.startsWith(path))) {
      return NextResponse.next()
    }

    // Check for bypass token in cookies or query params
    const bypassCookie = request.cookies.get("maintenance_bypass")?.value
    const bypassQuery = request.nextUrl.searchParams.get("maintenance_bypass")

    if (bypassCookie === MAINTENANCE_TOKEN || bypassQuery === MAINTENANCE_TOKEN) {
      // Allow access with valid bypass token
      const response = NextResponse.next()

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

  return NextResponse.next()
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
