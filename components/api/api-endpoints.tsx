import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function ApiEndpoints() {
  const endpoints = [
    {
      path: "/projects",
      method: "GET",
      type: "REST",
      description: "List all synced GitHub projects with pagination support",
    },
    {
      path: "/sync",
      method: "POST",
      type: "REST",
      description: "Trigger a manual sync of your GitHub repositories",
    },
    {
      path: "/projects/:id",
      method: "GET",
      type: "REST",
      description: "Get detailed metadata for a specific project",
    },
    {
      path: "query { projects }",
      method: "POST",
      type: "GraphQL",
      description: "GraphQL query to fetch all projects with custom fields",
    },
    {
      path: "mutation { sync }",
      method: "POST",
      type: "GraphQL",
      description: "GraphQL mutation to trigger a repository sync",
    },
  ]

  return (
    <section id="endpoints" className="scroll-mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Core Endpoints</h2>
        <a href="#endpoints" className="text-sm text-muted-foreground hover:text-primary">
          #
        </a>
      </div>
      <p className="mt-4 text-lg text-muted-foreground">
        Explore the main API endpoints available for your integration needs.
      </p>

      <div className="mt-6 rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[30%]">Endpoint</TableHead>
              <TableHead className="w-[15%]">Method</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {endpoints.map((endpoint, index) => (
              <TableRow key={index}>
                <TableCell className="font-mono text-sm">{endpoint.path}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {endpoint.method === "GET" && (
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-500">
                        GET
                      </Badge>
                    )}
                    {endpoint.method === "POST" && (
                      <Badge variant="outline" className="bg-green-500/10 text-green-500">
                        POST
                      </Badge>
                    )}
                    <Badge variant="outline" className="bg-muted/50">
                      {endpoint.type}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>{endpoint.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
