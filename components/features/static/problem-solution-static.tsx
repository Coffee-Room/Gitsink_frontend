import { Card, CardContent } from "@/components/ui/card"

export default function ProblemSolutionStatic() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The Problem & Our Solution</h2>
          </div>
          <div className="opacity-0 animate-fade-in animation-delay-200">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Developers face a common challenge that Gitsink elegantly solves
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="opacity-0 animate-slide-right animation-delay-400">
            <Card className="border-2 border-destructive/20 h-full">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <div className="h-6 w-6 text-destructive" />
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
          </div>

          <div className="opacity-0 animate-slide-left animation-delay-600">
            <Card className="border-2 border-primary/20 h-full">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="h-6 w-6 text-primary" />
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
          </div>
        </div>
      </div>
    </section>
  )
}
