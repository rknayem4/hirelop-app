import Image from "next/image";
import Link from "next/link";
import { Globe, Factory, Persons, MapPin, Pencil } from "@gravity-ui/icons";
import { session } from "@/lib/api";
import { Chip } from "@heroui/react";

const CompanyCard = async ({ companyData }) => {
  const {
    companyName,
    website,
    location,
    description,
    logo,
    industry,
    employeeCount,
    userName,
    createdAt,
    userId,
    status,
  } = companyData;

  const { user } = session;
  const isOwner = user?.id === companyData.userId;

  return (
    <div className="overflow-hidden rounded-3xl border border-default-200 bg-content1 shadow-lg">
      {/* Cover */}
      <div className="h-32 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600" />

      {/* Content */}
      <div className="px-8 pb-8">
        {/* Logo */}
        <div className="-mt-14 mb-5">
          <div className="relative h-28 w-28 overflow-hidden rounded-2xl border-4 border-background bg-white shadow-lg">
            <Image src={logo} alt={companyName} fill className="object-cover" />
          </div>
        </div>

        {/* Company Name */}
        <div className="flex max-sm:flex-col justify-between items-center">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">{companyName}</h1>

            <p className="mt-1 text-default-500">Added by {userName}</p>
            <p className="my-2 space-x-3">
              Status :
              <Chip
                size="sm"
                color={
                  companyData.status === "approved"
                    ? "success"
                    : companyData.status === "rejected"
                      ? "danger"
                      : "warning"
                }
                variant="flat"
              >
                {companyData.status}
              </Chip>{" "}
            </p>
          </div>
          {isOwner && (
            <Link
              href={`/dashboard/recruiter/company/edit/${companyData._id}`}
              className="inline-flex items-center gap-2 rounded-xl border px-5 py-2 text-white"
            >
              <Pencil></Pencil> Edit Company
            </Link>
          )}
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-default-200 p-4">
            <div className="mb-2 flex items-center gap-2 text-default-500">
              <Factory className="size-4" />
              Industry
            </div>

            <p className="font-semibold capitalize">{industry}</p>
          </div>

          <div className="rounded-2xl border border-default-200 p-4">
            <div className="mb-2 flex items-center gap-2 text-default-500">
              <Persons className="size-4" />
              Employees
            </div>

            <p className="font-semibold">{employeeCount}</p>
          </div>

          <div className="rounded-2xl border border-default-200 p-4">
            <div className="mb-2 flex items-center gap-2 text-default-500">
              <MapPin className="size-4" />
              Location
            </div>

            <p className="font-semibold">{location}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-semibold">About Company</h3>

          <p className="leading-7 text-default-600">
            {description || "No description available."}
          </p>
        </div>

        {/* Website */}
        <div className="mb-6">
          <h3 className="mb-3 text-lg font-semibold">Website</h3>

          <Link
            href={website}
            target="_blank"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Globe className="size-4" />
            {website}
          </Link>
        </div>

        {/* Footer */}
        <div className="border-t border-default-200 pt-5 text-sm text-default-500">
          Company profile created on {new Date(createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
