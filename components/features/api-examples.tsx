"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { CoordinatedAnimation } from "@/components/animations/coordinated-animations"
import { useState } from "react"
import { Copy, Check } from "lucide-react"

export default function ApiExamples() {
  const [activeTab, setActiveTab] = useState("graphql")
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const graphqlExample = `query {
  userProjects(username: "your-username") {
    name
    description
    stars
    language
    portfolio {
      featured
      category
      technologies
    }
  }
}`

  const restExample = `GET /api/projects
Authorization: Bearer <your-api-key>

# Filter by featured status
GET /api/projects?featured=true

# Filter by category
GET /api/projects?category=Developer+Tools`

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <CoordinatedAnimation type="fade">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Visual API Example</h2>
          </CoordinatedAnimation>
          <CoordinatedAnimation delay={200} type="fade">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose between GraphQL and REST to integrate with your projects
            </p>
          </CoordinatedAnimation>
        </div>

        <CoordinatedAnimation delay={400} type="fade">
          <Card className="max-w-3xl mx-auto overflow-hidden border-2 border-muted shadow-xl">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="bg-zinc-900 p-3 border-b border-zinc-700 flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <TabsList className="bg-zinc-800">
                  <TabsTrigger value="graphql" className="text-xs">
                    GraphQL
                  </TabsTrigger>
                  <TabsTrigger value="rest" className="text-xs">
                    REST
                  </TabsTrigger>
                </TabsList>
              </div>
              <CardContent className="p-0">
                <TabsContent value="graphql" className="m-0">
                  <div className="bg-zinc-800 p-4 sm:p-6 font-mono text-xs sm:text-sm text-blue-400 relative group">
                    <button
                      onClick={() => copyToClipboard(graphqlExample, "graphql")}
                      className="absolute top-4 right-4 p-2 rounded-md bg-zinc-700 hover:bg-zinc-600 transition-colors"
                      aria-label="Copy code"
                    >
                      {copied === "graphql" ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4 text-zinc-400" />
                      )}
                    </button>
                    <pre className="whitespace-pre overflow-x-auto">{graphqlExample}</pre>
                  </div>
                </TabsContent>
                <TabsContent value="rest" className="m-0">
                  <div className="bg-zinc-800 p-4 sm:p-6 font-mono text-xs sm:text-sm text-green-400 relative group">
                    <button
                      onClick={() => copyToClipboard(restExample, "rest")}
                      className="absolute top-4 right-4 p-2 rounded-md bg-zinc-700 hover:bg-zinc-600 transition-colors"
                      aria-label="Copy code"
                    >
                      {copied === "rest" ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4 text-zinc-400" />
                      )}
                    </button>
                    <pre className="whitespace-pre overflow-x-auto">{restExample}</pre>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </CoordinatedAnimation>

        <CoordinatedAnimation delay={600} type="fade">
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Simple, powerful, and flexible — integrate with your projects in minutes.
            </p>
          </div>
        </CoordinatedAnimation>
      </div>
    </section>
  )
}
