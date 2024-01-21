"use client";
import { useEffect, useState } from "react";
import HeroPost from "./hero-post";
import MoreStories from "./more-stories";
import { NewsService } from "@/services/api/news";
import { LanguagesEnum } from "@/enums/languages.enum";

type Props = {
  lang: LanguagesEnum;
};

export default function NewsMainPage({ lang }: Props) {
  const [heroPost, setHeroNews] = useState<any>([]);
  const [morePosts, setMoreNews] = useState<any[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await NewsService.getNews(lang);

        setHeroNews(response.data[0]);
        setMoreNews(response.data?.slice(1));
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <div className="container mx-auto px-5">
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.filePath}
              date={heroPost.formattedDate}
              author={""}
              slug={""}
              excerpt={heroPost.text}
              href={"/" + lang + "/" + heroPost.readMoreLink}
            />
          )}
          {morePosts.length > 0 && (
            <MoreStories posts={morePosts} lang={lang} />
          )}
        </div>
      </div>
    </>
  );
}
