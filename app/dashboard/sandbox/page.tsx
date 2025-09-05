"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Play, Terminal } from "lucide-react"

export default function SandboxPage() {
  const [activeTab, setActiveTab] = useState("rest")
  const [isRunning, setIsRunning] = useState(false)
  const [response, setResponse] = useState<any>(null)

  const restExample = `curl -X GET "https://api.gitsink.com/v1/repos" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`

  const graphqlExample = `query {
  repositories {
    name
    owner
    stars
    forks
    lastCommitDate
  }
}`

  const handleRunQuery = () => {
    setIsRunning(true)

    // Simulate API call
    setTimeout(() => {
      if (activeTab === "rest") {
        setResponse({
          status: 200,
          data: [
            {
              id: "repo_1",
              name: "awesome-project",
              owner: "sarahchen",
              stars: 128,
              forks: 23,
              lastCommitDate: "2023-05-15T10:30:00Z",
            },
            {
              id: "repo_2",
              name: "react-components",
              owner: "sarahchen",
              stars: 342,
              forks: 56,
              lastCommitDate: "2023-05-10T14:20:00Z",
            },
          ],
        })
      } else {
        setResponse({
          data: {
            repositories: [
              {
                name: "awesome-project",
                owner: "sarahchen",
                stars: 128,
                forks: 23,
                lastCommitDate: "2023-05-15T10:30:00Z",
              },
              {
                name: "react-components",
                owner: "sarahchen",
                stars: 342,
                forks: 56,
                lastCommitDate: "2023-05-10T14:20:00Z",
              },
            ],
          },
        })
      }
      setIsRunning(false)
    }, 1500)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // In a real app, you would show a toast notification
  }

  return (
    <div className="flex flex-col gap-6 p-6 md:gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">API Sandbox</h1>
        <p className="text-muted-foreground">Test your API integration in our interactive sandbox</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Try the API</CardTitle>
            <CardDescription>Test API calls directly in your browser</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="rest">REST API</TabsTrigger>
                <TabsTrigger value="graphql">GraphQL</TabsTrigger>
              </TabsList>

              <TabsContent value="rest">
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto font-mono text-sm">{restExample}</pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(restExample)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="graphql">
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto font-mono text-sm">{graphqlExample}</pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(graphqlExample)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button onClick={handleRunQuery} disabled={isRunning} className="gap-2">
              {isRunning ? (
                <>
                  <Terminal className="h-4 w-4 animate-pulse" />
                  Running...
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" />
                  Run Query
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        {response && (
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Response</CardTitle>
              <CardDescription>API response from your query</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-md overflow-x-auto font-mono text-sm max-h-96">
                  {JSON.stringify(response, null, 2)}
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(JSON.stringify(response, null, 2))}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
