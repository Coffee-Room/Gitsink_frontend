"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ScrollReveal from "@/components/scroll-reveal"

export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-muted/50">
      <div className="container">
        <ScrollReveal animation="fade">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-16">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={200}>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <FaqItem
                value="item-1"
                question="Do I need to select projects manually?"
                answer="No, we parse them automatically via Portfolio.md. This file allows you to specify which projects to showcase and add additional metadata."
              />
              <FaqItem
                value="item-2"
                question="Is Gitsink free?"
                answer="Yes, for early users on the waitlist. We're committed to providing a generous free tier even after our official launch."
              />
              <FaqItem
                value="item-3"
                question="Can I customize the output?"
                answer="Custom configs are coming soon. You'll be able to define exactly how your projects are presented and what metadata is included in the API response."
              />
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
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}
