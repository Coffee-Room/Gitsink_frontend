import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard/dashboard-shell"
import ApiUsageChart from "@/components/dashboard/api-usage-chart"
import ApiUsageDetails from "@/components/dashboard/api-usage-details"
import { DashboardTabs } from "@/components/dashboard/dashboard-tabs"

export const metadata: Metadata = {
  title: "API Usage | Gitsink",
  description: "Monitor your API usage and performance metrics",
}

export default function ApiUsagePage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold">API Usage</h1>
        <p className="text-muted-foreground">Monitor your API usage, performance metrics, and request patterns.</p>

        <DashboardTabs defaultValue="api-usage" />

        <div className="grid gap-6 md:grid-cols-3">
          <ApiUsageChart />
        </div>

        <ApiUsageDetails />
      </div>
    </DashboardShell>
  )
}
