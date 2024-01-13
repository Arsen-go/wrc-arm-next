"use client";
import { useEffect, useState } from "react";
import HeroPost from "./hero-post";
import Intro from "./intro";
import MoreStories from "./more-stories";
import { NewsService } from "@/services/api/news";

type Props = {
  allPosts: any[];
};

export default function NewsMainPage({ lang }: any) {
  const [news, setNews] = useState([]);
  const [heroPost, setHeroNews] = useState<any>([]);
  const [morePosts, setMoreNews] = useState<any[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await NewsService.getNews();
        console.log("🚀 ~ fetchNews ~ response:", response);

        setNews(response.data);

        setHeroNews(response.data[0]);
        setMoreNews(response.data.slice(1));
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchNews();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <>
      <div>
        <div className="container mx-auto px-5">
          <Intro />
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
