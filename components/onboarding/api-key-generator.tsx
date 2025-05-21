"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ApiKeyReveal } from "./api-key-reveal"
import { KeyRound, HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ApiKeyGenerator() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [apiKey, setApiKey] = useState<string | null>(null)

  const handleGenerateKey = () => {
    setIsGenerating(true)
    // Simulate API key generation
    setTimeout(() => {
      // Generate a random API key for demo purposes
      const key = `gsk_${Array.from({ length: 32 }, () => Math.floor(Math.random() * 36).toString(36)).join("")}`

      setApiKey(key)
      setIsGenerating(false)
    }, 1000)
  }

  return (
    <Card className="border-border/40 bg-card/95 shadow-md backdrop-blur">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">API Key</CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <HelpCircle className="h-4 w-4" />
                  <span className="sr-only">API Key Information</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>
                  Your API key is used to authenticate requests to the Gitsink API. Keep it secure and never share it
                  publicly.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription>Generate an API key to access the Gitsink API</CardDescription>
      </CardHeader>
      <CardContent>
        {apiKey ? (
          <ApiKeyReveal apiKey={apiKey} />
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/40 p-8 text-center">
            <KeyRound className="mb-2 h-8 w-8 text-muted-foreground" />
            <h3 className="mb-1 text-sm font-medium">No API Key Generated</h3>
            <p className="mb-4 text-xs text-muted-foreground">
              Generate an API key to start using Gitsink with your applications
            </p>
            <Button onClick={handleGenerateKey} disabled={isGenerating} className="min-w-32">
              {isGenerating ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></span>
                  Generating...
                </span>
              ) : (
                "Generate API Key"
              )}
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 border-t border-border/40 pt-4 text-xs text-muted-foreground">
        <p>Your API key grants full access to your Gitsink account. Protect it like a password.</p>
        <p>You can regenerate or revoke this key at any time from your account settings.</p>
      </CardFooter>
    </Card>
  )
}
