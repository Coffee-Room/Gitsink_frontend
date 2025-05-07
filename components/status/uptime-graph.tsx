"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { UptimeData } from "@/types/status"

interface UptimeGraphProps {
  data: UptimeData
}

export default function UptimeGraph({ data }: UptimeGraphProps) {
  const getUptimePercentage = (uptime: number) => {
    return (uptime * 100).toFixed(2)
  }

  const getStatusColor = (uptime: number) => {
    if (uptime >= 0.99) return "bg-green-500"
    if (uptime >= 0.95) return "bg-amber-500"
    if (uptime >= 0.9) return "bg-orange-500"
    return "bg-red-500"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Uptime Performance</CardTitle>
        <CardDescription>Historical uptime data for Gitsink services</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="30d">
          <TabsList className="mb-4">
            <TabsTrigger value="24h">24 Hours</TabsTrigger>
            <TabsTrigger value="7d">7 Days</TabsTrigger>
            <TabsTrigger value="30d">30 Days</TabsTrigger>
            <TabsTrigger value="90d">90 Days</TabsTrigger>
          </TabsList>

          <TabsContent value="24h">
            <UptimePeriod data={data.last24Hours} />
          </TabsContent>

          <TabsContent value="7d">
            <UptimePeriod data={data.last7Days} />
          </TabsContent>

          <TabsContent value="30d">
            <UptimePeriod data={data.last30Days} />
          </TabsContent>

          <TabsContent value="90d">
            <UptimePeriod data={data.last90Days} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )

  function UptimePeriod({ data }: { data: { serviceId: string; serviceName: string; uptime: number }[] }) {
    return (
      <div className="space-y-6">
        {data.map((item) => (
          <div key={item.serviceId} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{item.serviceName}</span>
              <span className="text-sm font-medium">{getUptimePercentage(item.uptime)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className={`h-full ${getStatusColor(item.uptime)}`} style={{ width: `${item.uptime * 100}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
