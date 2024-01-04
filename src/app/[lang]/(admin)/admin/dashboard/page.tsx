import React from "react";
import { DictionaryType, getDictionary } from "@/locales";
import DashboardPage from "@/components/pages/DashboardPage";

export default async function Dashboard({ params }: { params: any }) {
  const locale = await getDictionary(params.lang as DictionaryType);

  console.log({ locale });

  return <DashboardPage />;
}
