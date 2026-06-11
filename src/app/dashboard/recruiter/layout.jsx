import { DashboardSidebar } from "@/Components/Dashboard/DashboardSideber";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const DashboardLayout =async ({ children }) => {
   const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/unauthorized");
  }

  if (session.user.role !== "recruiter") {
    redirect("/dashboard/seeker");
  }
  return (
    <div className="flex min-h-screen gap-5">
      <DashboardSidebar></DashboardSidebar>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
