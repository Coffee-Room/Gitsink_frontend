import type { Metadata } from "next"
import { getMaintenanceDetails } from "@/lib/maintenance"
import { getSystemStatus } from "@/lib/status"
import StatusHeader from "@/components/status/status-header"
import StatusDashboard from "@/components/status/status-dashboard"

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
        <StatusDashboard maintenance={maintenance} status={status} />
      </main>
    </div>
  )
}
