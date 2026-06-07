import React from "react";

const DashboardStatCard = ({
  title,
  value,
  icon: Icon,
}) => {
  return (
    <div className="rounded-2xl border border-default-200 bg-content1 p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-default-100">
        <Icon className="h-6 w-6 text-default-600" />
      </div>

      <p className="text-sm text-default-500">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold">
        {value}
      </h3>
    </div>
  );
};

export default DashboardStatCard;