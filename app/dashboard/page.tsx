"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import OnboardingWalkthrough from "@/components/dashboard/onboarding-walkthrough"
import WelcomeHeader from "@/components/dashboard/welcome-header"
import RepoSyncPanel from "@/components/dashboard/repo-sync-panel"
import ApiKeyCard from "@/components/dashboard/api-key-card"
import SandboxCard from "@/components/dashboard/sandbox-card"
import DashboardTabs from "@/components/dashboard/dashboard-tabs"
import ApiUsageChart from "@/components/dashboard/api-usage-chart"

export default function DashboardPage() {
  // In a real app, this would be fetched from an API or local storage
  const [onboardingStep, setOnboardingStep] = useState(0)
  const [user, setUser] = useState({
    name: "Sarah Chen",
    username: "sarahchen",
    avatarUrl: "/stylized-initials-sc.png",
    lastLogin: new Date().toISOString(),
  })

  // Mock function to handle step completion
  const handleStepComplete = (step: number) => {
    setOnboardingStep(step)
    // In a real app, you would save this progress to the backend
    localStorage.setItem("onboardingStep", step.toString())
  }

  // Load onboarding step from localStorage on component mount
  useEffect(() => {
    const savedStep = localStorage.getItem("onboardingStep")
    if (savedStep) {
      setOnboardingStep(Number.parseInt(savedStep, 10))
    }
  }, [])

  return (
    <div className="flex flex-col gap-6 p-6 md:gap-8">
      <WelcomeHeader user={user} />

      <OnboardingWalkthrough currentStep={onboardingStep} onStepComplete={handleStepComplete} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ApiKeyCard
          apiKey="sk_live_Xj5iPDwLcWwXEZdU7Tk9"
          lastUsed={new Date(Date.now() - 3600000).toISOString()}
          onRegenerate={() => console.log("Regenerate API key")}
          className="md:col-span-1"
        />
        <SandboxCard className="md:col-span-1" />
        <div className="md:col-span-2 lg:col-span-1">{/* Additional card could go here */}</div>
      </div>

      <ApiUsageChart className="w-full" />

      <Tabs defaultValue="all-repos">
        <DashboardTabs />
        <TabsContent value="all-repos" className="mt-0">
          <RepoSyncPanel />
        </TabsContent>
        <TabsContent value="synced" className="mt-0">
          <RepoSyncPanel filterSynced={true} />
        </TabsContent>
        <TabsContent value="not-synced" className="mt-0">
          <RepoSyncPanel filterSynced={false} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
