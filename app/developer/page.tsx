import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gitsink Developer Portal",
  description: "Documentation for the Gitsink API - Access synced GitHub data and integrate with your projects",
}

export default function DeveloperPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Hero Section */}
        <section className="relative py-16">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Gitsink Developer Portal</h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Access synced GitHub data, enrich metadata, and integrate projects using our REST and GraphQL APIs.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/login"
                className="group inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto"
              >
                Get API Key
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
              <Link
                href="/developer/docs"
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto"
              >
                View Full Docs
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="mt-16 space-y-16 md:space-y-24">
          {/* Quickstart Section */}
          <section id="quickstart" className="scroll-mt-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Quickstart</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get started quickly with the Gitsink API using these examples.
            </p>

            <div className="mt-6 overflow-hidden rounded-lg border">
              <div className="bg-muted/50 px-4 py-3">
                <div className="text-lg font-medium">Fetch Projects</div>
                <div className="text-sm text-muted-foreground">Retrieve all your synced GitHub projects</div>
              </div>
              <div className="p-0">
                <div className="relative">
                  <pre className="overflow-x-auto rounded-b-lg bg-black p-4 text-sm text-white">
                    <code>{`curl https://api.gitsink.dev/v1/projects \\
  -H "Authorization: Bearer YOUR_API_KEY"`}</code>
                  </pre>
                </div>
                <div className="border-t bg-muted/20 p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Replace <code className="rounded bg-muted px-1 py-0.5">YOUR_API_KEY</code>{" "}
                    with your actual API key from the dashboard.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Endpoints Section */}
          <section id="endpoints" className="scroll-mt-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Core Endpoints</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore the main API endpoints available for your integration needs.
            </p>

            <div className="mt-6 overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg border">
                  <table className="min-w-full divide-y divide-border">
                    <thead>
                      <tr className="bg-muted/50">
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-medium text-muted-foreground w-[30%] md:w-[25%]"
                        >
                          Endpoint
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-medium text-muted-foreground w-[20%] md:w-[15%]"
                        >
                          Method
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-medium text-muted-foreground">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {/* REST Endpoints */}
                      <tr>
                        <td className="whitespace-nowrap px-4 py-3 font-mono text-sm">/projects</td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-blue-500/10 text-blue-500">
                            GET
                          </span>
                          <span className="ml-2 inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-muted/50">
                            REST
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">List all synced GitHub projects with pagination support</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-4 py-3 font-mono text-sm">/sync</td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-green-500/10 text-green-500">
                            POST
                          </span>
                          <span className="ml-2 inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-muted/50">
                            REST
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">Trigger a manual sync of your GitHub repositories</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-4 py-3 font-mono text-sm">/projects/:id</td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-blue-500/10 text-blue-500">
                            GET
                          </span>
                          <span className="ml-2 inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-muted/50">
                            REST
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">Get detailed metadata for a specific project</td>
                      </tr>

                      {/* GraphQL Endpoints */}
                      <tr>
                        <td className="whitespace-nowrap px-4 py-3 font-mono text-sm">
                          query {"{"} projects {"}"}
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-purple-500/10 text-purple-500">
                            QUERY
                          </span>
                          <span className="ml-2 inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-muted/50">
                            GraphQL
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">GraphQL: fetch all projects with customizable fields</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-4 py-3 font-mono text-sm">
                          mutation {"{"} sync {"}"}
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-orange-500/10 text-orange-500">
                            MUTATION
                          </span>
                          <span className="ml-2 inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-muted/50">
                            GraphQL
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">GraphQL: trigger a sync operation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Authentication Section */}
          <section id="authentication" className="scroll-mt-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Authentication</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Secure your API requests using API keys for authentication.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold">API Key Format</h3>
                <p className="mt-2 text-muted-foreground">
                  Gitsink API keys follow a specific format for security and traceability:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 h-5 w-5 text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                    <span>
                      <strong>Format:</strong> <code className="rounded bg-muted px-1 py-0.5">gsk_live_xxxxxxxxxx</code>{" "}
                      for production or <code className="rounded bg-muted px-1 py-0.5">gsk_test_xxxxxxxxxx</code> for
                      testing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 h-5 w-5 text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                    <span>
                      <strong>Security:</strong> Store your API keys securely and never expose them in client-side code
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 h-5 w-5 text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                    <span>
                      <strong>Rotation:</strong> You can rotate your API keys at any time from the dashboard
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border">
                <div className="bg-muted/50 px-6 py-4">
                  <h4 className="text-lg font-medium">Authentication Header</h4>
                  <p className="text-sm text-muted-foreground">Include this header in all API requests</p>
                </div>
                <div className="p-0">
                  <div className="relative">
                    <pre className="overflow-x-auto rounded-b-lg bg-black p-4 text-sm text-white">
                      <code>Authorization: Bearer YOUR_API_KEY</code>
                    </pre>
                  </div>
                  <div className="border-t bg-muted/20 p-4">
                    <p className="text-sm text-muted-foreground">
                      All API requests must include your API key in the Authorization header as a Bearer token.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sandbox Section */}
          <section id="sandbox" className="scroll-mt-20">
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="flex flex-col items-center justify-between gap-6 p-6 md:p-8 text-center sm:flex-row sm:text-left">
                <div>
                  <h2 className="text-xl font-bold sm:text-2xl">Try it live in our API sandbox</h2>
                  <p className="mt-2 text-muted-foreground">
                    Test API calls, explore responses, and build your integration in our interactive sandbox.
                  </p>
                </div>
                <Link
                  href="/developer/sandbox"
                  className="group inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shrink-0"
                >
                  Launch Sandbox
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
