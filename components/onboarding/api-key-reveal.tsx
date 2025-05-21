"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Copy, Eye, EyeOff, CheckCircle2, AlertTriangle } from "lucide-react"

interface ApiKeyRevealProps {
  apiKey: string
}

export function ApiKeyReveal({ apiKey }: ApiKeyRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const copyToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select()
      document.execCommand("copy")
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  const maskedKey = apiKey.replace(/./g, "•")

  return (
    <div className="space-y-4">
      <Alert variant="destructive" className="bg-destructive/10 text-destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription className="text-xs">
          This API key will only be shown once. Please copy it and store it securely.
        </AlertDescription>
      </Alert>

      <div className="relative">
        <div className="flex items-center rounded-md border border-border bg-muted/40 p-2">
          <input
            ref={inputRef}
            type="text"
            value={isVisible ? apiKey : maskedKey}
            readOnly
            className="flex-1 bg-transparent px-2 text-sm font-mono focus:outline-none"
          />
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
              {isCopied ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              <span className="sr-only">Copy API key</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button variant="default" className="gap-2" onClick={() => (window.location.href = "/dashboard")}>
          Continue to Dashboard
        </Button>
      </div>
    </div>
  )
}
