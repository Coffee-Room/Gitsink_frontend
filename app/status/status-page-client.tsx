"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, RefreshCw, CheckCircle, AlertCircle, XCircle, Clock, Bell, ExternalLink } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface ServiceStatus {
  name: string
  status: "operational" | "degraded" | "outage"
  uptime: string
  responseTime: string
}

interface Incident {
  id: string
  title: string
  status: "investigating" | "identified" | "monitoring" | "resolved"
  severity: "minor" | "major" | "critical"
  createdAt: string
  updatedAt: string
  description: string
}

const services: ServiceStatus[] = [
  { name: "API Gateway", status: "operational", uptime: "99.99%", responseTime: "45ms" },
  { name: "GitHub Integration", status: "operational", uptime: "99.95%", responseTime: "120ms" },
  { name: "Database", status: "operational", uptime: "99.98%", responseTime: "12ms" },
  { name: "Authentication", status: "operational", uptime: "99.97%", responseTime: "35ms" },
  { name: "Webhook Delivery", status: "degraded", uptime: "98.50%", responseTime: "250ms" },
  { name: "Dashboard", status: "operational", uptime: "99.99%", responseTime: "80ms" },
]

const incidents: Incident[] = [
  {
    id: "1",
    title: "Webhook delivery delays",
    status: "monitoring",
    severity: "minor",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T11:45:00Z",
    description: "We are experiencing delays in webhook delivery. Our team is monitoring the situation.",
  },
  {
    id: "2",
    title: "API rate limiting issues",
    status: "resolved",
    severity: "major",
    createdAt: "2024-01-14T14:20:00Z",
    updatedAt: "2024-01-14T16:30:00Z",
    description: "Rate limiting was incorrectly applied to some API endpoints. This has been resolved.",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "operational":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "degraded":
      return <AlertCircle className="h-4 w-4 text-yellow-500" />
    case "outage":
      return <XCircle className="h-4 w-4 text-red-500" />
    default:
      return <Clock className="h-4 w-4 text-gray-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "operational":
      return "bg-green-500"
    case "degraded":
      return "bg-yellow-500"
    case "outage":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

const getIncidentStatusColor = (status: string) => {
  switch (status) {
    case "investigating":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    case "identified":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    case "monitoring":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    case "resolved":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
  }
}

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "critical":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    case "major":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
    case "minor":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
  }
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  })
}

export default function StatusPageClient() {
  const [lastUpdated, setLastUpdated] = useState<string>("")
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    setLastUpdated(new Date().toLocaleString())
  }, [])

  const handleRefresh = async () => {
    setIsRefreshing(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLastUpdated(new Date().toLocaleString())
    setIsRefreshing(false)
  }

  const overallStatus = services.every((service) => service.status === "operational")
    ? "operational"
    : services.some((service) => service.status === "outage")
      ? "outage"
      : "degraded"

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 md:px-6 py-8">
        {/* Navigation Back */}
        <div className="mb-6 animate-fade-in-up">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Gitsink
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className={`w-3 h-3 rounded-full ${getStatusColor(overallStatus)}`} />
            <Badge variant={overallStatus === "operational" ? "default" : "destructive"}>
              {overallStatus === "operational"
                ? "All Systems Operational"
                : overallStatus === "degraded"
                  ? "Some Systems Degraded"
                  : "System Outage"}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gitsink System Status</h1>

          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Current operational status and uptime information for all Gitsink services
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleRefresh}
              disabled={isRefreshing}
              variant="outline"
              className="hover:scale-105 transition-transform bg-transparent"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
              {isRefreshing ? "Refreshing..." : "Refresh Status"}
            </Button>

            <Button variant="outline" className="hover:scale-105 transition-transform bg-transparent">
              <Bell className="h-4 w-4 mr-2" />
              Subscribe to Updates
            </Button>
          </div>

          {lastUpdated && <p className="text-sm text-muted-foreground mt-4">Last updated: {lastUpdated}</p>}
        </div>

        {/* Current Status */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-semibold mb-6">Current Status</h2>

          <div className="grid gap-4">
            {services.map((service, index) => (
              <Card
                key={service.name}
                className="hover:shadow-md transition-all duration-200 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="font-medium">{service.name}</h3>
                      <p className="text-sm text-muted-foreground capitalize">
                        {service.status === "operational"
                          ? "Operational"
                          : service.status === "degraded"
                            ? "Degraded Performance"
                            : "Outage"}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-medium">{service.uptime} uptime</div>
                    <div className="text-sm text-muted-foreground">{service.responseTime} avg response</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* System Metrics */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl font-semibold mb-6">System Metrics</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Overall Uptime</CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">99.95%</div>
                <p className="text-sm text-muted-foreground mt-1">43.2 minutes downtime</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Average Response Time</CardTitle>
                <CardDescription>Last 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">89ms</div>
                <p className="text-sm text-muted-foreground mt-1">12ms faster than yesterday</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">API Requests</CardTitle>
                <CardDescription>Last 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2.4M</div>
                <p className="text-sm text-muted-foreground mt-1">99.99% success rate</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-2xl font-semibold mb-6">Recent Incidents</h2>

          {incidents.length > 0 ? (
            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <Card
                  key={incident.id}
                  className="hover:shadow-md transition-all duration-200 animate-fade-in-up"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-lg">{incident.title}</CardTitle>
                        <div className="flex gap-2">
                          <Badge className={getIncidentStatusColor(incident.status)}>
                            {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                          </Badge>
                          <Badge className={getSeverityColor(incident.severity)}>
                            {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>Created: {formatDate(incident.createdAt)}</div>
                        <div>Updated: {formatDate(incident.updatedAt)}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{incident.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No Recent Incidents</h3>
                <p className="text-muted-foreground">
                  All systems have been running smoothly. No incidents to report in the last 7 days.
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Subscribe Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Stay Updated</CardTitle>
              <CardDescription>Get notified about system status changes and scheduled maintenance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 hover:scale-105 transition-transform">
                  <Bell className="h-4 w-4 mr-2" />
                  Subscribe to Email Updates
                </Button>
                <Button variant="outline" className="flex-1 hover:scale-105 transition-transform bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  RSS Feed
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                You can also follow us on{" "}
                <Link href="#" className="text-primary hover:underline">
                  Twitter
                </Link>{" "}
                for real-time updates.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
