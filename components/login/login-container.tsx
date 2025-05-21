import type React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface LoginContainerProps {
  children: React.ReactNode
}

export default function LoginContainer({ children }: LoginContainerProps) {
  return (
    <Card className="w-full max-w-md border-border/40 bg-card/95 shadow-lg backdrop-blur">
      <CardContent className="pt-6">{children}</CardContent>
    </Card>
  )
}
