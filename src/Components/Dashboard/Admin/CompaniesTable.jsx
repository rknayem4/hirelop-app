"use client";

import { useMemo, useState } from "react";
import { Table, Button, Chip } from "@heroui/react";

function SortableColumnHeader({ children, sortDirection }) {
  return <span className="flex items-center justify-between">{children}</span>;
}

export default function CompaniesTable({ companies }) {
  const [companyList, setCompanyList] = useState(companies);

  const [updatingId, setUpdatingId] = useState(null);

  const updateCompanyStatus = async (companyId, status) => {
    try {
      setUpdatingId(companyId);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/companies/${companyId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        },
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        setCompanyList((prev) =>
          prev.map((company) =>
            company._id === companyId
              ? {
                  ...company,
                  status,
                }
              : company,
          ),
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setUpdatingId(null);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "success";

      case "rejected":
        return "danger";

      default:
        return "warning";
    }
  };
  if (!companies?.length) {
    return (
      <div className="rounded-xl border p-10 text-center">
        <h2 className="text-lg font-semibold">No companies found</h2>
      </div>
    );
  }
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content
          aria-label="Companies Table"
          className="min-w-[1000px]"
        >
          <Table.Header>
            <Table.Column id="companyName" isRowHeader allowsSorting>
              {({ sortDirection }) => (
                <SortableColumnHeader sortDirection={sortDirection}>
                  Company
                </SortableColumnHeader>
              )}
            </Table.Column>

            <Table.Column id="industry" allowsSorting>
              Industry
            </Table.Column>

            <Table.Column>Employee Count</Table.Column>

            <Table.Column>Apply Count</Table.Column>

            <Table.Column>Status</Table.Column>

            <Table.Column>Actions</Table.Column>
          </Table.Header>

          <Table.Body>
            {companyList.map((company) => (
              <Table.Row key={company._id}>
                <Table.Cell>
                  <div className="flex items-center gap-3">
                    <img
                      src={company.logo}
                      alt={company.companyName}
                      className="h-10 w-10 rounded-lg object-cover"
                    />

                    <div>
                      <p className="font-medium">{company.companyName}</p>

                      <p className="text-xs text-default-500">
                        {company.website}
                      </p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell>{company.industry}</Table.Cell>

                <Table.Cell>{company.employeeCount}</Table.Cell>

                <Table.Cell>0</Table.Cell>

                <Table.Cell>
                  <Chip
                    size="sm"
                    color={getStatusColor(company.status)}
                    variant="flat"
                  >
                    {company.status}
                  </Chip>
                </Table.Cell>

                <Table.Cell>
                  <div className="flex gap-2">
                    {company.status !== "approved" && (
                      <Button
                        size="sm"
                        isLoading={updatingId === company._id}
                        className="bg-green-700/10 text-green-700"
                        onPress={() =>
                          updateCompanyStatus(company._id, "approved")
                        }
                      >
                        Approve
                      </Button>
                    )}

                    {company.status !== "rejected" && (
                      <Button
                        size="sm"
                        isLoading={updatingId === company._id}
                        className="bg-red-700/10 text-red-700"
                        onPress={() =>
                          updateCompanyStatus(company._id, "rejected")
                        }
                      >
                        Reject
                      </Button>
                    )}
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}
