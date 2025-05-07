export type ServiceStatus = "operational" | "degraded" | "partial_outage" | "major_outage" | "maintenance" | "unknown"

export interface Service {
  id: string
  name: string
  description: string
  status: ServiceStatus
}

export interface UptimeData {
  date: string
  uptime: number
}

export interface IncidentUpdate {
  timestamp: string
  status: string
  message: string
}

export interface Incident {
  id: string
  title: string
  status: string
  severity: string
  createdAt: string
  updatedAt: string
  resolvedAt?: string
  affectedServices: string[]
  updates: IncidentUpdate[]
}

export interface MaintenanceEvent {
  id: string
  title: string
  description: string
  status: string
  startTime: string
  endTime: string
  affectedServices?: string[]
}

export interface SystemStatus {
  status: ServiceStatus
  lastUpdated: string
  services: Service[]
  incidents: Incident[]
  uptimeData: UptimeData[]
  maintenanceSchedules: MaintenanceEvent[]
}

export interface MaintenanceDetails {
  isActive: boolean
  endTime: string | null
  reason: string | null
}
