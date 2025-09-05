import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Code2, Database, Key, Shield, BookOpen, ExternalLink, Copy, Play } from "lucide-react"

export const metadata: Metadata = {
  title: "Developer Documentation - Gitsink",
  description: "Complete API documentation and developer resources for integrating Gitsink into your projects.",
}

export default function DeveloperPage() {
  const coreEndpoints = [
    {
      method: "GET",
      endpoint: "/v1/projects",
      description: "Fetch all your projects with metadata",
      type: "REST",
    },
    {
      method: "GET",
      endpoint: "/v1/projects/{id}",
      description: "Get detailed information about a specific project",
      type: "REST",
    },
    {
      method: "GET",
      endpoint: "/v1/user/profile",
      description: "Retrieve your GitHub profile information",
      type: "REST",
    },
    {
      method: "POST",
      endpoint: "/v1/graphql",
      description: "Execute GraphQL queries for complex data fetching",
      type: "GraphQL",
    },
    {
      method: "GET",
      endpoint: "/v1/repositories",
      description: "List all connected repositories",
      type: "REST",
    },
    {
      method: "POST",
      endpoint: "/v1/sync",
      description: "Trigger manual synchronization with GitHub",
      type: "REST",
    },
  ]

  const quickStartSteps = [
    {
      step: 1,
      title: "Get Your API Key",
      description: "Sign up and generate your unique API key from the dashboard",
      code: "// Your API key will look like this:\nconst API_KEY = 'sk_live_1234567890abcdef';",
    },
    {
      step: 2,
      title: "Make Your First Request",
      description: "Fetch your projects using a simple HTTP request",
      code: `fetch('https://api.gitsink.tech/v1/projects', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));`,
    },
    {
      step: 3,
      title: "Display Your Projects",
      description: "Use the response data to showcase your work",
      code: `// Example response structure
{
  "projects": [
    {
      "id": "awesome-project",
      "name": "Awesome Project",
      "description": "A revolutionary web application",
      "technologies": ["React", "Node.js", "PostgreSQL"],
      "demo_url": "https://awesome-project.com",
      "github_url": "https://github.com/user/awesome-project",
      "stars": 142,
      "forks": 23
    }
  ]
}`,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
              <Badge variant="secondary" className="mb-4">
                <Code2 className="h-4 w-4 mr-2" />
                Developer Documentation
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Build Amazing Things with Gitsink
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Complete API documentation, code examples, and developer resources to help you integrate Gitsink into
                your projects and showcase your work everywhere.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="group">
                  <Link href="/waitlist">
                    Get API Access
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#quick-start">Quick Start Guide</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Endpoints Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Core API Endpoints</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive API endpoints designed to give you complete control over your project data.
              </p>
            </div>

            <div className="max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    API Reference
                  </CardTitle>
                  <CardDescription>
                    Complete list of available endpoints with descriptions and usage examples
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-20">Method</TableHead>
                          <TableHead className="min-w-64">Endpoint</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead className="w-24">Type</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {coreEndpoints.map((endpoint, index) => (
                          <TableRow
                            key={index}
                            className="hover:bg-muted/50 transition-colors animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                          >
                            <TableCell>
                              <Badge
                                variant={endpoint.method === "GET" ? "secondary" : "default"}
                                className="font-mono text-xs"
                              >
                                {endpoint.method}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-mono text-sm">{endpoint.endpoint}</TableCell>
                            <TableCell className="text-muted-foreground">{endpoint.description}</TableCell>
                            <TableCell>
                              <Badge variant={endpoint.type === "REST" ? "outline" : "secondary"} className="text-xs">
                                {endpoint.type}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section id="quick-start" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Quick Start Guide</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get up and running with Gitsink in just a few minutes. Follow these simple steps to start showcasing
                your projects.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {quickStartSteps.map((step, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg p-4 relative group">
                      <pre className="text-sm overflow-x-auto">
                        <code>{step.code}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* API Examples */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">API Examples</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore code examples in different programming languages and frameworks.
              </p>
            </div>

            <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5" />
                    Code Examples
                  </CardTitle>
                  <CardDescription>Ready-to-use code snippets for popular languages and frameworks</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="javascript" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                      <TabsTrigger value="python">Python</TabsTrigger>
                      <TabsTrigger value="curl">cURL</TabsTrigger>
                      <TabsTrigger value="graphql">GraphQL</TabsTrigger>
                    </TabsList>

                    <TabsContent value="javascript" className="mt-6">
                      <div className="bg-muted rounded-lg p-4 relative group">
                        <pre className="text-sm overflow-x-auto">
                          <code>{`// Using fetch API
const response = await fetch('https://api.gitsink.tech/v1/projects', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const projects = await response.json();
console.log(projects);

// Using axios
import axios from 'axios';

const { data } = await axios.get('https://api.gitsink.tech/v1/projects', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});`}</code>
                        </pre>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="python" className="mt-6">
                      <div className="bg-muted rounded-lg p-4 relative group">
                        <pre className="text-sm overflow-x-auto">
                          <code>{`import requests

# Using requests library
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.gitsink.tech/v1/projects', headers=headers)
projects = response.json()
print(projects)

# Using httpx (async)
import httpx

async def get_projects():
    async with httpx.AsyncClient() as client:
        response = await client.get(
            'https://api.gitsink.tech/v1/projects',
            headers=headers
        )
        return response.json()`}</code>
                        </pre>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="curl" className="mt-6">
                      <div className="bg-muted rounded-lg p-4 relative group">
                        <pre className="text-sm overflow-x-auto">
                          <code>{`# Get all projects
curl -X GET "https://api.gitsink.tech/v1/projects" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"

# Get specific project
curl -X GET "https://api.gitsink.tech/v1/projects/project-id" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"

# Trigger sync
curl -X POST "https://api.gitsink.tech/v1/sync" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</code>
                        </pre>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="graphql" className="mt-6">
                      <div className="bg-muted rounded-lg p-4 relative group">
                        <pre className="text-sm overflow-x-auto">
                          <code>{`# GraphQL Query
query GetProjects($limit: Int, $featured: Boolean) {
  projects(limit: $limit, featured: $featured) {
    id
    name
    description
    technologies
    demoUrl
    githubUrl
    stars
    forks
    lastUpdated
    metadata {
      category
      tags
      screenshots
    }
  }
  user {
    username
    avatar
    bio
  }
}

# Variables
{
  "limit": 10,
  "featured": true
}`}</code>
                        </pre>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Developer Resources</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to build amazing integrations with Gitsink.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">API Documentation</CardTitle>
                  <CardDescription>Complete reference for all endpoints and parameters</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full group">
                    <Link href="#quick-start">
                      View Docs
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <CardHeader>
                  <Play className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Interactive Playground</CardTitle>
                  <CardDescription>Test API calls and explore responses in real-time</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href="/dashboard/sandbox">Launch Playground</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Authentication Guide</CardTitle>
                  <CardDescription>Learn how to securely authenticate your API requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href="#quick-start">Security Guide</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Start Building?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get your API key and start showcasing your projects in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="group">
                  <Link href="/waitlist">
                    Get API Access
                    <Key className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
