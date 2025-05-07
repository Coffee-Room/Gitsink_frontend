"use client"

import { Mail, Briefcase, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { CoordinatedAnimation } from "@/components/animations/coordinated-animations"

export default function ContactInfo() {
  return (
    <CoordinatedAnimation type="slide-right">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Information</h2>
          <p className="text-muted-foreground">
            Choose the right channel for your inquiry. We're here to help with any questions you might have.
          </p>
        </div>

        <Card className="overflow-hidden border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <HelpCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Support Inquiries</h3>
                <p className="text-muted-foreground mb-2">Need help with using Gitsink or have technical questions?</p>
                <a href="mailto:support@gitsink.tech" className="text-primary hover:underline flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  support@gitsink.tech
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Business & Partnerships</h3>
                <p className="text-muted-foreground mb-2">
                  Interested in partnering, business opportunities, or acquisition inquiries?
                </p>
                <a href="mailto:hello@gitsink.tech" className="text-primary hover:underline flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  hello@gitsink.tech
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="p-6 bg-muted/50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Response Time</h3>
          <p className="text-muted-foreground">
            We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please
            indicate this in your message subject.
          </p>
        </div>
      </div>
    </CoordinatedAnimation>
  )
}
