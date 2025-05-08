import { type NextRequest, NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase"
import { getClientIp } from "@/lib/get-client-ip"
import { hashPassword, generateSessionToken } from "@/lib/admin-auth"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()
    const userAgent = request.headers.get("user-agent") || ""
    const ipAddress = getClientIp()

    // Check if admin exists with the provided email
    const { data: admin, error: adminError } = await supabase
      .from("admins")
      .select("*")
      .eq("email", email)
      .eq("is_active", true)
      .single()

    if (adminError || !admin) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Verify password
    const hashedPassword = hashPassword(password)
    if (hashedPassword !== admin.password_hash) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // If 2FA is enabled, create a temporary session and require 2FA verification
    if (admin.two_factor_enabled) {
      // Create a temporary session token
      const sessionToken = generateSessionToken()

      // Store the temporary session
      const { data: session, error: sessionError } = await supabase
        .from("admin_sessions")
        .insert({
          admin_id: admin.id,
          session_token: sessionToken,
          expires_at: new Date(Date.now() + 10 * 60 * 1000).toISOString(), // 10 minutes
          ip_address: ipAddress,
          user_agent: userAgent,
        })
        .select()
        .single()

      if (sessionError) {
        return NextResponse.json({ error: "Failed to create session" }, { status: 500 })
      }

      return NextResponse.json({
        requiresTwoFactor: true,
        sessionId: session.id,
      })
    }

    // If 2FA is not enabled, create a full session
    const sessionToken = generateSessionToken()

    // Create session
    await supabase.from("admin_sessions").insert({
      admin_id: admin.id,
      session_token: sessionToken,
      expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
      ip_address: ipAddress,
      user_agent: userAgent,
    })

    // Update last login time
    await supabase.from("admins").update({ last_login: new Date().toISOString() }).eq("id", admin.id)

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
    console.error("Login error:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}
