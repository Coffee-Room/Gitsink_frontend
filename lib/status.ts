import type { SystemStatus } from "@/types/status"
import { getMaintenanceDetails } from "@/lib/maintenance"

// In a real application, this would fetch data from a database or API
export async function getSystemStatus(): Promise<SystemStatus> {
  const maintenance = getMaintenanceDetails()

  // Mock data for demonstration
  return {
    status: maintenance.isActive ? "maintenance" : "operational",
    lastUpdated: new Date().toISOString(),
    services: [
      {
        id: "api",
        name: "API",
        description: "Core API services",
        status: maintenance.isActive ? "maintenance" : "operational",
      },
      {
        id: "web",
        name: "Web Application",
        description: "User-facing web interface",
        status: maintenance.isActive ? "maintenance" : "operational",
      },
      {
        id: "db",
        name: "Database",
        description: "Data storage and retrieval",
        status: maintenance.isActive ? "maintenance" : "operational",
      },
      {
        id: "auth",
        name: "Authentication",
        description: "User authentication and authorization",
        status: maintenance.isActive ? "maintenance" : "operational",
      },
      {
        id: "github",
        name: "GitHub Integration",
        description: "GitHub API integration and webhooks",
        status: maintenance.isActive ? "maintenance" : "operational",
      },
    ],
    incidents: [
      {
        id: "incident-1",
        title: "API Performance Degradation",
        severity: "minor",
        status: "resolved",
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
        updatedAt: new Date(Date.now() - 6.5 * 24 * 60 * 60 * 1000).toISOString(),
        resolvedAt: new Date(Date.now() - 6.5 * 24 * 60 * 60 * 1000).toISOString(),
        affectedServices: ["API"],
        updates: [
          {
            timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
            status: "investigating",
            message: "We are investigating reports of slow API response times.",
          },
          {
            timestamp: new Date(Date.now() - 6.8 * 24 * 60 * 60 * 1000).toISOString(),
            status: "identified",
            message: "The issue has been identified as a database query optimization problem.",
          },
          {
            timestamp: new Date(Date.now() - 6.5 * 24 * 60 * 60 * 1000).toISOString(),
            status: "resolved",
            message: "The issue has been resolved by optimizing database queries. We are monitoring the situation.",
          },
        ],
      },
      {
        id: "incident-2",
        title: "GitHub Integration Outage",
        severity: "major",
        status: "resolved",
        createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days ago
        updatedAt: new Date(Date.now() - 13.5 * 24 * 60 * 60 * 1000).toISOString(),
        resolvedAt: new Date(Date.now() - 13.5 * 24 * 60 * 60 * 1000).toISOString(),
        affectedServices: ["GitHub Integration"],
        updates: [
          {
            timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
            status: "investigating",
            message: "We are investigating an issue with GitHub integration.",
          },
          {
            timestamp: new Date(Date.now() - 13.8 * 24 * 60 * 60 * 1000).toISOString(),
            status: "identified",
            message: "The issue has been identified as a rate limiting problem with the GitHub API.",
          },
          {
            timestamp: new Date(Date.now() - 13.5 * 24 * 60 * 60 * 1000).toISOString(),
            status: "resolved",
            message: "The issue has been resolved by implementing better rate limiting handling.",
          },
        ],
      },
    ],
    maintenanceEvents: [
      {
        id: "maintenance-1",
        title: "Database Upgrade",
        description: "Scheduled maintenance to upgrade our database systems for improved performance.",
        status: "completed",
        startTime: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
        endTime: new Date(Date.now() - 2.9 * 24 * 60 * 60 * 1000).toISOString(),
        affectedServices: ["Database", "API"],
      },
      {
        id: "maintenance-2",
        title: "Infrastructure Updates",
        description: "Scheduled maintenance to update our infrastructure and improve reliability.",
        status: maintenance.isActive ? "in_progress" : "scheduled",
        startTime: maintenance.isActive
          ? new Date().toISOString()
          : new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
        endTime: maintenance.isActive
          ? maintenance.endTime
            ? new Date(maintenance.endTime).toISOString()
            : new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString()
          : new Date(Date.now() + 2.1 * 24 * 60 * 60 * 1000).toISOString(),
        affectedServices: ["API", "Web Application", "Authentication", "Database", "GitHub Integration"],
      },
    ],
    uptimeData: {
      last24Hours: [
        { serviceId: "api", serviceName: "API", uptime: 1.0 },
        { serviceId: "web", serviceName: "Web Application", uptime: 1.0 },
        { serviceId: "db", serviceName: "Database", uptime: 1.0 },
        { serviceId: "auth", serviceName: "Authentication", uptime: 1.0 },
        { serviceId: "github", serviceName: "GitHub Integration", uptime: 1.0 },
      ],
      last7Days: [
        { serviceId: "api", serviceName: "API", uptime: 0.995 },
        { serviceId: "web", serviceName: "Web Application", uptime: 0.999 },
        { serviceId: "db", serviceName: "Database", uptime: 0.998 },
        { serviceId: "auth", serviceName: "Authentication", uptime: 1.0 },
        { serviceId: "github", serviceName: "GitHub Integration", uptime: 0.997 },
      ],
      last30Days: [
        { serviceId: "api", serviceName: "API", uptime: 0.992 },
        { serviceId: "web", serviceName: "Web Application", uptime: 0.998 },
        { serviceId: "db", serviceName: "Database", uptime: 0.995 },
        { serviceId: "auth", serviceName: "Authentication", uptime: 0.999 },
        { serviceId: "github", serviceName: "GitHub Integration", uptime: 0.994 },
      ],
      last90Days: [
        { serviceId: "api", serviceName: "API", uptime: 0.99 },
        { serviceId: "web", serviceName: "Web Application", uptime: 0.997 },
        { serviceId: "db", serviceName: "Database", uptime: 0.993 },
        { serviceId: "auth", serviceName: "Authentication", uptime: 0.998 },
        { serviceId: "github", serviceName: "GitHub Integration", uptime: 0.991 },
      ],
    },
  }
}
