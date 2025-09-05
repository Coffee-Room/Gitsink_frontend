import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface WelcomeHeaderProps {
  name: string
  username: string
  avatarUrl: string
}

export default function WelcomeHeader({ name, username, avatarUrl }: WelcomeHeaderProps) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-border">
          <AvatarImage src={avatarUrl || "/placeholder.svg"} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome back, {name.split(" ")[0]}!</h1>
          <p className="text-sm text-muted-foreground">@{username}</p>
        </div>
      </div>
      <div className="mt-4 sm:mt-0">
        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-500/20">
          Pro Account
        </span>
      </div>
    </div>
  )
}
