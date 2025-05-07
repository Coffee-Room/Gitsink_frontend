"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import type { MaintenanceEvent } from "@/types/status"

interface MaintenanceScheduleProps {
  events: MaintenanceEvent[]
}

export default function MaintenanceSchedule({ events }: MaintenanceScheduleProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-500">
            Scheduled
          </Badge>
        )
      case "in_progress":
        return (
          <Badge variant="outline" className="border-amber-500 text-amber-500">
            In Progress
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            Completed
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            Cancelled
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  if (events.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Maintenance Schedule</CardTitle>
          <CardDescription>Upcoming and past maintenance events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground">No maintenance events scheduled.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Sort events by start time (upcoming first)
  const sortedEvents = [...events].sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())

  return (
    <Card>
      <CardHeader>
        <CardTitle>Maintenance Schedule</CardTitle>
        <CardDescription>Upcoming and past maintenance events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {sortedEvents.map((event) => (
            <div key={event.id} className="border-b pb-6 last:border-0 last:pb-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-medium text-lg">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(event.startTime), "MMMM d, yyyy 'at' h:mm a")} -{" "}
                    {format(new Date(event.endTime), "h:mm a")}
                  </p>
                </div>
                <div>{getStatusBadge(event.status)}</div>
              </div>

              <p className="mt-2">{event.description}</p>

              <div className="mt-4">
                <p className="text-sm">
                  <span className="font-medium">Affected services:</span> {event.affectedServices.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
