export interface Admin {
  id: string
  email: string
  full_name: string
  role: string
  is_active: boolean
  created_at: string
  updated_at: string
  last_login: string | null
  oauth_provider: string | null
  oauth_id: string | null
  two_factor_enabled: boolean
  two_factor_verified: boolean
  recovery_codes: string[] | null
}

export interface AdminSession {
  id: string
  admin_id: string
  session_token: string
  expires_at: string
  created_at: string
  ip_address: string | null
  user_agent: string | null
}

export type LoginCredentials = {
  email: string
  password: string
}

export type TwoFactorVerification = {
  token: string
  session_id: string
}

export type AdminLoginState = {
  error?: string
  success?: boolean
  requiresTwoFactor?: boolean
  sessionId?: string
}
