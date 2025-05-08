import { type NextRequest, NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase"
import { generateSessionToken } from "@/lib/admin-auth"

export async function POST(request: NextRequest) {
  try {
    const { token, session_id } = await request.json()

    if (!token || !session_id) {
      return NextResponse.json({ error: "Token and session ID are required" }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()

    // Get the temporary session
    const { data: session, error: sessionError } = await supabase
      .from("admin_sessions")
      .select("*")
      .eq("id", session_id)
      .gt("expires_at", new Date().toISOString())
      .single()

    if (sessionError || !session) {
      return NextResponse.json({ error: "Invalid or expired session" }, { status: 401 })
    }

    // Verify the OAuth token with the provider
    // This is a simplified example - in a real implementation, you would verify with the OAuth provider
    const isValidToken = token.length > 10

    if (!isValidToken) {
      return NextResponse.json({ error: "Invalid verification token" }, { status: 401 })
    }

    // Create a new full session
    const sessionToken = generateSessionToken()

    // Update the session with a new token and extended expiry
    await supabase
      .from("admin_sessions")
      .update({
        session_token: sessionToken,
        expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
      })
      .eq("id", session.id)

    // Update last login time
    await supabase
      .from("admins")
      .update({
        last_login: new Date().toISOString(),
        two_factor_verified: true,
      })
      .eq("id", session.admin_id)

    // Set session cookie
    const response = NextResponse.json({ success: true })
    response.cookies.set("admin_session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60, // 24 hours
      path: "/",
      sameSite: "lax",
    })

    return response
  } catch (error) {
    console.error("2FA verification error:", error)
    return NextResponse.json({ error: "An unexpected error occurred during verification" }, { status: 500 })
  }
}
