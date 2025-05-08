import { LoginForm } from "@/components/admin/login-form"
import { getAdmin } from "@/lib/admin-auth"
import { redirect } from "next/navigation"

export const metadata = {
  title: "Admin Login | GitSink",
  description: "Secure login for GitSink administrators",
}

export default async function AdminLoginPage() {
  // Check if already logged in
  const admin = await getAdmin()

  if (admin) {
    redirect("/admin/dashboard")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-muted/50">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold mb-2">GitSink Admin</h1>
        <p className="text-muted-foreground">Secure access to administration tools</p>
      </div>

      <LoginForm />
    </div>
  )
}
