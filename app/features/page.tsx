import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code2,
  GitBranch,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Github,
  Webhook,
  Search,
  BarChart3,
  Clock,
  Users,
  Smartphone,
  Monitor,
  Gamepad2,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Features - Gitsink | Powerful Git Repository API",
  description:
    "Discover Gitsink's comprehensive features for accessing Git repository data through REST and GraphQL APIs. Real-time sync, advanced search, and more.",
}

const coreFeatures = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Dual API Support",
    description: "Access your data through both REST and GraphQL APIs",
    benefits: [
      "RESTful endpoints for simple queries",
      "GraphQL for complex data relationships",
      "Consistent data models across both APIs",
      "Real-time subscriptions via GraphQL",
    ],
  },
  {
    icon: <GitBranch className="h-8 w-8" />,
    title: "Real-time Sync",
    description: "Automatic synchronization with your Git repositories",
    benefits: [
      "Instant updates on commits and pushes",
      "Branch and tag tracking",
      "Pull request status monitoring",
      "Webhook-based real-time updates",
    ],
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "Advanced Search",
    description: "Powerful search capabilities across all your repositories",
    benefits: [
      "Full-text search across code and commits",
      "Filter by author, date, and file type",
      "Regular expression support",
      "Semantic code search",
    ],
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Analytics & Insights",
    description: "Comprehensive analytics for your development workflow",
    benefits: [
      "Commit frequency and patterns",
      "Contributor activity metrics",
      "Code quality trends",
      "Repository health scores",
    ],
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enterprise Security",
    description: "Bank-grade security for your sensitive code data",
    benefits: [
      "OAuth 2.0 authentication",
      "Fine-grained access controls",
      "Audit logs and compliance",
      "SOC 2 Type II certified",
    ],
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "High Performance",
    description: "Lightning-fast API responses with global CDN",
    benefits: ["Sub-100ms response times", "99.99% uptime SLA", "Global edge caching", "Automatic scaling"],
  },
]

const useCases = [
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "Developer Dashboards",
    description: "Build comprehensive dashboards to monitor your development workflow and team productivity.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Applications",
    description: "Create mobile apps that provide on-the-go access to repository data and notifications.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Analytics Platforms",
    description: "Power business intelligence tools with rich Git repository data and insights.",
  },
  {
    icon: <Webhook className="h-6 w-6" />,
    title: "CI/CD Integration",
    description: "Integrate with continuous integration and deployment pipelines for automated workflows.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Management",
    description: "Build tools for managing development teams and tracking individual contributions.",
  },
  {
    icon: <Gamepad2 className="h-6 w-6" />,
    title: "Developer Tools",
    description: "Create innovative developer tools and IDE extensions powered by repository data.",
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <section className="py-20 text-center animate-fade-in-up">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <Zap className="h-4 w-4 mr-2" />
              Powerful Features
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Everything you need to build with <span className="text-primary">Git data</span>
            </h1>

            <p
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Gitsink provides a comprehensive suite of features to help you build powerful applications with Git
              repository data. From real-time sync to advanced analytics.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button size="lg" className="hover:scale-105 transition-transform">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform bg-transparent">
                <Github className="mr-2 h-4 w-4" />
                View Documentation
              </Button>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the powerful capabilities that make Gitsink the perfect choice for your Git data needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card
                key={feature.title}
                className="hover:shadow-lg hover:scale-105 transition-all duration-200 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-primary mb-4 hover:scale-110 transition-transform">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-start gap-2 text-sm animate-fade-in-up"
                        style={{ animationDelay: `${0.2 + index * 0.1 + benefitIndex * 0.05}s` }}
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-muted/30 -mx-4 md:-mx-6 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See how developers and teams are using Gitsink to build amazing applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <Card
                  key={useCase.title}
                  className="hover:shadow-md hover:scale-105 transition-all duration-200 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="text-primary hover:scale-110 transition-transform">{useCase.icon}</div>
                      <CardTitle className="text-lg">{useCase.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* API Examples */}
        <section className="py-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">API Examples</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started quickly with our intuitive REST and GraphQL APIs
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Tabs defaultValue="rest" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="rest">REST API</TabsTrigger>
                <TabsTrigger value="graphql">GraphQL</TabsTrigger>
              </TabsList>

              <TabsContent value="rest" className="mt-6">
                <Card className="hover:scale-105 transition-transform">
                  <CardHeader>
                    <CardTitle>Get Repository Information</CardTitle>
                    <CardDescription>Fetch detailed information about a repository using our REST API</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <div className="text-green-600 mb-2"># Get repository details</div>
                      <div className="text-blue-600">GET</div>{" "}
                      <span className="text-gray-800 dark:text-gray-200">
                        https://api.gitsink.com/v1/repos/owner/repo
                      </span>
                      <br />
                      <br />
                      <div className="text-green-600"># Response</div>
                      <div className="text-gray-600 dark:text-gray-400">{"{"}</div>
                      <div className="ml-4">
                        <div>
                          <span className="text-blue-600">"name"</span>:{" "}
                          <span className="text-green-600">"my-repo"</span>,
                        </div>
                        <div>
                          <span className="text-blue-600">"description"</span>:{" "}
                          <span className="text-green-600">"A sample repository"</span>,
                        </div>
                        <div>
                          <span className="text-blue-600">"stars"</span>: <span className="text-orange-600">1234</span>,
                        </div>
                        <div>
                          <span className="text-blue-600">"language"</span>:{" "}
                          <span className="text-green-600">"TypeScript"</span>
                        </div>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">{"}"}</div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="graphql" className="mt-6">
                <Card className="hover:scale-105 transition-transform">
                  <CardHeader>
                    <CardTitle>Query Repository Data</CardTitle>
                    <CardDescription>
                      Use GraphQL to fetch exactly the data you need in a single request
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <div className="text-green-600 mb-2"># GraphQL Query</div>
                      <div className="text-purple-600">query</div> <span className="text-blue-600">GetRepository</span>
                      <span className="text-gray-600 dark:text-gray-400">($owner: String!, $name: String!) {"{"}</span>
                      <div className="ml-4">
                        <div className="text-blue-600">repository</div>
                        <span className="text-gray-600 dark:text-gray-400">(owner: $owner, name: $name) {"{"}</span>
                        <div className="ml-4">
                          <div>name</div>
                          <div>description</div>
                          <div>stargazerCount</div>
                          <div className="text-blue-600">commits</div>
                          <span className="text-gray-600 dark:text-gray-400">(first: 10) {"{"}</span>
                          <div className="ml-4">
                            <div className="text-blue-600">nodes</div>
                            <span className="text-gray-600 dark:text-gray-400"> {"{"}</span>
                            <div className="ml-4">
                              <div>message</div>
                              <div>author</div>
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">{"}"}</div>
                          </div>
                          <div className="text-gray-600 dark:text-gray-400">{"}"}</div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">{"}"}</div>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">{"}"}</div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center animate-fade-in-up">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of developers who are already building amazing applications with Gitsink
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover:scale-105 transition-transform">
                Start Building Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform bg-transparent">
                <Clock className="mr-2 h-4 w-4" />
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
