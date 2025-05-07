export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: number
          created_at: string | null
          name: string | null
          email: string
          company: string | null
          github_username: string | null
          referral_source: string | null
          ip_address: string | null
        }
        Insert: {
          id?: number
          created_at?: string | null
          name?: string | null
          email: string
          company?: string | null
          github_username?: string | null
          referral_source?: string | null
          ip_address?: string | null
        }
        Update: {
          id?: number
          created_at?: string | null
          name?: string | null
          email?: string
          company?: string | null
          github_username?: string | null
          referral_source?: string | null
          ip_address?: string | null
        }
      }
      contact_messages: {
        Row: {
          id: number
          created_at: string | null
          updated_at: string | null
          name: string
          email: string
          subject: string
          message: string
          status: string | null
          inquiry_type: string | null
          ip_address: string | null
        }
        Insert: {
          id?: number
          created_at?: string | null
          updated_at?: string | null
          name: string
          email: string
          subject: string
          message: string
          status?: string | null
          inquiry_type?: string | null
          ip_address?: string | null
        }
        Update: {
          id?: number
          created_at?: string | null
          updated_at?: string | null
          name?: string
          email?: string
          subject?: string
          message?: string
          status?: string | null
          inquiry_type?: string | null
          ip_address?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_contact_messages_if_not_exists: {
        Args: Record<PropertyKey, never>
        Returns: void
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
