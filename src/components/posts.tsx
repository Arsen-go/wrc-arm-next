"use client";

import React, { useEffect, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import BlogPostCard from "@/components/blog-post-card";
import { NewsService } from "@/services/api/news";
import { useRouter } from "next/navigation";

export default function Posts({ lang, locales }: any) {
  const [news, setNews] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await NewsService.getNewsForLandingPage({
          language: lang,
        });

        setNews(response.data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchNews();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <section className="grid min-h-screen place-items-center p-8">
      <Typography
        variant="lead"
        color="gray"
        className="max-w-10xl mb-36 text-center text-gray-500"
        placeholder={undefined}
      >
        {locales.mainPageText}
      </Typography>
      {/* <Typography variant="h2" className="mb-4"  placeholder={undefined}>
        News
      </Typography> */}
      <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3">
        {news.map(({ filePath, text, title, formattedDate, readMoreLink }) => (
          <BlogPostCard
            key={title}
            img={filePath ?? "/"}
            lang={lang}
            readMoreLink={readMoreLink}
            tag={formattedDate}
            title={title}
            desc={text}
          />
        ))}
      </div>
      <Button
        onClick={() => router.push("/" + lang + "/news")}
        variant="text"
        size="lg"
        color="gray"
        className="flex items-center gap-2 mt-24"
        placeholder={undefined}
      >
        <ArrowSmallDownIcon className="h-5 w-5 font-bold text-gray-900" />
        {locales.viewMore}
      </Button>
    </section>
  );
}
