"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import OnboardingWalkthrough from "@/components/dashboard/onboarding-walkthrough"
import WelcomeHeader from "@/components/dashboard/welcome-header"
import RepoSyncPanel from "@/components/dashboard/repo-sync-panel"
import ApiKeyCard from "@/components/dashboard/api-key-card"
import SandboxCard from "@/components/dashboard/sandbox-card"
import { DashboardTabs } from "@/components/dashboard/dashboard-tabs"
import ApiUsageChart from "@/components/dashboard/api-usage-chart"

interface User {
  name: string
  username: string
  avatarUrl: string
  lastLogin: string
}

export default function DashboardPage() {
  // In a real app, this would be fetched from an API or local storage
  const [onboardingStep, setOnboardingStep] = useState(0)
  const [user, setUser] = useState<User>({
    name: "Sarah Chen",
    username: "sarahchen",
    avatarUrl: "/stylized-initials-sc.png",
    lastLogin: new Date().toISOString(),
  })

  // Mock function to handle step completion
  const handleStepComplete = (step: number) => {
    setOnboardingStep(step)
    // In a real app, you would save this progress to the backend
    if (typeof window !== "undefined") {
      localStorage.setItem("onboardingStep", step.toString())
    }
  }

  // Load onboarding step from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedStep = localStorage.getItem("onboardingStep")
      if (savedStep) {
        setOnboardingStep(Number.parseInt(savedStep, 10))
      }
    }
  }, [])

  return (
    <div className="flex flex-col gap-6 p-6 md:gap-8">
      <WelcomeHeader
        name={user.name || "User"}
        username={user.username || "user"}
        avatarUrl={user.avatarUrl || "/placeholder.svg"}
      />

      <OnboardingWalkthrough currentStep={onboardingStep} onStepComplete={handleStepComplete} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ApiKeyCard apiKey="sk_live_Xj5iPDwLcWwXEZdU7Tk9" lastUsed={new Date(Date.now() - 3600000).toISOString()} />
        <SandboxCard />
        <div className="md:col-span-2 lg:col-span-1">{/* Additional card could go here */}</div>
      </div>

      <ApiUsageChart />

      <Tabs defaultValue="all-repos">
        <DashboardTabs defaultValue="all-repos" />
        <TabsContent value="all-repos" className="mt-0">
          <RepoSyncPanel />
        </TabsContent>
        <TabsContent value="synced" className="mt-0">
          <RepoSyncPanel />
        </TabsContent>
        <TabsContent value="not-synced" className="mt-0">
          <RepoSyncPanel />
        </TabsContent>
      </Tabs>
    </div>
  )
}
