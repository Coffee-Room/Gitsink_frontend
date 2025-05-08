"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { loginAdmin, verifyOAuthTwoFactor } from "@/app/actions/admin-auth"
import type { LoginCredentials, TwoFactorVerification } from "@/types/admin"
import { Github } from "lucide-react"

export function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [requiresTwoFactor, setRequiresTwoFactor] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const credentials: LoginCredentials = { email, password }
      const result = await loginAdmin(credentials)

      if (result.error) {
        setError(result.error)
      } else if (result.requiresTwoFactor && result.sessionId) {
        setRequiresTwoFactor(true)
        setSessionId(result.sessionId)
      } else if (result.success) {
        router.push("/admin/dashboard")
        router.refresh()
      }
    } catch (err) {
      setError("An unexpected error occurred")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleOAuthLogin() {
    // In a real implementation, this would redirect to the OAuth provider
    // For this example, we'll simulate receiving a token after OAuth authentication
    setIsLoading(true)

    try {
      // Simulate OAuth flow
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate receiving a token
      const mockToken = "oauth-token-" + Math.random().toString(36).substring(2, 15)

      if (!sessionId) {
        setError("Session ID is missing")
        return
      }

      const verification: TwoFactorVerification = {
        token: mockToken,
        session_id: sessionId,
      }

      const result = await verifyOAuthTwoFactor(verification)

      if (result.error) {
        setError(result.error)
      } else if (result.success) {
        router.push("/admin/dashboard")
        router.refresh()
      }
    } catch (err) {
      setError("An unexpected error occurred during OAuth authentication")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Admin Login</CardTitle>
        <CardDescription>
          {requiresTwoFactor
            ? "Complete two-factor authentication to continue"
            : "Enter your credentials to access the admin dashboard"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {!requiresTwoFactor ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Please complete two-factor authentication by signing in with your OAuth provider.
            </p>
            <Button
              onClick={handleOAuthLogin}
              className="w-full flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              <Github className="h-4 w-4" />
              {isLoading ? "Authenticating..." : "Continue with GitHub"}
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-xs text-muted-foreground">Protected area. Unauthorized access is prohibited.</p>
      </CardFooter>
    </Card>
  )
}
