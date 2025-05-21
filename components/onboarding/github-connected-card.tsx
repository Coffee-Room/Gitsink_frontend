"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

export function GitHubConnectedCard() {
  // In a real app, this would come from your auth state
  const user = {
    name: "Sarah Johnson",
    username: "sarahjdev",
    avatarUrl: "/diverse-avatars.png",
  }

  return (
    <Card className="border-border/40 bg-card/95 shadow-md backdrop-blur">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">GitHub Connected</CardTitle>
          <Badge variant="success" className="flex items-center gap-1 bg-green-500/20 text-green-500">
            <CheckCircle2 className="h-3 w-3" />
            <span>Connected</span>
          </Badge>
        </div>
        <CardDescription>Your GitHub account has been successfully connected</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-border">
            <AvatarImage src={user.avatarUrl || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-lg font-medium">{user.name}</div>
            <div className="text-sm text-muted-foreground">@{user.username}</div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <h3 className="text-sm font-medium">Permissions granted:</h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <PermissionItem title="Repository access" description="Read and write access to your repositories" />
            <PermissionItem title="User information" description="Read access to your profile information" />
            <PermissionItem title="Organization access" description="Read access to your organizations" />
            <PermissionItem title="Webhooks" description="Ability to create repository webhooks" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function PermissionItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500" />
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  )
}
