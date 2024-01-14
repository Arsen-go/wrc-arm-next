import AdminAboutPage from "@/components/admin/about/aboutTab";
import AdminNavbar from "@/components/admin/navbar";
import { DictionaryType, getDictionary } from "@/locales";

async function KeyValueForm({ params }: any) {
  const locale = await getDictionary(params.lang as DictionaryType);

  return (
    <>
      <AdminNavbar locales={locale} params={params} />
      <div className="container mx-auto mt-16 p-6 bg-white rounded-md shadow-md text-left">
        <AdminAboutPage />
      </div>
    </>
  );
}

export default KeyValueForm;
