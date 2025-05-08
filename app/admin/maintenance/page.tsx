"use client"

import type React from "react"
import { Suspense } from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Save } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// In a real application, this would be an API call
const toggleMaintenanceMode = async (
  isEnabled: boolean,
  endTime: string,
  reason: string,
): Promise<{ success: boolean; message: string }> => {
  console.log("Toggling maintenance mode:", { isEnabled, endTime, reason })

  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: isEnabled ? "Maintenance mode enabled successfully" : "Maintenance mode disabled successfully",
      })
    }, 1000)
  })
}

export default function MaintenanceAdmin() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [endTime, setEndTime] = useState("")
  const [reason, setReason] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  // In a real application, fetch the current maintenance status
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        // This would be an API call in a real application
        const response = await fetch("/api/status")
        const data = await response.json()

        if (data.maintenance) {
          setIsEnabled(data.maintenance.isActive)
          setEndTime(data.maintenance.endTime || "")
          setReason(data.maintenance.reason || "")
        }
      } catch (error) {
        console.error("Failed to fetch maintenance status:", error)
      }
    }

    fetchStatus()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)

    try {
      const result = await toggleMaintenanceMode(isEnabled, endTime, reason)
      setResult(result)
    } catch (error) {
      setResult({
        success: false,
        message: "Failed to update maintenance mode",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-heading font-bold mb-8">Maintenance Mode Control</h1>

      {result && (
        <Alert variant={result.success ? "default" : "destructive"} className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{result.success ? "Success" : "Error"}</AlertTitle>
          <AlertDescription>{result.message}</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Maintenance Settings</CardTitle>
          <CardDescription>
            Enable or disable maintenance mode for the entire application. When enabled, all users will be redirected to
            the maintenance page.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="maintenance-toggle">Maintenance Mode</Label>
                <p className="text-sm text-muted-foreground">
                  {isEnabled ? "The site is currently in maintenance mode" : "The site is currently operational"}
                </p>
              </div>
              <Switch id="maintenance-toggle" checked={isEnabled} onCheckedChange={setIsEnabled} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="end-time">Expected Completion Time</Label>
              <Input
                id="end-time"
                placeholder="e.g., Today at 6:00 PM UTC"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                This will be displayed on the maintenance page to inform users.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">Maintenance Reason</Label>
              <Textarea
                id="reason"
                placeholder="e.g., We're upgrading our servers to improve performance"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
              />
              <p className="text-xs text-muted-foreground">
                Provide a brief explanation of why the site is in maintenance mode.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>Saving...</>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>

      <div className="mt-8">
        <h2 className="text-xl font-heading font-semibold mb-4">Bypass Instructions</h2>
        <p className="text-muted-foreground mb-2">
          To bypass maintenance mode for testing, add the following query parameter to any URL:
        </p>
        <code className="bg-muted p-2 rounded block mb-4 font-mono text-sm">
          ?maintenance_bypass=gitsink-bypass-maintenance
        </code>
        <p className="text-sm text-muted-foreground">
          Note: In a production environment, you should use a more secure token and restrict access to admin users only.
        </p>
      </div>
    </div>
  )
}
