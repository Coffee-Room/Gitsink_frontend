import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  GitBranch,
  Globe,
  Lock,
  Zap,
  Users,
  Building,
  Smartphone,
  Bot,
  BarChart3,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: <GitBranch className="h-8 w-8 text-blue-600" />,
      title: "Real-time Repository Sync",
      description: "Automatically sync your GitHub repositories with enriched metadata and analytics.",
      benefits: [
        "Instant synchronization with GitHub",
        "Enriched commit and PR data",
        "Branch and tag tracking",
        "Contributor analytics",
      ],
    },
    {
      icon: <Database className="h-8 w-8 text-green-600" />,
      title: "Powerful API Access",
      description: "RESTful and GraphQL APIs to access all your repository data programmatically.",
      benefits: [
        "REST and GraphQL endpoints",
        "Real-time webhooks",
        "Rate limiting and caching",
        "Comprehensive documentation",
      ],
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Advanced Analytics",
      description: "Deep insights into your development workflow and team productivity.",
      benefits: ["Code quality metrics", "Team productivity insights", "Trend analysis", "Custom dashboards"],
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Enterprise Security",
      description: "Bank-level security with OAuth integration and data encryption.",
      benefits: ["OAuth 2.0 authentication", "End-to-end encryption", "SOC 2 compliance", "Audit logging"],
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Lightning Fast",
      description: "Optimized for performance with global CDN and intelligent caching.",
      benefits: ["Sub-100ms response times", "Global edge network", "Intelligent caching", "99.99% uptime SLA"],
    },
    {
      icon: <Code className="h-8 w-8 text-indigo-600" />,
      title: "Developer Experience",
      description: "Built by developers, for developers with comprehensive tooling and SDKs.",
      benefits: [
        "Multiple language SDKs",
        "Interactive API explorer",
        "Comprehensive documentation",
        "24/7 developer support",
      ],
    },
  ]

  const useCases = [
    {
      icon: <Building className="h-6 w-6 text-blue-600" />,
      title: "Enterprise Teams",
      description: "Scale your development operations with enterprise-grade repository management.",
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Open Source Projects",
      description: "Manage and analyze large open source communities and contributions.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-purple-600" />,
      title: "Mobile Development",
      description: "Track mobile app repositories with specialized metrics and insights.",
    },
    {
      icon: <Bot className="h-6 w-6 text-orange-600" />,
      title: "DevOps Automation",
      description: "Integrate with CI/CD pipelines and automate development workflows.",
    },
    {
      icon: <Globe className="h-6 w-6 text-teal-600" />,
      title: "Multi-Platform Projects",
      description: "Manage repositories across different platforms and environments.",
    },
    {
      icon: <Lock className="h-6 w-6 text-red-600" />,
      title: "Security Compliance",
      description: "Ensure code security and compliance across all your repositories.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8 animate-fade-in-up">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800">
                <Zap className="h-4 w-4" />
                Powerful Features
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 max-w-4xl mx-auto leading-tight">
                Everything you need to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}
                  supercharge{" "}
                </span>
                your development workflow
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Discover the comprehensive suite of features that make Gitsink the ultimate platform for repository
                management and developer productivity.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <Button size="lg" asChild className="group">
                  <Link href="/waitlist">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/developer">View Documentation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="py-20 bg-white/50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">Core Features</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Powerful tools designed to enhance your development experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <Card
                  key={feature.title}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 animate-fade-in-up"
                          style={{ animationDelay: `${0.2 + index * 0.1 + benefitIndex * 0.05}s` }}
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                Built for Every Use Case
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Whether you're a solo developer or managing enterprise teams, Gitsink scales with your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <Card
                  key={useCase.title}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="group-hover:scale-110 transition-transform duration-300">{useCase.icon}</div>
                      <CardTitle className="text-lg">{useCase.title}</CardTitle>
                    </div>
                    <CardDescription>{useCase.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* API Examples */}
        <section className="py-20 bg-white/50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">Developer-First API</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Simple, powerful APIs that integrate seamlessly with your existing workflow
              </p>
            </div>

            <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Tabs defaultValue="rest" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="rest">REST API</TabsTrigger>
                  <TabsTrigger value="graphql">GraphQL</TabsTrigger>
                </TabsList>

                <TabsContent value="rest" className="mt-6">
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <CardHeader>
                      <CardTitle>Fetch Repository Data</CardTitle>
                      <CardDescription>
                        Get comprehensive repository information with a simple REST call
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {`curl -X GET "https://api.gitsink.com/v1/repos/owner/repo" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"

{
  "id": "repo_123",
  "name": "awesome-project",
  "owner": "github-user",
  "description": "An awesome project",
  "stars": 1234,
  "forks": 567,
  "language": "TypeScript",
  "last_commit": "2024-01-15T10:30:00Z",
  "contributors": 42,
  "analytics": {
    "code_quality_score": 8.7,
    "activity_level": "high"
  }
}`}
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="graphql" className="mt-6">
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <CardHeader>
                      <CardTitle>GraphQL Query</CardTitle>
                      <CardDescription>Fetch exactly the data you need with GraphQL</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {`query GetRepository($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    id
    name
    description
    stars
    forks
    primaryLanguage
    lastCommit {
      sha
      message
      author
      date
    }
    analytics {
      codeQualityScore
      activityLevel
      contributors {
        total
        active
      }
    }
  }
}`}
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 animate-fade-in-up">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Development Workflow?</h2>
                <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                  Join thousands of developers who are already using Gitsink to supercharge their productivity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild className="group">
                    <Link href="/waitlist">
                      Get Started Free
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    <Link href="/contact">Talk to Sales</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
