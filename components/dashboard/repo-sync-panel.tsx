"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, RefreshCw, ExternalLink, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"

interface Repo {
  id: string
  name: string
  owner: string
  description: string
  lastSynced: string
  enabled: boolean
  stars: number
}

export default function RepoSyncPanel() {
  // Mock data for repositories
  const [repos, setRepos] = useState<Repo[]>([
    {
      id: "1",
      name: "api-toolkit",
      owner: "sarahjdev",
      description: "A collection of tools for API development and testing",
      lastSynced: "2023-05-22T10:30:00Z",
      enabled: true,
      stars: 48,
    },
    {
      id: "2",
      name: "react-data-hooks",
      owner: "sarahjdev",
      description: "Custom React hooks for data fetching and state management",
      lastSynced: "2023-05-21T15:45:00Z",
      enabled: true,
      stars: 127,
    },
    {
      id: "3",
      name: "css-animations",
      owner: "sarahjdev",
      description: "A library of reusable CSS animations and transitions",
      lastSynced: "2023-05-20T09:15:00Z",
      enabled: false,
      stars: 36,
    },
    {
      id: "4",
      name: "node-auth-examples",
      owner: "sarahjdev",
      description: "Examples of authentication implementations in Node.js",
      lastSynced: "2023-05-19T14:20:00Z",
      enabled: true,
      stars: 92,
    },
  ])

  const toggleRepo = (id: string) => {
    setRepos(repos.map((repo) => (repo.id === id ? { ...repo, enabled: !repo.enabled } : repo)))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle>Repository Sync</CardTitle>
            <CardDescription>Manage which repositories are synced with Gitsink</CardDescription>
          </div>
          <Button size="sm" variant="outline" className="gap-1 h-8 mt-2 sm:mt-0">
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Sync Now</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search repositories..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon" className="h-9 w-9">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter repositories</span>
            </Button>
          </div>

          <div className="rounded-md border">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="h-10 px-4 text-left font-medium">Repository</th>
                    <th className="h-10 px-2 text-left font-medium">Last Synced</th>
                    <th className="h-10 px-2 text-left font-medium">Status</th>
                    <th className="h-10 px-2 text-right font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {repos.map((repo) => (
                    <tr key={repo.id} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle">
                        <div>
                          <div className="font-medium">{repo.name}</div>
                          <div className="text-xs text-muted-foreground">{repo.description}</div>
                        </div>
                      </td>
                      <td className="p-2 align-middle text-xs">{formatDate(repo.lastSynced)}</td>
                      <td className="p-2 align-middle">
                        <Badge variant={repo.enabled ? "default" : "outline"}>
                          {repo.enabled ? "Syncing" : "Disabled"}
                        </Badge>
                      </td>
                      <td className="p-2 align-middle text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Switch
                            checked={repo.enabled}
                            onCheckedChange={() => toggleRepo(repo.id)}
                            aria-label={`${repo.enabled ? "Disable" : "Enable"} sync for ${repo.name}`}
                          />
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ExternalLink className="h-4 w-4" />
                            <span className="sr-only">View enriched data</span>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
