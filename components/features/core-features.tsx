"use client"

import { RefreshCw, FileText, GitGraphIcon, Key, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { CoordinatedAnimation } from "@/components/animations/coordinated-animations"

export default function CoreFeatures() {
  const features = [
    {
      icon: <RefreshCw className="h-10 w-10 text-primary" />,
      title: "Real-Time Sync",
      subtitle: "No Manual Updates",
      description: "Your GitHub projects are automatically updated — perfect for dynamic sites, bots, and plugins.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Custom Project Stories",
      subtitle: "Your Way",
      description:
        "Define how your projects are presented using Portfolio.md — add descriptions, highlights, and more.",
    },
    {
      icon: <GitGraphIcon className="h-10 w-10 text-primary" />,
      title: "GraphQL & REST Flexibility",
      subtitle: "For All Stacks",
      description: "Use GraphQL for dynamic queries or REST for simple integrations.",
    },
    {
      icon: <Key className="h-10 w-10 text-primary" />,
      title: "Secure API Keys",
      subtitle: "Your Data, Your Control",
      description: "Login with GitHub, generate your key, and keep your data secure.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Multi-Platform Ready",
      subtitle: "Websites, Bots, Plugins",
      description:
        "Showcase your projects anywhere — websites, Telegram bots, Twitter profiles, Twitch overlays, and beyond.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <CoordinatedAnimation type="fade">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Core Features</h2>
          </CoordinatedAnimation>
          <CoordinatedAnimation delay={200} type="fade">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful capabilities that make Gitsink essential for developers
            </p>
          </CoordinatedAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <CoordinatedAnimation key={index} delay={300 + index * 100} type="fade">
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{feature.subtitle}</p>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </CoordinatedAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
