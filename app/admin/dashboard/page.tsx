import { requireAdmin } from "@/lib/admin-auth"
import { Button } from "@/components/ui/button"
import { logoutAdmin } from "@/app/actions/admin-auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Admin Dashboard | GitSink",
  description: "GitSink administration dashboard",
}

export default async function AdminDashboardPage() {
  const admin = await requireAdmin()

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {admin.full_name}</p>
        </div>
        <form action={logoutAdmin}>
          <Button variant="outline" type="submit">
            Logout
          </Button>
        </form>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>Manage user accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Total users: 0</p>
            <Button className="mt-4" variant="outline" size="sm">
              View Users
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Access Tokens</CardTitle>
            <CardDescription>Manage API access tokens</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Active tokens: 0</p>
            <Button className="mt-4" variant="outline" size="sm">
              Manage Tokens
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>View system health and metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Status: Operational</p>
            <Button className="mt-4" variant="outline" size="sm">
              View Status
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
