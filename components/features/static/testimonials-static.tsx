import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TestimonialsStatic() {
  const testimonials = [
    {
      quote:
        "My projects are everywhere — my website, my bot, even my Twitter profile. Gitsink made this possible with minimal effort.",
      author: "Sarah Chen",
      role: "Full Stack Developer",
      avatar: "/stylized-initials-sc.png",
    },
    {
      quote:
        "Customizing my project showcase is now super easy. I just update my Portfolio.md and everything syncs automatically.",
      author: "Marcus Johnson",
      role: "Open Source Contributor",
      avatar: "/abstract-geometric-mj.png",
    },
    {
      quote:
        "The GraphQL API is incredibly flexible. I can query exactly what I need for each platform where I showcase my work.",
      author: "Priya Sharma",
      role: "Frontend Engineer",
      avatar: "/playstation-controller.png",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Developers Love Gitsink</h2>
          </div>
          <div className="opacity-0 animate-fade-in animation-delay-200">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from developers who are already using Gitsink to showcase their projects
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`opacity-0 animate-fade-in animation-delay-${300 + index * 100}`}>
              <Card className="h-full">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <div className="h-8 w-8 text-primary/40 mb-4" />
                  <p className="flex-grow mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
