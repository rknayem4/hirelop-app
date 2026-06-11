import SeekerSidebar from "@/Components/Dashboard/Seeker/SeekerSidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export default async function SeekerLayout({ children }) {
  
   const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/signin");
  }

  if (session.user.role !== "seeker") {
    redirect("/unauthorized");
  }
  return (
    <div className="flex min-h-screen">
      <SeekerSidebar />

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}