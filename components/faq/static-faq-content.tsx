import { HelpCircle, ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Static FAQ data
const faqs = [
  {
    question: "What is Gitsink?",
    answer:
      "Gitsink is a tool that transforms your GitHub projects into a powerful API, perfect for showcasing your work across multiple platforms. It automatically syncs with your repositories and provides structured data that you can use on websites, applications, bots, and more.",
  },
  {
    question: "How do I use Gitsink?",
    answer:
      "Using Gitsink is simple: 1) Log in with GitHub to authenticate securely, 2) Add a Portfolio.md file to your repositories to provide context and additional details, 3) Access your projects via our API using either GraphQL or REST endpoints. That's it! Your projects are now available wherever you need them.",
  },
  {
    question: "What platforms can I showcase my projects on?",
    answer:
      "Gitsink works with virtually any platform that can consume an API. This includes websites, bots (like Telegram), plugins, social profiles (Twitter, Twitch, Discord), and any other platform that can make API requests. The flexibility of our API means you can showcase your work anywhere you want.",
  },
  {
    question: "Is Gitsink free?",
    answer:
      "Yes, Gitsink is free for early users who join the waitlist. We're committed to providing a generous free tier even after our official launch, ensuring that developers can showcase their work without barriers.",
  },
  {
    question: "How is my data secured?",
    answer:
      "Your data is protected with secure API keys that you control. We only request read access to your repositories, and you can specify exactly which projects are accessible through the API. Your API key is unique to you and can be regenerated at any time for security purposes.",
  },
  {
    question: "Can I use Gitsink for commercial projects?",
    answer:
      "Absolutely. Gitsink is built for all developers, whether you're working on personal or commercial projects. You can use it to showcase client work, company projects, or anything else you've built.",
  },
  {
    question: "Is there a limit to how many projects I can showcase?",
    answer:
      "No, you can sync all your public GitHub projects. For private repositories, you can choose which ones to make visible through the API without exposing the actual code. This gives you complete control over what you showcase.",
  },
  {
    question: "Do I need coding skills to use Gitsink?",
    answer:
      "A basic understanding of APIs is helpful, but we make it easy to get started. Our documentation includes examples for both GraphQL and REST, and we provide code snippets for common use cases. If you can write a simple Portfolio.md file, you can use Gitsink effectively.",
  },
  {
    question: "What information can I include in my Portfolio.md file?",
    answer:
      "Your Portfolio.md file can include custom metadata beyond what GitHub provides, such as project categories, featured status, demo links, technologies used, screenshots, documentation links, and any custom fields you want to add. This allows you to provide rich context for your projects.",
  },
  {
    question: "How often does Gitsink sync with my GitHub repositories?",
    answer:
      "Gitsink automatically syncs with your GitHub repositories whenever changes are detected. This ensures that your project showcase is always up-to-date with the latest information without any manual intervention.",
  },
]

export default function StaticFaqContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>
        <div className="absolute inset-0 bg-[url('/abstract-dots-pattern.png')] bg-repeat opacity-5"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center shadow-lg">
                <HelpCircle className="h-10 w-10 text-primary" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
              Got Questions? We've Got Answers.
            </h1>

            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about Gitsink in one place.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List Section */}
      <section className="py-12 md:py-16 lg:py-20" id="faq-list">
        <div className="container px-4 md:px-6">
          <Card className="max-w-4xl mx-auto p-6 md:p-8 shadow-lg">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <div className="mt-8 text-center text-muted-foreground">
            <p>
              Don't see your question here?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{" "}
              or email{" "}
              <a href="mailto:support@gitsink.tech" className="text-primary hover:underline">
                support@gitsink.tech
              </a>{" "}
              for help.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl rounded-lg bg-primary/5 p-6 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl">Still have questions?</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Contact our support team for more information or join our waitlist to stay updated.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/waitlist">
                <Button size="lg">
                  Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
