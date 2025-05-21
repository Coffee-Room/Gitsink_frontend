"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ApiQuickstart() {
  const [copied, setCopied] = useState(false)

  const curlCommand = `curl https://api.gitsink.dev/v1/projects \\
  -H "Authorization: Bearer YOUR_API_KEY"`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(curlCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="quickstart" className="scroll-mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Quickstart</h2>
        <a href="#quickstart" className="text-sm text-muted-foreground hover:text-primary">
          #
        </a>
      </div>
      <p className="mt-4 text-lg text-muted-foreground">
        Get started quickly with the Gitsink API using these examples.
      </p>

      <Card className="mt-6 overflow-hidden">
        <CardHeader className="bg-muted/50 pb-4">
          <CardTitle className="text-lg">Fetch Projects</CardTitle>
          <CardDescription>Retrieve all your synced GitHub projects</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative">
            <pre className="overflow-x-auto rounded-b-lg bg-black p-4 text-sm text-white">
              <code>{curlCommand}</code>
            </pre>
            <div className="absolute right-2 top-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 rounded-full bg-muted/30 p-0 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      onClick={copyToClipboard}
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      <span className="sr-only">Copy code</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy to clipboard</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="border-t bg-muted/20 p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Replace <code className="rounded bg-muted px-1 py-0.5">YOUR_API_KEY</code> with
              your actual API key from the dashboard.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
