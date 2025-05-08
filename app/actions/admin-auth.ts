"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import { getClientIp } from "@/lib/get-client-ip"
import type { LoginCredentials, TwoFactorVerification } from "@/types/admin"
import { generateSessionToken, hashPassword, setAdminSessionCookie, clearAdminSessionCookie } from "@/lib/admin-auth"
import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"

export async function loginAdmin(credentials: LoginCredentials) {
  try {
    const supabase = createServerSupabaseClient()
    const headersList = headers()
    const userAgent = headersList.get("user-agent") || ""
    const ipAddress = getClientIp()

    // Check if admin exists with the provided email
    const { data: admin, error: adminError } = await supabase
      .from("admins")
      .select("*")
      .eq("email", credentials.email)
      .eq("is_active", true)
      .single()

    if (adminError || !admin) {
      return { error: "Invalid email or password" }
    }

    // Verify password
    const hashedPassword = hashPassword(credentials.password)
    if (hashedPassword !== admin.password_hash) {
      return { error: "Invalid email or password" }
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
        return { error: "Failed to create session" }
      }

      return {
        requiresTwoFactor: true,
        sessionId: session.id,
      }
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
    setAdminSessionCookie(sessionToken)

    return { success: true }
  } catch (error) {
    console.error("Login error:", error)
    return { error: "An unexpected error occurred" }
  }
}

export async function verifyOAuthTwoFactor(verification: TwoFactorVerification) {
  try {
    const supabase = createServerSupabaseClient()

    // Get the temporary session
    const { data: session, error: sessionError } = await supabase
      .from("admin_sessions")
      .select("*")
      .eq("id", verification.session_id)
      .gt("expires_at", new Date().toISOString())
      .single()

    if (sessionError || !session) {
      return { error: "Invalid or expired session" }
    }

    // Verify the OAuth token with the provider
    // This is a simplified example - in a real implementation, you would verify with the OAuth provider
    const isValidToken = verification.token.length > 10

    if (!isValidToken) {
      return { error: "Invalid verification token" }
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
    setAdminSessionCookie(sessionToken)

    return { success: true }
  } catch (error) {
    console.error("2FA verification error:", error)
    return { error: "An unexpected error occurred during verification" }
  }
}

export async function logoutAdmin() {
  try {
    const cookieStore = cookies()
    const sessionToken = cookieStore.get("admin_session")?.value

    if (sessionToken) {
      const supabase = createServerSupabaseClient()

      // Delete the session from the database
      await supabase.from("admin_sessions").delete().eq("session_token", sessionToken)
    }

    // Clear the session cookie
    clearAdminSessionCookie()

    redirect("/admin/login")
  } catch (error) {
    console.error("Logout error:", error)
  }
}
