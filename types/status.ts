export interface ServiceStatus {
  id: string
  name: string
  description: string
  status: "operational" | "degraded" | "partial_outage" | "major_outage" | "maintenance"
}

export interface IncidentUpdate {
  timestamp: string
  status: string
  message: string
}

export interface Incident {
  id: string
  title: string
  severity: "critical" | "major" | "minor" | "warning" | "info"
  status: "investigating" | "identified" | "monitoring" | "resolved"
  createdAt: string
  updatedAt: string
  resolvedAt: string | null
  affectedServices: string[]
  updates: IncidentUpdate[]
}

export interface MaintenanceEvent {
  id: string
  title: string
  description: string
  status: "scheduled" | "in_progress" | "completed" | "cancelled"
  startTime: string
  endTime: string
  affectedServices: string[]
}

export interface UptimeData {
  last24Hours: { serviceId: string; serviceName: string; uptime: number }[]
  last7Days: { serviceId: string; serviceName: string; uptime: number }[]
  last30Days: { serviceId: string; serviceName: string; uptime: number }[]
  last90Days: { serviceId: string; serviceName: string; uptime: number }[]
}

export interface SystemStatus {
  status: "operational" | "degraded" | "partial_outage" | "major_outage" | "maintenance"
  lastUpdated: string
  services: ServiceStatus[]
  incidents: Incident[]
  maintenanceEvents: MaintenanceEvent[]
  uptimeData: UptimeData
}
