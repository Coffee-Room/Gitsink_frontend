import type { Metadata } from "next"
import { GitHubConnectedCard } from "@/components/onboarding/github-connected-card"
import { ApiKeyGenerator } from "@/components/onboarding/api-key-generator"
import { Logo } from "@/components/ui/logo"

export const metadata: Metadata = {
  title: "Onboarding - Gitsink",
  description: "Set up your Gitsink account",
}

export default function OnboardingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background to-background/95 p-4">
      <div className="w-full max-w-2xl space-y-8">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Logo className="h-12 w-12" />
          <h1 className="text-3xl font-bold tracking-tight">Welcome to Gitsink</h1>
        </div>

        <GitHubConnectedCard />

        <ApiKeyGenerator />

        <div className="text-center text-sm text-muted-foreground">
          Need help?{" "}
          <a href="/docs" className="text-primary hover:underline">
            Read the documentation
          </a>{" "}
          or{" "}
          <a href="/support" className="text-primary hover:underline">
            contact support
          </a>
          .
        </div>
      </div>
    </div>
  )
}
