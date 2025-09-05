"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, RefreshCw, CheckCircle, AlertTriangle, XCircle, Mail, Rss } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function StatusPageClient() {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [email, setEmail] = useState("")

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 2000)
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log("Subscribing email:", email)
    setEmail("")
  }

  const services = [
    { name: "API Gateway", status: "operational", uptime: "99.99%" },
    { name: "Database", status: "operational", uptime: "99.98%" },
    { name: "Authentication", status: "operational", uptime: "99.97%" },
    { name: "File Storage", status: "degraded", uptime: "99.85%" },
    { name: "Webhooks", status: "operational", uptime: "99.96%" },
    { name: "Analytics", status: "operational", uptime: "99.94%" },
  ]

  const metrics = [
    { label: "Uptime", value: "99.97%", change: "+0.02%" },
    { label: "Response Time", value: "145ms", change: "-12ms" },
    { label: "API Requests", value: "2.4M", change: "+15%" },
  ]

  const incidents = [
    {
      id: 1,
      title: "Intermittent API Timeouts",
      status: "resolved",
      severity: "minor",
      date: "2024-01-15",
      time: "14:30 UTC",
    },
    {
      id: 2,
      title: "Database Connection Issues",
      status: "investigating",
      severity: "major",
      date: "2024-01-14",
      time: "09:15 UTC",
    },
    {
      id: 3,
      title: "Scheduled Maintenance",
      status: "completed",
      severity: "maintenance",
      date: "2024-01-12",
      time: "02:00 UTC",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "degraded":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "outage":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <CheckCircle className="h-4 w-4 text-green-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      operational: "bg-green-100 text-green-800 border-green-200",
      degraded: "bg-yellow-100 text-yellow-800 border-yellow-200",
      outage: "bg-red-100 text-red-800 border-red-200",
      resolved: "bg-green-100 text-green-800 border-green-200",
      investigating: "bg-yellow-100 text-yellow-800 border-yellow-200",
      completed: "bg-blue-100 text-blue-800 border-blue-200",
    }

    return <Badge className={`${variants[status as keyof typeof variants]} capitalize`}>{status}</Badge>
  }

  const getSeverityBadge = (severity: string) => {
    const variants = {
      minor: "bg-yellow-100 text-yellow-800 border-yellow-200",
      major: "bg-red-100 text-red-800 border-red-200",
      maintenance: "bg-blue-100 text-blue-800 border-blue-200",
    }

    return <Badge className={`${variants[severity as keyof typeof variants]} capitalize`}>{severity}</Badge>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <div className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors animate-fade-in-up"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gitsink
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
            <CheckCircle className="h-4 w-4" />
            All Systems Operational
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Gitsink Status</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real-time status and uptime monitoring for all Gitsink services
          </p>
          <div className="flex justify-center gap-4">
            <Button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
              {isRefreshing ? "Refreshing..." : "Refresh Status"}
            </Button>
          </div>
        </div>

        {/* System Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <Card
              key={metric.label}
              className="animate-fade-in-up hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader className="pb-2">
                <CardDescription>{metric.label}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{metric.value}</div>
                <p
                  className={`text-sm ${
                    metric.change.startsWith("+") && metric.label !== "API Requests"
                      ? "text-green-600"
                      : metric.change.startsWith("-") && metric.label === "Response Time"
                        ? "text-green-600"
                        : metric.change.startsWith("+") && metric.label === "API Requests"
                          ? "text-green-600"
                          : "text-red-600"
                  }`}
                >
                  {metric.change} from last week
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Status */}
        <Card className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <CardHeader>
            <CardTitle>Service Status</CardTitle>
            <CardDescription>Current operational status of all Gitsink services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between p-4 rounded-lg border bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-slate-100">{service.name}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{service.uptime} uptime</p>
                    </div>
                  </div>
                  {getStatusBadge(service.status)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Incidents */}
        <Card className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <CardHeader>
            <CardTitle>Recent Incidents</CardTitle>
            <CardDescription>Latest incidents and maintenance activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <div
                  key={incident.id}
                  className="p-4 rounded-lg border bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">{incident.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span>{incident.date}</span>
                        <span>•</span>
                        <span>{incident.time}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {getSeverityBadge(incident.severity)}
                      {getStatusBadge(incident.status)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subscribe to Updates */}
        <Card className="animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
          <CardHeader>
            <CardTitle>Subscribe to Updates</CardTitle>
            <CardDescription>Get notified about service status changes and maintenance windows</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit">
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </form>
              <div className="flex items-center gap-4 pt-2">
                <Button variant="outline" size="sm">
                  <Rss className="h-4 w-4 mr-2" />
                  RSS Feed
                </Button>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Or subscribe via RSS for real-time updates
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
