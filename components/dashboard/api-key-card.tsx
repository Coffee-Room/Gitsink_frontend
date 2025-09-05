"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Eye, EyeOff, RefreshCw, AlertTriangle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface ApiKeyCardProps {
  apiKey: string
  lastUsed: string
  className?: string
}

export default function ApiKeyCard({ apiKey, lastUsed, className }: ApiKeyCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [showRegenerateDialog, setShowRegenerateDialog] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const copyToClipboard = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(apiKey)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  // Only show first 8 and last 4 characters of the API key
  const maskedKey =
    apiKey && apiKey.length > 12
      ? apiKey.substring(0, 8) + "..." + apiKey.substring(apiKey.length - 4)
      : "sk_live_****...****"

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle>API Key</CardTitle>
        <CardDescription>Your secret key for API authentication</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center rounded-md border bg-muted/40 p-2">
            <code className="flex-1 font-mono text-sm px-2 overflow-x-auto">{isVisible ? apiKey : maskedKey}</code>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                onClick={toggleVisibility}
              >
                {isVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span className="sr-only">{isVisible ? "Hide" : "Show"} API key</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                onClick={copyToClipboard}
              >
                <Copy className={`h-4 w-4 ${isCopied ? "text-green-500" : ""}`} />
                <span className="sr-only">Copy API key</span>
              </Button>
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            <p>Last used: {formatDate(lastUsed)}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog open={showRegenerateDialog} onOpenChange={setShowRegenerateDialog}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1 ml-auto bg-transparent">
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Regenerate Key</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Regenerate API Key</DialogTitle>
              <DialogDescription>
                Are you sure you want to regenerate your API key? This action cannot be undone and will invalidate your
                current key.
              </DialogDescription>
            </DialogHeader>
            <Alert variant="destructive" className="bg-destructive/10 text-destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>All applications using the current key will stop working immediately.</AlertDescription>
            </Alert>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowRegenerateDialog(false)}>
                Cancel
              </Button>
              <Button variant="destructive">Regenerate Key</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
