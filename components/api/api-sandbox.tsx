"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ApiSandbox() {
  const router = useRouter()

  return (
    <section id="sandbox" className="scroll-mt-16">
      <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
        <CardContent className="flex flex-col items-center justify-between gap-6 p-8 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-bold">Try it live in our API sandbox</h2>
            <p className="mt-2 text-muted-foreground">
              Test API calls, explore responses, and build your integration in our interactive sandbox.
            </p>
          </div>
          <Button
            size="lg"
            onClick={() => router.push("/sandbox")}
            className="group shrink-0"
            leftIcon={<Code className="h-4 w-4" />}
          >
            Launch Sandbox
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
