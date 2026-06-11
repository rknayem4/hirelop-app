import DashboardOverview from "@/Components/Dashboard/DashboardOverview";
import { session } from "@/lib/api";
import {  Eye, FileText, Persons, Thunderbolt } from "@gravity-ui/icons";
import React from "react";

const DashboardPage = () => {
  const dashboardStats = [
    {
      id: 1,
      title: "Total Job Posts",
      value: "148",
      icon: FileText,
    },
    {
      id: 2,
      title: "Total Applicants",
      value: "8,492",
      icon: Persons,
    },
    {
      id: 3,
      title: "Active Jobs",
      value: "52",
      icon: Thunderbolt,
    },
    {
      id: 4,
      title: "Jobs Closed",
      value: "96",
      icon: Eye,
    },
  ];
  const {user} = session
  console.log(user)
  return (
    <div>
      <DashboardOverview dashboardStats={dashboardStats}></DashboardOverview>
      <h2>DashboardPage</h2>
    </div>
  );
};

export default DashboardPage;
