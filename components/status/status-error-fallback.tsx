import { AlertTriangle } from "lucide-react"

export function StatusErrorFallback() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-3 text-muted-foreground">
        <AlertTriangle className="h-5 w-5 text-amber-500" />
        <p>Unable to load status information. Please try again later.</p>
      </div>
    </div>
  )
}
