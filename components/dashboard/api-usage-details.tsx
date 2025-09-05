"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for endpoint usage
const endpointData = [
  { endpoint: "/api/repos", requests: 4328, avgLatency: 124, errorRate: 0.8 },
  { endpoint: "/api/commits", requests: 3721, avgLatency: 187, errorRate: 1.2 },
  { endpoint: "/api/users", requests: 2105, avgLatency: 95, errorRate: 0.5 },
  { endpoint: "/api/branches", requests: 1876, avgLatency: 112, errorRate: 0.7 },
  { endpoint: "/api/pull-requests", requests: 1543, avgLatency: 203, errorRate: 1.5 },
  { endpoint: "/api/issues", requests: 1298, avgLatency: 145, errorRate: 0.9 },
  { endpoint: "/api/webhooks", requests: 987, avgLatency: 78, errorRate: 0.3 },
  { endpoint: "/api/stats", requests: 754, avgLatency: 167, errorRate: 1.1 },
]

// Mock data for latency over time
const generateLatencyData = () => {
  const data = []
  const now = new Date()

  for (let i = 0; i < 24; i++) {
    const hour = new Date(now)
    hour.setHours(now.getHours() - 23 + i)

    data.push({
      time: hour.toISOString(),
      p50: Math.floor(Math.random() * 50) + 80,
      p90: Math.floor(Math.random() * 70) + 120,
      p99: Math.floor(Math.random() * 100) + 180,
    })
  }

  return data
}

const latencyData = generateLatencyData()

export default function ApiUsageDetails() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Endpoint Usage</CardTitle>
          <CardDescription>Request volume by endpoint</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Endpoint</TableHead>
                <TableHead className="text-right">Requests</TableHead>
                <TableHead className="text-right">Avg. Latency (ms)</TableHead>
                <TableHead className="text-right">Error Rate (%)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {endpointData.map((item) => (
                <TableRow key={item.endpoint}>
                  <TableCell className="font-mono text-xs">{item.endpoint}</TableCell>
                  <TableCell className="text-right">{item.requests.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{item.avgLatency} ms</TableCell>
                  <TableCell className="text-right">{item.errorRate}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>API Latency</CardTitle>
          <CardDescription>Response time percentiles over the last 24 hours</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ChartContainer
              config={{
                p50: {
                  label: "p50 (median)",
                  color: "hsl(var(--chart-1))",
                },
                p90: {
                  label: "p90",
                  color: "hsl(var(--chart-2))",
                },
                p99: {
                  label: "p99",
                  color: "hsl(var(--chart-3))",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={latencyData} margin={{ top: 5, right: 5, left: 5, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="time"
                    tickFormatter={(time) => {
                      const date = new Date(time)
                      return date.toLocaleTimeString([], { hour: "2-digit", hour12: true })
                    }}
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
                    tickFormatter={(value) => `${value}ms`}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="p50" name="p50 (median)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="p90" name="p90" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="p99" name="p99" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
