import { Suspense, lazy } from "react"
import type { Metadata } from "next"
import { getMaintenanceDetails } from "@/lib/maintenance"
import { getSystemStatus } from "@/lib/status"
import { StatusOverviewSkeleton } from "@/components/status/status-skeleton"

// Import the header component eagerly
import StatusHeader from "@/components/status/status-header"

// Lazy load the other components
const StatusDashboard = lazy(() => import("@/components/status/status-dashboard"))

export const metadata: Metadata = {
  title: "System Status - Gitsink",
  description: "Current operational status and uptime information for Gitsink services",
}

export default async function StatusPage() {
  // Get current system status and maintenance info
  const maintenance = getMaintenanceDetails()
  const status = await getSystemStatus()

  return (
    <div className="min-h-screen bg-muted/30">
      <StatusHeader lastUpdated={status.lastUpdated} />

      <main className="container py-8 px-4 md:px-6">
        <Suspense fallback={<StatusOverviewSkeleton />}>
          <StatusDashboard maintenance={maintenance} status={status} />
        </Suspense>
      </main>
    </div>
  )
}
