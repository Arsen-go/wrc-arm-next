import DonatePage from "@/components/donate/donate";
import AreaHero from "@/components/priorityAreas/priorityAreasHero";
import { DictionaryType, getDictionary } from "@/locales";

export default async function Donate({ params }: { params: any }) {
  const locales = await getDictionary(params.lang as DictionaryType);

  return (
    <>
      <AreaHero title={locales.donate} />
      <DonatePage locales={locales} />
    </>
  );
}
