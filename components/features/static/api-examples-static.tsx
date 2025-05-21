import { Card, CardContent } from "@/components/ui/card"

export default function ApiExamplesStatic() {
  const graphqlExample = `query {
  userProjects(username: "your-username") {
    name
    description
    stars
    language
    portfolio {
      featured
      category
      technologies
    }
  }
}`

  const restExample = `GET /api/projects
Authorization: Bearer <your-api-key>

# Filter by featured status
GET /api/projects?featured=true

# Filter by category
GET /api/projects?category=Developer+Tools`

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Visual API Example</h2>
          </div>
          <div className="opacity-0 animate-fade-in animation-delay-200">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose between GraphQL and REST to integrate with your projects
            </p>
          </div>
        </div>

        <div className="opacity-0 animate-fade-in animation-delay-400">
          <Card className="max-w-3xl mx-auto overflow-hidden border-2 border-muted shadow-xl">
            <div>
              <div className="bg-zinc-900 p-3 border-b border-zinc-700 flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-zinc-800 rounded-md">
                  <div className="px-3 py-1 text-xs text-white">GraphQL</div>
                </div>
              </div>
              <CardContent className="p-0">
                <div className="bg-zinc-800 p-4 sm:p-6 font-mono text-xs sm:text-sm text-blue-400 relative group">
                  <pre className="whitespace-pre overflow-x-auto">{graphqlExample}</pre>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        <div className="opacity-0 animate-fade-in animation-delay-600">
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Simple, powerful, and flexible — integrate with your projects in minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
