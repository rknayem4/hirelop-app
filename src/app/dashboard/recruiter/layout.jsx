import { DashboardSidebar } from "@/Components/Dashboard/DashboardSideber";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen gap-5">
      <DashboardSidebar></DashboardSidebar>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
