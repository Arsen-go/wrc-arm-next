import React from "react";
import { DictionaryType, getDictionary } from "@/locales";
import AdminTab from "@/components/admin/tabs";

export default async function Dashboard({ params }: { params: any }) {
  const locale = await getDictionary(params.lang as DictionaryType);

  return (
    <>
      <AdminTab />
    </>
  );
}
