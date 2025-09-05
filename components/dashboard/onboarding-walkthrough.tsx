"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ChevronRight, Github, Key, PlayCircle } from "lucide-react"

interface OnboardingWalkthroughProps {
  currentStep: number
  onStepComplete?: (step: number) => void
}

export default function OnboardingWalkthrough({ currentStep, onStepComplete }: OnboardingWalkthroughProps) {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed || currentStep > 3) {
    return null
  }

  const steps = [
    {
      title: "Connect GitHub",
      description: "Link your GitHub account to start syncing repositories",
      icon: Github,
      completed: currentStep >= 1,
      href: "/dashboard/settings#github-integration",
      actionText: "Connect GitHub",
    },
    {
      title: "Generate API Key",
      description: "Create your first API key to access the Gitsink API",
      icon: Key,
      completed: currentStep >= 2,
      href: "/dashboard/api-keys",
      actionText: "Generate Key",
    },
    {
      title: "Try Sandbox",
      description: "Test your API integration in our interactive sandbox",
      icon: PlayCircle,
      completed: currentStep >= 3,
      href: "/dashboard/sandbox",
      actionText: "Open Sandbox",
    },
  ]

  const currentStepData = steps[currentStep < 3 ? currentStep : 0]

  const handleStepAction = () => {
    if (onStepComplete && currentStep < 3) {
      onStepComplete(currentStep + 1)
    }
  }

  return (
    <Card className="bg-muted/40 border-dashed">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Getting Started</CardTitle>
          <Button variant="ghost" size="sm" onClick={() => setDismissed(true)}>
            Dismiss
          </Button>
        </div>
        <CardDescription>Complete these steps to get the most out of Gitsink</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 sm:flex-row">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex-1 rounded-lg border p-4 ${
                step.completed
                  ? "bg-primary/5 border-primary/20"
                  : index === currentStep
                    ? "bg-card border-border"
                    : "bg-muted/50 border-border/50"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`rounded-full p-1.5 ${
                    step.completed ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.completed ? <CheckCircle2 className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
                </div>
                <div className="space-y-1">
                  <p className="font-medium leading-none">{step.title}</p>
                  <p className="text-xs text-muted-foreground">{step.description}</p>

                  {index === currentStep && !step.completed && (
                    <Link href={step.href} className="inline-block mt-2">
                      <Button size="sm" variant="outline" className="text-xs h-7 px-2" onClick={handleStepAction}>
                        {step.actionText}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {currentStep < 3 ? (
          <Link href={currentStepData.href} className="ml-auto">
            <Button size="sm" className="gap-1" onClick={handleStepAction}>
              Continue Setup
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Button size="sm" className="ml-auto gap-1" disabled>
            All Steps Completed
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
