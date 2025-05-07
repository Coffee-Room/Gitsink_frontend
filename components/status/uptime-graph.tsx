"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import type { UptimeData } from "@/types/status"

interface UptimeGraphProps {
  data: UptimeData[]
}

export default function UptimeGraph({ data }: UptimeGraphProps) {
  const [timeRange, setTimeRange] = useState("30d")

  // Filter data based on selected time range
  const filteredData = data.slice(-getTimeRangeDays(timeRange))

  function getTimeRangeDays(range: string): number {
    switch (range) {
      case "7d":
        return 7
      case "14d":
        return 14
      case "30d":
        return 30
      case "90d":
        return 90
      default:
        return 30
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Uptime History</CardTitle>
            <CardDescription>Service availability over time</CardDescription>
          </div>
          <div className="flex items-center space-x-2 mt-2 md:mt-0">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="text-sm rounded border border-input bg-background px-3 py-1"
            >
              <option value="7d">Last 7 days</option>
              <option value="14d">Last 14 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={filteredData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return `${date.getMonth() + 1}/${date.getDate()}`
                }}
              />
              <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
              <Tooltip
                formatter={(value) => [`${value}%`, "Uptime"]}
                labelFormatter={(label) => new Date(label).toLocaleDateString()}
              />
              <Bar dataKey="uptime" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
