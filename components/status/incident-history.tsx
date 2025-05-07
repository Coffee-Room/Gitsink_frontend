"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import type { Incident } from "@/types/status"

interface IncidentHistoryProps {
  incidents: Incident[]
}

export default function IncidentHistory({ incidents }: IncidentHistoryProps) {
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge variant="destructive">Critical</Badge>
      case "major":
        return <Badge variant="destructive">Major</Badge>
      case "minor":
        return <Badge className="bg-orange-500 hover:bg-orange-600">Minor</Badge>
      case "warning":
        return <Badge className="bg-amber-500 hover:bg-amber-600">Warning</Badge>
      default:
        return <Badge variant="outline">Info</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "investigating":
        return (
          <Badge variant="outline" className="border-amber-500 text-amber-500">
            Investigating
          </Badge>
        )
      case "identified":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-500">
            Identified
          </Badge>
        )
      case "monitoring":
        return (
          <Badge variant="outline" className="border-purple-500 text-purple-500">
            Monitoring
          </Badge>
        )
      case "resolved":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            Resolved
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  if (incidents.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Incident History</CardTitle>
          <CardDescription>Recent incidents and their resolutions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground">No incidents reported in the selected time period.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Incident History</CardTitle>
        <CardDescription>Recent incidents and their resolutions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {incidents.map((incident) => (
            <div key={incident.id} className="border-b pb-6 last:border-0 last:pb-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-medium text-lg">{incident.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(incident.createdAt), "MMMM d, yyyy 'at' h:mm a")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {getSeverityBadge(incident.severity)}
                  {getStatusBadge(incident.status)}
                </div>
              </div>

              <div className="space-y-4 mt-4">
                {incident.updates.map((update, index) => (
                  <div key={index} className="border-l-2 border-muted pl-4 py-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">{format(new Date(update.timestamp), "MMM d, h:mm a")}</span>
                      <Badge variant="outline" className="text-xs">
                        {update.status}
                      </Badge>
                    </div>
                    <p className="text-sm">{update.message}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-sm">
                  <span className="font-medium">Affected services:</span> {incident.affectedServices.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
