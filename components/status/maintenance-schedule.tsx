"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import type { MaintenanceEvent } from "@/types/status"

interface MaintenanceScheduleProps {
  schedules: MaintenanceEvent[]
}

export default function MaintenanceSchedule({ schedules }: MaintenanceScheduleProps) {
  if (schedules.length === 0) {
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

  // Sort maintenance events by start time (most recent first)
  const sortedSchedules = [...schedules].sort(
    (a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime(),
  )

  // Separate upcoming and past events
  const now = new Date()
  const upcoming = sortedSchedules.filter((event) => new Date(event.startTime) > now)
  const past = sortedSchedules.filter((event) => new Date(event.startTime) <= now)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Maintenance Schedule</CardTitle>
        <CardDescription>Upcoming and past maintenance events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {upcoming.length > 0 && (
            <div>
              <h3 className="font-medium text-lg mb-4">Upcoming Maintenance</h3>
              <div className="space-y-6">
                {upcoming.map((event) => (
                  <MaintenanceEventItem key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          {past.length > 0 && (
            <div>
              <h3 className="font-medium text-lg mb-4">Past Maintenance</h3>
              <div className="space-y-6">
                {past.slice(0, 5).map((event) => (
                  <MaintenanceEventItem key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function MaintenanceEventItem({ event }: { event: MaintenanceEvent }) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Scheduled</Badge>
      case "in_progress":
        return <Badge className="bg-amber-500 hover:bg-amber-600">In Progress</Badge>
      case "completed":
        return <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>
      case "cancelled":
        return <Badge variant="outline">Cancelled</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const formatDateRange = (startTime: string, endTime: string) => {
    const start = new Date(startTime)
    const end = new Date(endTime)

    // If same day
    if (start.toDateString() === end.toDateString()) {
      return `${format(start, "MMMM d, yyyy")} from ${format(start, "h:mm a")} to ${format(end, "h:mm a")}`
    }

    // Different days
    return `${format(start, "MMMM d, yyyy h:mm a")} to ${format(end, "MMMM d, yyyy h:mm a")}`
  }

  return (
    <div className="border-b pb-4 last:border-0 last:pb-0">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
        <div>
          <h4 className="font-medium">{event.title}</h4>
          <p className="text-sm text-muted-foreground">{formatDateRange(event.startTime, event.endTime)}</p>
        </div>
        <div>{getStatusBadge(event.status)}</div>
      </div>
      <p className="text-sm mt-2">{event.description}</p>
      {event.affectedServices && event.affectedServices.length > 0 && (
        <p className="text-sm mt-2">
          <span className="font-medium">Affected services:</span> {event.affectedServices.join(", ")}
        </p>
      )}
    </div>
  )
}
