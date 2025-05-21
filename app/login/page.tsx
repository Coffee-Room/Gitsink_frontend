import type { Metadata } from "next"
import LoginContainer from "@/components/login/login-container"
import { GitHubLoginButton } from "@/components/login/github-login-button"
import { Logo } from "@/components/ui/logo"

export const metadata: Metadata = {
  title: "Login - Gitsink",
  description: "Connect your GitHub account to get started with Gitsink",
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background to-background/95 p-4">
      <LoginContainer>
        <div className="flex flex-col items-center space-y-6 text-center">
          <Logo className="h-12 w-12" />
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight">Welcome to Gitsink</h1>
            <p className="text-sm text-muted-foreground">
              Connect your GitHub account to start syncing your repositories
            </p>
          </div>
          <GitHubLoginButton />
          <div className="text-xs text-muted-foreground">
            By connecting, you agree to our{" "}
            <a href="/terms" className="underline underline-offset-2 hover:text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline underline-offset-2 hover:text-primary">
              Privacy Policy
            </a>
          </div>
        </div>
      </LoginContainer>
    </div>
  )
}
