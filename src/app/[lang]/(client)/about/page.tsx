import AboutHero from "@/components/about/aboutHero";
import AboutContent from "@/components/about/aboutContent";
import { DictionaryType, getDictionary } from "@/locales";

export default async function About({ params }: { params: any }) {
  const locale = await getDictionary(params.lang as DictionaryType);

  return (
    <>
      <AboutHero locale={locale} />
      <AboutContent language={params.lang} locales={locale} />
    </>
  );
}
