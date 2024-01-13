"use client";
import { useEffect, useState } from "react";
import Container from "@/components/news/container";
import Header from "@/components/news/header";
import PostBody from "@/components/news/post-body";
import PostHeader from "@/components/news/post-header";
import PostTitle from "@/components/news/post-title";
import { NewsService } from "@/services/api/news";
import NewsHero from "@/components/news/newsHero";
import CoverImage from "./cover-image";
import Link from "next/link";
import Image from "next/image";

export default function ReadNews({ params, locales, lang }: any) {
  const [news, setNews] = useState<any>();
  const [newsDate, setNewsDate] = useState<any>();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data: any = await NewsService.getOneNews(params.id);

        if (data.data) {
          setNews(data.data);
          const date = new Date(data.data?.createdAt);
          const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });

          setNewsDate(formattedDate);
        }
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <NewsHero title={news?.title ?? ""} />
      <Container>
        {!news ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-22 p-6 bg-white rounded-lg shadow-md">
              <div className="mb-5 flex justify-center items-center">
                {news?.filePath ? (
                  <Image
                    src={news?.filePath}
                    alt={``}
                    className="h-60 w-1/3"
                    width={500}
                    height={230}
                  />
                ) : (
                  ""
                )}
              </div>
              <PostHeader
                title={news.title}
                coverImage={"/image/blogs/blog-3.png"}
                date={`${locales.publishedDate}  ${
                  news?.createdAt ? newsDate : ""
                }`}
                author={"post.author"}
              />
              <PostBody content={news.text} />
            </article>
          </>
        )}
      </Container>
    </>
  );
}
