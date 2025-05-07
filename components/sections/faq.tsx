"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ScrollReveal from "@/components/animations/scroll-reveal"

export default function Faq() {
  return (
    <section id="faq" className="py-12 md:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <ScrollReveal animation="fade">
          <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl mb-8 md:mb-16">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={200}>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <FaqItem
                value="item-1"
                question="Do I need to select projects manually?"
                answer="No, Gitsink automatically detects your projects using the Portfolio.md file in each repository. This file lets you specify which projects to showcase and add custom descriptions or metadata. For any project without a Portfolio.md, we use GitHub's publicly available metadata to fill in basic details (name, description, stars, etc.)."
              />
              <FaqItem
                value="item-2"
                question="Is Gitsink free?"
                answer="Yes, for early users on the waitlist. We're committed to providing a generous free tier even after our official launch."
              />
              <CustomizationFaqItem />
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

interface FaqItemProps {
  value: string
  question: string
  answer: string
}

function FaqItem({ value, question, answer }: FaqItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-left">{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}

function CustomizationFaqItem() {
  return (
    <AccordionItem value="item-3">
      <AccordionTrigger className="text-left">Can I customize the output?</AccordionTrigger>
      <AccordionContent>
        <p>Absolutely. With Gitsink, you can customize your project showcase in two ways:</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>
            <strong>GraphQL API:</strong> Define exactly what data you want to see in your API response by specifying
            fields in your query. For example:
            <pre className="bg-muted p-3 rounded-md mt-2 text-xs sm:text-sm font-mono overflow-x-auto">
              {`query {
  userProjects(username: "your-username") {
    name
    description
    stars
    language
    customField
  }
}`}
            </pre>
          </li>
          <li>
            <strong>Portfolio.md File:</strong> Add custom descriptions, tags, and metadata directly within your GitHub
            repositories. Gitsink automatically reads this file to enrich your project data.
          </li>
        </ul>
        <p className="mt-2">
          Advanced customization options (like custom field mappings and layouts) are also coming soon.
        </p>
      </AccordionContent>
    </AccordionItem>
  )
}
