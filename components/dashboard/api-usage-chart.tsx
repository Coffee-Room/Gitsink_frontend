"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Calendar, TrendingUp, Activity, AlertCircle } from "lucide-react"

// Mock data for API usage
const generateMockData = (days: number) => {
  const data = []
  const now = new Date()

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    data.push({
      date: date.toISOString().split("T")[0],
      requests: Math.floor(Math.random() * 1000) + 200,
      errors: Math.floor(Math.random() * 50) + 5,
    })
  }

  return data
}

interface ApiUsageChartProps {
  className?: string
}

export default function ApiUsageChart({ className }: ApiUsageChartProps) {
  const [timeRange, setTimeRange] = useState<"7d" | "30d" | "90d">("7d")

  const data = generateMockData(timeRange === "7d" ? 7 : timeRange === "30d" ? 30 : 90)

  const totalRequests = data.reduce((sum, day) => sum + day.requests, 0)
  const totalErrors = data.reduce((sum, day) => sum + day.errors, 0)
  const avgDailyRequests = Math.round(totalRequests / data.length)
  const errorRate = ((totalErrors / totalRequests) * 100).toFixed(2)

  // Calculate growth percentage (mock)
  const growthPercentage = Math.floor(Math.random() * 20) + 5

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              API Usage Overview
            </CardTitle>
            <CardDescription>Monitor your API requests and performance metrics</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant={timeRange === "7d" ? "default" : "outline"} size="sm" onClick={() => setTimeRange("7d")}>
              7 days
            </Button>
            <Button variant={timeRange === "30d" ? "default" : "outline"} size="sm" onClick={() => setTimeRange("30d")}>
              30 days
            </Button>
            <Button variant={timeRange === "90d" ? "default" : "outline"} size="sm" onClick={() => setTimeRange("90d")}>
              90 days
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">Total Requests</span>
            </div>
            <div className="text-2xl font-bold">{totalRequests.toLocaleString()}</div>
            <div className="flex items-center gap-1">
              <Badge variant="secondary" className="text-xs">
                +{growthPercentage}%
              </Badge>
              <span className="text-xs text-muted-foreground">vs last period</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium">Avg Daily</span>
            </div>
            <div className="text-2xl font-bold">{avgDailyRequests.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">requests per day</div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-medium">Success Rate</span>
            </div>
            <div className="text-2xl font-bold">{(100 - Number.parseFloat(errorRate)).toFixed(1)}%</div>
            <div className="text-xs text-muted-foreground">{errorRate}% error rate</div>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="date"
                className="text-xs fill-muted-foreground"
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
                }}
              />
              <YAxis className="text-xs fill-muted-foreground" />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const date = new Date(label)
                    return (
                      <div className="rounded-lg border bg-background p-3 shadow-md">
                        <p className="font-medium">
                          {date.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                        <p className="text-sm text-blue-600">Requests: {payload[0]?.value?.toLocaleString()}</p>
                        <p className="text-sm text-red-600">Errors: {payload[1]?.value?.toLocaleString()}</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar dataKey="requests" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} />
              <Bar dataKey="errors" fill="hsl(var(--destructive))" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
