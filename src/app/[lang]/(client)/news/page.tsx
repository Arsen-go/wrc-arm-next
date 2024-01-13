import NewsMainPage from "@/components/news/newsPage";
import AreaHero from "@/components/priorityAreas/priorityAreasHero";
import { DictionaryType, getDictionary } from "@/locales";

async function News({ params }: { params: any }) {
  const locale = await getDictionary(params.lang as DictionaryType);

  return (
    <>
      <AreaHero title={locale.news} />
      <NewsMainPage lang={params.lang} />
      {/* <NewsSection data={content} lang={params.lang} /> */}
    </>
  );
}

export default News;
