import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, HelpCircle, MessageCircle, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ - Gitsink",
  description: "Find answers to frequently asked questions about Gitsink and how to get the most out of our platform.",
}

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "What is Gitsink?",
          answer:
            "Gitsink is a platform that transforms your GitHub repositories into a powerful API. It allows you to showcase your projects across websites, bots, mobile apps, and other platforms with rich metadata and real-time synchronization.",
        },
        {
          question: "How do I get started with Gitsink?",
          answer:
            "Getting started is simple! Sign up for an account, connect your GitHub profile with one-click authentication, generate your API key, and start making requests to showcase your projects anywhere.",
        },
        {
          question: "Is Gitsink free to use?",
          answer:
            "Yes! Gitsink offers a generous free tier that includes access to public repositories, basic API calls, and core features. We also offer premium plans for advanced features and higher usage limits.",
        },
        {
          question: "Do I need to be a developer to use Gitsink?",
          answer:
            "While Gitsink is designed with developers in mind, you don't need extensive programming knowledge to get started. Our documentation includes simple examples and copy-paste code snippets for common use cases.",
        },
      ],
    },
    {
      title: "API & Integration",
      faqs: [
        {
          question: "What types of APIs does Gitsink provide?",
          answer:
            "Gitsink offers both REST and GraphQL APIs. Use REST for simple queries and quick integration, or GraphQL for more complex data fetching with precise control over the response structure.",
        },
        {
          question: "How do I authenticate API requests?",
          answer:
            "Authentication is done using API keys. Include your API key in the Authorization header as a Bearer token. You can generate and manage your API keys from your dashboard.",
        },
        {
          question: "What data can I access through the API?",
          answer:
            "You can access repository information, project metadata, commit history, technologies used, demo links, and any custom data you've added through Portfolio.md files in your repositories.",
        },
        {
          question: "Are there rate limits on API calls?",
          answer:
            "Yes, we implement fair usage rate limits to ensure service quality for all users. Free accounts have standard limits, while premium accounts enjoy higher limits. Check your dashboard for current usage.",
        },
      ],
    },
    {
      title: "Features & Functionality",
      faqs: [
        {
          question: "How does repository synchronization work?",
          answer:
            "Gitsink automatically syncs with your GitHub repositories in real-time. When you push changes, update README files, or modify Portfolio.md files, the changes are reflected in your API responses within minutes.",
        },
        {
          question: "Can I customize how my projects are displayed?",
          answer:
            "Create a Portfolio.md file in your repository root to add custom descriptions, technology stacks, demo links, screenshots, and categorization. This metadata enhances your API responses.",
        },
        {
          question: "Does Gitsink work with private repositories?",
          answer:
            "Yes, Gitsink supports both public and private repositories. You control which repositories are included in your API responses and can manage access permissions through your dashboard.",
        },
        {
          question: "Can I use Gitsink for team projects?",
          answer:
            "Currently, Gitsink focuses on individual developer portfolios. However, you can showcase collaborative projects from your personal GitHub account, and we're exploring team features for future releases.",
        },
      ],
    },
    {
      title: "Technical Support",
      faqs: [
        {
          question: "What if I encounter an API error?",
          answer:
            "Check our status page first to see if there are any ongoing issues. Most errors are related to authentication or rate limits. Our documentation includes common error codes and solutions.",
        },
        {
          question: "How can I report a bug or request a feature?",
          answer:
            "We'd love to hear from you! Use our contact form, email us directly, or reach out through our community channels. We actively review all feedback and prioritize improvements based on user needs.",
        },
        {
          question: "Is there a community or support forum?",
          answer:
            "Yes! Join our Discord community to connect with other developers, share use cases, get help, and stay updated on new features. We also maintain comprehensive documentation and tutorials.",
        },
        {
          question: "What's your uptime guarantee?",
          answer:
            "We maintain 99.9% uptime with global CDN distribution and redundant infrastructure. Our status page provides real-time monitoring, and we proactively communicate any maintenance or issues.",
        },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
              <Badge variant="secondary" className="mb-4">
                <HelpCircle className="h-4 w-4 mr-2" />
                FAQ
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Frequently Asked Questions
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Find answers to common questions about Gitsink. Can't find what you're looking for? We're here to help!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="group">
                  <Link href="/contact">
                    Contact Support
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/developer">View Documentation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="mb-12 animate-fade-in-up"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-center">{category.title}</h2>
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible className="w-full">
                        {category.faqs.map((faq, faqIndex) => (
                          <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`} className="px-6">
                            <AccordionTrigger className="text-left hover:no-underline">
                              <span className="font-medium">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Still Have Questions?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our support team is here to help you get the most out of Gitsink. Reach out anytime!
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center">
                    <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Live Chat</CardTitle>
                    <CardDescription>Get instant help from our support team</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button asChild className="w-full">
                      <Link href="/contact">Start Chat</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center">
                    <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Email Support</CardTitle>
                    <CardDescription>Send us a detailed message</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <Link href="mailto:support@gitsink.tech">Send Email</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center">
                    <HelpCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Documentation</CardTitle>
                    <CardDescription>Explore our comprehensive guides</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <Link href="/developer">View Docs</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of developers who are already showcasing their work with Gitsink.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="group">
                  <Link href="/waitlist">
                    Join the Waitlist
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/developer">Explore API</Link>
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
