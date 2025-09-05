import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"
import Link from "next/link"

export default function SandboxCard() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>API Sandbox</CardTitle>
        <CardDescription>Test your API integration in a live environment</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          <p>Try out API calls, explore responses, and build your integration with real-time feedback.</p>
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/developer/sandbox" className="w-full">
          <Button className="w-full gap-2">
            <PlayCircle className="h-4 w-4" />
            <span>Launch API Sandbox</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
