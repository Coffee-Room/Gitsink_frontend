"use client"

import { Suspense, lazy } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"
import StatusIndicator from "@/components/status/status-indicator"
import {
  UptimeGraphSkeleton,
  IncidentHistorySkeleton,
  MaintenanceScheduleSkeleton,
} from "@/components/status/status-skeleton"
import type { SystemStatus } from "@/types/status"

// Lazy load tab content components
const UptimeGraph = lazy(() => import("@/components/status/uptime-graph"))
const IncidentHistory = lazy(() => import("@/components/status/incident-history"))
const MaintenanceSchedule = lazy(() => import("@/components/status/maintenance-schedule"))

interface StatusDashboardProps {
  maintenance: {
    isActive: boolean
    endTime: string | null
    reason: string | null
  }
  status: SystemStatus
}

export default function StatusDashboard({ maintenance, status }: StatusDashboardProps) {
  const getStatusLabel = (status: string) => {
    switch (status) {
      case "operational":
        return "Operational"
      case "degraded":
        return "Degraded Performance"
      case "partial_outage":
        return "Partial Outage"
      case "major_outage":
        return "Major Outage"
      case "maintenance":
        return "Under Maintenance"
      default:
        return "Unknown"
    }
  }

  const getOverallStatus = () => {
    if (maintenance.isActive) {
      return "maintenance"
    }

    if (status.services.some((service) => service.status === "major_outage")) {
      return "major_outage"
    }

    if (status.services.some((service) => service.status === "partial_outage")) {
      return "partial_outage"
    }

    if (status.services.some((service) => service.status === "degraded")) {
      return "degraded"
    }

    return "operational"
  }

  const overallStatus = getOverallStatus()

  return (
    <>
      {/* Current Status Overview */}
      <Card className="mb-8">
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl">System Status</CardTitle>
              <CardDescription>Current operational status of Gitsink services</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <StatusIndicator status={overallStatus} size="lg" />
              <span className="font-medium">{getStatusLabel(overallStatus)}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {maintenance.isActive && (
            <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-amber-800 dark:text-amber-300">Scheduled Maintenance in Progress</h3>
                  <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">{maintenance.reason}</p>
                  {maintenance.endTime && (
                    <p className="mt-2 text-sm font-medium text-amber-700 dark:text-amber-400">
                      Expected completion: {maintenance.endTime}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {status.services.map((service) => (
              <div key={service.id} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <h3 className="font-medium">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <StatusIndicator status={service.status} />
                  <span className="text-sm">{getStatusLabel(service.status)}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tabs for different views */}
      <Tabs defaultValue="uptime">
        <TabsList className="mb-6">
          <TabsTrigger value="uptime">Uptime</TabsTrigger>
          <TabsTrigger value="incidents">Incident History</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>

        <TabsContent value="uptime">
          <Suspense fallback={<UptimeGraphSkeleton />}>
            <UptimeGraph data={status.uptimeData} />
          </Suspense>
        </TabsContent>

        <TabsContent value="incidents">
          <Suspense fallback={<IncidentHistorySkeleton />}>
            <IncidentHistory incidents={status.incidents} />
          </Suspense>
        </TabsContent>

        <TabsContent value="maintenance">
          <Suspense fallback={<MaintenanceScheduleSkeleton />}>
            <MaintenanceSchedule events={status.maintenanceEvents} />
          </Suspense>
        </TabsContent>
      </Tabs>
    </>
  )
}
