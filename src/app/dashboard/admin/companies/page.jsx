import CompaniesTable from "@/Components/Dashboard/Admin/CompaniesTable";
import { getAllCompanies } from "@/lib/admin";
import { Tabs } from "@heroui/react";

const CompaniesPage = async () => {
  const companiesData = await getAllCompanies();

  const pending = companiesData.filter(
    (company) => company.status === "pending",
  );

  const approved = companiesData.filter(
    (company) => company.status === "approved",
  );

  const rejected = companiesData.filter(
    (company) => company.status === "rejected",
  );

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Companies Management</h1>
      <Tabs className="w-full ">
        <Tabs.ListContainer>
          <Tabs.List aria-label="Options">
            <Tabs.Tab id="all">
              All Companies
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id="pending">
              Pending Companies
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id="reject">
              Reject Company
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id="approved">
              Approved Company
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
        <Tabs.Panel className="pt-4" id="all">
          <CompaniesTable companies={companiesData} />
        </Tabs.Panel>

        <Tabs.Panel className="pt-4" id="pending">
          <CompaniesTable companies={pending} />
        </Tabs.Panel>

        <Tabs.Panel className="pt-4" id="reject">
          <CompaniesTable companies={rejected} />
        </Tabs.Panel>

        <Tabs.Panel className="pt-4" id="approved">
          <CompaniesTable companies={approved} />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default CompaniesPage;
