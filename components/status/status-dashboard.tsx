"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, CheckCircle2, Clock } from "lucide-react"
import { ErrorBoundary } from "react-error-boundary"
import type { MaintenanceDetails } from "@/lib/maintenance"
import type { SystemStatus } from "@/types/status"
import StatusIndicator from "@/components/status/status-indicator"
import UptimeGraph from "@/components/status/uptime-graph"
import IncidentHistory from "@/components/status/incident-history"
import MaintenanceSchedule from "@/components/status/maintenance-schedule"

// Simple fallback component for errors
function ErrorFallback({ error }: { error: Error }) {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Failed to load this component: {error.message}</AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}

interface StatusDashboardProps {
  maintenance: MaintenanceDetails
  status: SystemStatus
}

export default function StatusDashboard({ maintenance, status }: StatusDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  const allOperational = status.services.every((service) => service.status === "operational")

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl">System Status</CardTitle>
              <CardDescription>Current status of Gitsink services</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              {allOperational ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="font-medium text-green-500">All Systems Operational</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <span className="font-medium text-amber-500">Service Disruption</span>
                </>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {maintenance.isActive && (
              <Alert className="bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900">
                <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <AlertTitle className="text-amber-800 dark:text-amber-300">Scheduled Maintenance</AlertTitle>
                <AlertDescription className="text-amber-700 dark:text-amber-400">
                  {maintenance.reason || "Scheduled maintenance is currently in progress."}
                  {maintenance.endTime && <> Expected to end by {new Date(maintenance.endTime).toLocaleString()}.</>}
                </AlertDescription>
              </Alert>
            )}

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {status.services.map((service) => (
                <ErrorBoundary key={service.id} FallbackComponent={ErrorFallback}>
                  <StatusIndicator service={service} />
                </ErrorBoundary>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="incidents">Incidents</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-6">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <UptimeGraph data={status.uptimeData} />
          </ErrorBoundary>
        </TabsContent>
        <TabsContent value="incidents" className="mt-6">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <IncidentHistory incidents={status.incidents} />
          </ErrorBoundary>
        </TabsContent>
        <TabsContent value="maintenance" className="mt-6">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <MaintenanceSchedule schedules={status.maintenanceSchedules} />
          </ErrorBoundary>
        </TabsContent>
      </Tabs>
    </div>
  )
}
