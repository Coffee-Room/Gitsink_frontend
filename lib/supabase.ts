import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// Server-side Supabase client
export function createServerSupabaseClient() {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase environment variables")
  }

  return createClient<Database>(supabaseUrl, supabaseKey)
}

// Client-side Supabase client (singleton pattern)
let clientSupabaseInstance: ReturnType<typeof createClientSupabaseClient> | null = null

function createClientSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase environment variables")
  }

  return createClient<Database>(supabaseUrl, supabaseKey)
}

// Get the client-side Supabase instance (singleton pattern)
export function getClientSupabaseClient() {
  if (!clientSupabaseInstance) {
    clientSupabaseInstance = createClientSupabaseClient()
  }
  return clientSupabaseInstance
}
