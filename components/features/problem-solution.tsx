"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CoordinatedAnimation } from "@/components/animations/coordinated-animations"
import { AlertTriangle, CheckCircle } from "lucide-react"

export default function ProblemSolution() {
  const sectionRef = useRef(null)

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <CoordinatedAnimation type="fade">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The Problem & Our Solution</h2>
          </CoordinatedAnimation>
          <CoordinatedAnimation delay={200} type="fade">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Developers face a common challenge that Gitsink elegantly solves
            </p>
          </CoordinatedAnimation>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <CoordinatedAnimation delay={400} type="slide-right">
            <Card className="border-2 border-destructive/20 h-full">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">The Problem</h3>
                </div>
                <p className="text-lg mb-6">
                  Developers struggle to maintain up-to-date project showcases across multiple platforms.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-destructive">•</span>
                    <span>Manual updates across different platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-destructive">•</span>
                    <span>Inconsistent project information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-destructive">•</span>
                    <span>Time wasted on repetitive showcase tasks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </CoordinatedAnimation>

          <CoordinatedAnimation delay={600} type="slide-left">
            <Card className="border-2 border-primary/20 h-full">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Our Solution</h3>
                </div>
                <p className="text-lg mb-6">
                  Gitsink acts as a central API hub, making your projects instantly accessible everywhere you want.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-primary">•</span>
                    <span>Automatic synchronization with GitHub</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-primary">•</span>
                    <span>Consistent data across all platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-primary">•</span>
                    <span>One update propagates everywhere</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </CoordinatedAnimation>
        </div>
      </div>
    </section>
  )
}
