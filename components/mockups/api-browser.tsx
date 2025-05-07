"use client"

import { BrowserMockup } from "@/components/ui/browser-mockup"
import { ApiTabs } from "@/components/ui/api-tabs"
import { ApiResponse } from "@/components/ui/api-response"
import { ErrorBoundary } from "@/components/error-handling/error-boundary"
import { useErrorLogger } from "@/hooks/use-error-logger"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ApiBrowserProps {
  url?: string
  title?: string
  secondaryTab?: string
  jsonData: string
  className?: string
}

export function ApiBrowser({
  url = "https://api.gitsink.dev/user/projects",
  title = "api.gitsink.dev",
  secondaryTab = "Documentation",
  jsonData,
  className = "",
}: ApiBrowserProps) {
  const { logError } = useErrorLogger()

  const fallbackContent = (
    <div className="bg-zinc-900 p-4 text-center min-h-[200px] flex flex-col items-center justify-center">
      <AlertTriangle className="h-8 w-8 text-destructive mb-2" />
      <p className="text-sm text-gray-400 mb-4">Failed to load API response</p>
      <Button
        variant="outline"
        size="sm"
        className="bg-zinc-800 text-gray-300 hover:bg-zinc-700"
        onClick={() => window.location.reload()}
      >
        Reload
      </Button>
    </div>
  )

  return (
    <BrowserMockup url={url} title={title} secondaryTab={secondaryTab} className={className}>
      <ApiTabs activeTab="Response" />
      <ErrorBoundary onError={logError} fallback={fallbackContent}>
        <ApiResponse jsonData={jsonData} />
      </ErrorBoundary>
    </BrowserMockup>
  )
}
