import type { SystemStatus, Service, Incident, MaintenanceEvent, UptimeData } from "@/types/status"

// Mock data for the system status
export async function getSystemStatus(): Promise<SystemStatus> {
  // In a real application, this would fetch data from an API
  return {
    status: "operational",
    lastUpdated: new Date().toISOString(),
    services: getMockServices(),
    incidents: getMockIncidents(),
    uptimeData: getMockUptimeData(),
    maintenanceSchedules: getMockMaintenanceEvents(),
  }
}

function getMockServices(): Service[] {
  return [
    {
      id: "api",
      name: "API",
      description: "Core API services",
      status: "operational",
    },
    {
      id: "dashboard",
      name: "Dashboard",
      description: "User dashboard and analytics",
      status: "operational",
    },
    {
      id: "webhooks",
      name: "Webhooks",
      description: "Event notifications",
      status: "operational",
    },
    {
      id: "storage",
      name: "Storage",
      description: "File storage and CDN",
      status: "operational",
    },
    {
      id: "auth",
      name: "Authentication",
      description: "User authentication services",
      status: "operational",
    },
    {
      id: "billing",
      name: "Billing",
      description: "Payment processing",
      status: "operational",
    },
  ]
}

function getMockIncidents(): Incident[] {
  return [
    {
      id: "inc-1",
      title: "API Performance Degradation",
      status: "resolved",
      severity: "minor",
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      resolvedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      affectedServices: ["API", "Webhooks"],
      updates: [
        {
          timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          status: "investigating",
          message: "We are investigating reports of API slowdowns.",
        },
        {
          timestamp: new Date(Date.now() - 6.5 * 24 * 60 * 60 * 1000).toISOString(),
          status: "identified",
          message: "We have identified the issue with our database cluster and are working on a fix.",
        },
        {
          timestamp: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
          status: "resolved",
          message: "The issue has been resolved and API performance has returned to normal.",
        },
      ],
    },
    {
      id: "inc-2",
      title: "Dashboard Access Issues",
      status: "resolved",
      severity: "major",
      createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000).toISOString(),
      resolvedAt: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000).toISOString(),
      affectedServices: ["Dashboard", "Authentication"],
      updates: [
        {
          timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
          status: "investigating",
          message: "We are investigating reports of users unable to access the dashboard.",
        },
        {
          timestamp: new Date(Date.now() - 13.5 * 24 * 60 * 60 * 1000).toISOString(),
          status: "identified",
          message: "We have identified an issue with our authentication service and are implementing a fix.",
        },
        {
          timestamp: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000).toISOString(),
          status: "resolved",
          message: "The authentication service has been restored and dashboard access is now working normally.",
        },
      ],
    },
  ]
}

function getMockUptimeData(): UptimeData[] {
  const data: UptimeData[] = []
  const now = new Date()

  // Generate 90 days of uptime data
  for (let i = 90; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(now.getDate() - i)

    // Generate a random uptime percentage between 99 and 100 for most days
    // with a few days having lower values to simulate incidents
    let uptime = 99.9 + Math.random() * 0.1

    // Simulate a few days with incidents
    if (i === 7 || i === 14 || i === 30) {
      uptime = 95 + Math.random() * 4
    }

    data.push({
      date: date.toISOString().split("T")[0],
      uptime: Number.parseFloat(uptime.toFixed(2)),
    })
  }

  return data
}

function getMockMaintenanceEvents(): MaintenanceEvent[] {
  const now = new Date()

  return [
    {
      id: "maint-1",
      title: "Database Optimization",
      description: "Scheduled maintenance to optimize database performance. Brief API interruptions may occur.",
      status: "completed",
      startTime: new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      endTime: new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(),
      affectedServices: ["API", "Dashboard"],
    },
    {
      id: "maint-2",
      title: "Infrastructure Upgrades",
      description: "Upgrading our infrastructure to improve reliability and performance.",
      status: "scheduled",
      startTime: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      endTime: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000).toISOString(),
      affectedServices: ["API", "Storage", "Webhooks"],
    },
    {
      id: "maint-3",
      title: "Security Updates",
      description: "Applying critical security updates to all services.",
      status: "in_progress",
      startTime: new Date(now.getTime() - 1 * 60 * 60 * 1000).toISOString(),
      endTime: new Date(now.getTime() + 1 * 60 * 60 * 1000).toISOString(),
      affectedServices: ["Authentication", "Dashboard"],
    },
  ]
}
