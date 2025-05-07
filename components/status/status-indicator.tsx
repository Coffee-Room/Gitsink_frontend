"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, XCircle, Clock } from "lucide-react"
import type { ServiceStatus } from "@/types/status"

interface StatusIndicatorProps {
  service: {
    id: string
    name: string
    status: ServiceStatus
    description?: string
  }
}

export default function StatusIndicator({ service }: StatusIndicatorProps) {
  const getStatusIcon = (status: ServiceStatus) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "degraded":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />
      case "partial_outage":
        return <AlertTriangle className="h-5 w-5 text-orange-500" />
      case "major_outage":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "maintenance":
        return <Clock className="h-5 w-5 text-blue-500" />
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusText = (status: ServiceStatus) => {
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

  const getStatusColor = (status: ServiceStatus) => {
    switch (status) {
      case "operational":
        return "text-green-500"
      case "degraded":
        return "text-amber-500"
      case "partial_outage":
        return "text-orange-500"
      case "major_outage":
        return "text-red-500"
      case "maintenance":
        return "text-blue-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">{service.name}</h3>
            {service.description && <p className="text-sm text-muted-foreground">{service.description}</p>}
          </div>
          <div className="flex items-center gap-2">
            {getStatusIcon(service.status)}
            <span className={`text-sm font-medium ${getStatusColor(service.status)}`}>
              {getStatusText(service.status)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
