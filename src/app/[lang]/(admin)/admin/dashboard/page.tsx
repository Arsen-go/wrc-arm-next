import React from "react";
import { DictionaryType, getDictionary } from "@/locales";
import AdminTab from "@/components/admin/tabs";
import AdminNavbar from "@/components/admin/navbar";

export default async function Dashboard({ params }: { params: any }) {
  const locale = await getDictionary(params.lang as DictionaryType);

  return (
    <>
      <AdminNavbar locales={locale} params={params} />
      <AdminTab />
    </>
  );
}
