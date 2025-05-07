import { CheckCircle, AlertTriangle, XCircle, Clock } from "lucide-react"

interface StatusIndicatorProps {
  status: string
  size?: "sm" | "md" | "lg"
}

export default function StatusIndicator({ status, size = "md" }: StatusIndicatorProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  const sizeClass = sizeClasses[size]

  switch (status) {
    case "operational":
      return <CheckCircle className={`${sizeClass} text-green-500`} />
    case "degraded":
      return <AlertTriangle className={`${sizeClass} text-amber-500`} />
    case "partial_outage":
      return <AlertTriangle className={`${sizeClass} text-orange-500`} />
    case "major_outage":
      return <XCircle className={`${sizeClass} text-red-500`} />
    case "maintenance":
      return <Clock className={`${sizeClass} text-blue-500`} />
    default:
      return <div className={`${sizeClass} rounded-full bg-gray-300`} />
  }
}
