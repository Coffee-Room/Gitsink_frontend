"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function GitHubLoginButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    // In a real implementation, this would redirect to GitHub OAuth
    // For demo purposes, we'll simulate a redirect after a short delay
    setTimeout(() => {
      window.location.href = "/onboarding"
    }, 1000)
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="w-full" size="lg" onClick={handleLogin} disabled={isLoading}>
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></span>
                Connecting...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                Connect with GitHub
              </span>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Securely connect your GitHub account</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
