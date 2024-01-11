import ReadNews from "@/components/news/readNews";
import { DictionaryType, getDictionary } from "@/locales";

export default async function Post({ post, morePosts, preview, params }: any) {
  const locale = await getDictionary(params.lang as DictionaryType);

  return (
    <>
      <ReadNews params={params} locales={locale} lang={params.lang} />
    </>
  );
}
