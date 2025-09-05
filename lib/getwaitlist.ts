export interface WaitlistSignupData {
  email: string
  first_name?: string
  last_name?: string
  phone?: string
  referral_link?: string
  metadata?: Record<string, any>
  answers?: Array<{
    question_value: string
    optional: boolean
    answer_value: string | null
  }>
}

export interface WaitlistResponse {
  id: number
  email: string
  first_name?: string
  last_name?: string
  priority: number
  referral_link: string
  total_referrals: number
  created_at: string
  updated_at: string
}

export interface WaitlistError {
  error: string
  message: string
}

const GETWAITLIST_API_BASE = "https://api.getwaitlist.com/api/v1"

export async function submitToWaitlist(data: WaitlistSignupData): Promise<WaitlistResponse> {
  const waitlistId = process.env.NEXT_PUBLIC_GETWAITLIST_ID

  if (!waitlistId) {
    throw new Error("Waitlist ID not configured")
  }

  const payload = {
    ...data,
    waitlist_id: Number.parseInt(waitlistId),
    referral_link: data.referral_link || window.location.href,
  }

  const response = await fetch(`${GETWAITLIST_API_BASE}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.message || "Failed to join waitlist")
  }

  return result
}

export async function getWaitlistInfo(): Promise<any> {
  const waitlistId = process.env.NEXT_PUBLIC_GETWAITLIST_ID

  if (!waitlistId) {
    throw new Error("Waitlist ID not configured")
  }

  const response = await fetch(`${GETWAITLIST_API_BASE}/waitlist?waitlist_id=${waitlistId}`)

  if (!response.ok) {
    throw new Error("Failed to fetch waitlist info")
  }

  return response.json()
}
