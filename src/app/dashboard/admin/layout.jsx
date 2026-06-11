import AdminSidebar from "@/Components/Dashboard/Admin/AdminSidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/signin");
  }

  if (session.user.role !== "admin") {
    if (session.user.role === "recruiter") {
      redirect("/dashboard/recruiter");
    }

    redirect("/unauthorized");
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
