"use client";

import { getCompanyByUserId } from "@/lib/CompanyApi";
import { useEffect, useState } from "react";

export const useCompany = (userId) => {
  const [companyData, setCompanyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCompany = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const data = await getCompanyByUserId(userId);
        setCompanyData(data);
      } catch (error) {
        console.error("Company fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCompany();
  }, [userId]);

  return { companyData, loading };
};