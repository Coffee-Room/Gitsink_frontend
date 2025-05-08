import { type NextRequest, NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get("admin_session")?.value

    if (sessionToken) {
      const supabase = createServerSupabaseClient()

      // Delete the session from the database
      await supabase.from("admin_sessions").delete().eq("session_token", sessionToken)
    }

    // Clear the session cookie
    const response = NextResponse.json({ success: true })
    response.cookies.delete("admin_session")

    return response
  } catch (error) {
    console.error("Logout error:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}
