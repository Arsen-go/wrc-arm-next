import TimelineSupporters from "@/components/supporters/suporters";
import SupportersHero from "@/components/supporters/supportersHero";
import { DictionaryType, getDictionary } from "@/locales";

export default async function PriorityAreas({ params }: { params: any }) {
  const locale = await getDictionary(params.lang as DictionaryType);

  return (
    <>
      <SupportersHero locales={locale} />
      <TimelineSupporters />
    </>
  );
}
