"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react"

// Mock data generator for API usage
const generateMockData = (days: number, startDate = new Date()) => {
  const data = []
  const date = new Date(startDate)
  date.setDate(date.getDate() - days)

  for (let i = 0; i <= days; i++) {
    const nextDate = new Date(date)
    nextDate.setDate(date.getDate() + i)

    // Generate more realistic data with weekly patterns
    const dayOfWeek = nextDate.getDay()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

    // Base value with some randomness
    let baseValue = isWeekend
      ? Math.floor(Math.random() * 500) + 100
      : // Lower on weekends
        Math.floor(Math.random() * 1500) + 500 // Higher on weekdays

    // Add some trend (increasing over time)
    baseValue += Math.floor(i * 5)

    data.push({
      date: nextDate.toISOString().split("T")[0],
      requests: baseValue,
      errors: Math.floor(baseValue * (Math.random() * 0.05)), // 0-5% error rate
    })
  }

  return data
}

type TimeRange = "7d" | "30d" | "90d"

export default function ApiUsageChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>("30d")

  const chartData = useMemo(() => {
    const days = timeRange === "7d" ? 7 : timeRange === "30d" ? 30 : 90
    return generateMockData(days)
  }, [timeRange])

  // Calculate total requests and change percentage
  const totalRequests = chartData.reduce((sum, day) => sum + day.requests, 0)
  const firstHalf = chartData.slice(0, Math.floor(chartData.length / 2))
  const secondHalf = chartData.slice(Math.floor(chartData.length / 2))

  const firstHalfTotal = firstHalf.reduce((sum, day) => sum + day.requests, 0)
  const secondHalfTotal = secondHalf.reduce((sum, day) => sum + day.requests, 0)

  const changePercentage =
    firstHalfTotal === 0 ? 100 : Math.round(((secondHalfTotal - firstHalfTotal) / firstHalfTotal) * 100)

  // Format date for x-axis
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return timeRange === "7d"
      ? date.toLocaleDateString("en-US", { weekday: "short" })
      : date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle>API Usage</CardTitle>
          <CardDescription>Total requests over time</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={timeRange} onValueChange={(value) => setTimeRange(value as TimeRange)}>
            <SelectTrigger className="h-8 w-[80px]">
              <SelectValue placeholder="30 days" />
            </SelectTrigger>
            <SelectContent side="bottom">
              <SelectItem value="7d">7 days</SelectItem>
              <SelectItem value="30d">30 days</SelectItem>
              <SelectItem value="90d">90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">Total Requests</span>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold">{totalRequests.toLocaleString()}</span>
              <div
                className={`ml-2 flex items-center text-xs font-medium ${changePercentage >= 0 ? "text-green-500" : "text-red-500"}`}
              >
                {changePercentage >= 0 ? (
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                )}
                {Math.abs(changePercentage)}%
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">Average Daily</span>
            <span className="text-2xl font-bold">{Math.round(totalRequests / chartData.length).toLocaleString()}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">Success Rate</span>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold">
                {(100 - (chartData.reduce((sum, day) => sum + day.errors, 0) / totalRequests) * 100).toFixed(2)}%
              </span>
              <TrendingUp className="h-3 w-3 ml-2 text-green-500" />
            </div>
          </div>
        </div>

        <div className="h-[300px]">
          <ChartContainer
            config={{
              requests: {
                label: "API Requests",
                color: "hsl(var(--chart-1))",
              },
              errors: {
                label: "Errors",
                color: "hsl(var(--destructive))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="date"
                  tickFormatter={formatDate}
                  tick={{ fontSize: 12 }}
                  tickMargin={8}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 12 }}
                  tickMargin={8}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => (value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="requests"
                  name="API Requests"
                  radius={[4, 4, 0, 0]}
                  barSize={timeRange === "90d" ? 2 : timeRange === "30d" ? 8 : 20}
                />
                <Bar
                  dataKey="errors"
                  name="Errors"
                  radius={[4, 4, 0, 0]}
                  barSize={timeRange === "90d" ? 2 : timeRange === "30d" ? 8 : 20}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
