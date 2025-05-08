import { createServerSupabaseClient } from "@/lib/supabase"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import type { AdminSession } from "@/types/admin"
import crypto from "crypto"

// Session duration in seconds (24 hours)
const SESSION_DURATION = 60 * 60 * 24

export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get("admin_session")?.value

  if (!sessionToken) return null

  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("admin_sessions")
    .select("*")
    .eq("session_token", sessionToken)
    .gt("expires_at", new Date().toISOString())
    .single()

  if (error || !data) return null

  return data as AdminSession
}

export async function getAdmin() {
  const session = await getAdminSession()

  if (!session) return null

  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("admins")
    .select("*")
    .eq("id", session.admin_id)
    .eq("is_active", true)
    .single()

  if (error || !data) return null

  return data
}

export async function requireAdmin() {
  const admin = await getAdmin()

  if (!admin) {
    redirect("/admin/login")
  }

  return admin
}

export function generateSessionToken() {
  return crypto.randomBytes(32).toString("hex")
}

export function hashPassword(password: string) {
  return crypto
    .createHash("sha256")
    .update(password + process.env.SUPABASE_JWT_SECRET)
    .digest("hex")
}

export function setAdminSessionCookie(sessionToken: string) {
  const cookieStore = cookies()

  // Set the session cookie
  cookieStore.set("admin_session", sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_DURATION,
    path: "/",
    sameSite: "lax",
  })
}

export function clearAdminSessionCookie() {
  const cookieStore = cookies()
  cookieStore.delete("admin_session")
}
