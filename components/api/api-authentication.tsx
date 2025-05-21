"use client"

import { useState } from "react"
import { Check, Copy, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ApiAuthentication() {
  const [copied, setCopied] = useState(false)

  const authHeader = `Authorization: Bearer YOUR_API_KEY`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(authHeader)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="authentication" className="scroll-mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Authentication</h2>
        <a href="#authentication" className="text-sm text-muted-foreground hover:text-primary">
          #
        </a>
      </div>
      <p className="mt-4 text-lg text-muted-foreground">Secure your API requests using API keys for authentication.</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">API Key Format</h3>
          <p className="mt-2 text-muted-foreground">
            Gitsink API keys follow a specific format for security and traceability:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Shield className="mt-0.5 h-5 w-5 text-primary" />
              <span>
                <strong>Format:</strong> <code className="rounded bg-muted px-1 py-0.5">gsk_live_xxxxxxxxxx</code> for
                production or <code className="rounded bg-muted px-1 py-0.5">gsk_test_xxxxxxxxxx</code> for testing
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Shield className="mt-0.5 h-5 w-5 text-primary" />
              <span>
                <strong>Security:</strong> Store your API keys securely and never expose them in client-side code
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Shield className="mt-0.5 h-5 w-5 text-primary" />
              <span>
                <strong>Rotation:</strong> You can rotate your API keys at any time from the dashboard
              </span>
            </li>
          </ul>
        </div>

        <Card>
          <CardHeader className="bg-muted/50 pb-4">
            <CardTitle className="text-lg">Authentication Header</CardTitle>
            <CardDescription>Include this header in all API requests</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative">
              <pre className="overflow-x-auto rounded-b-lg bg-black p-4 text-sm text-white">
                <code>{authHeader}</code>
              </pre>
              <Button
                size="sm"
                variant="ghost"
                className="absolute right-2 top-2 h-8 w-8 rounded-full bg-muted/30 p-0 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                onClick={copyToClipboard}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span className="sr-only">Copy code</span>
              </Button>
            </div>
            <div className="border-t bg-muted/20 p-4">
              <p className="text-sm text-muted-foreground">
                All API requests must include your API key in the Authorization header as a Bearer token.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
