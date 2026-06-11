import React from "react";
import CompanyCard from "./CompanyCard";
import { session } from "@/lib/api";
import Link from "next/link";
import { getCompanyByUserId } from "@/lib/CompanyApi";

const page = async () => {
  const { user } = session;
  
  const companyData =  await getCompanyByUserId(user.id) 
  console.log(companyData.userId)

  return (
    <>
      {companyData.length <= 0 ? (
        <div className="rounded-2xl border border-default-200 p-8 text-center">
          <h2 className="text-2xl font-bold">No Company Found</h2>

          <p className="mt-2 text-default-500">
            You need to register your company before posting jobs.
          </p>

          <Link
            href="/dashboard/recruiter/company/addcompany"
            className="mt-5 inline-block rounded-xl border px-5 py-3 text-white"
          >
            Register Company
          </Link>
        </div>
      ) : (
        <div>
          {companyData.map((data) => (
            <CompanyCard key={data._id} companyData={data}></CompanyCard>
          ))}
        </div>
      )}
    </>
  );
};

export default page;
