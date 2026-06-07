import React from "react";
import DashboardStatCard from "./DashboardStatCard";
const DashboardOverview = ({dashboardStats}) => {
  return (
    <section className="mx-3">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((item) => (
          <DashboardStatCard
            key={item.id}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default DashboardOverview;