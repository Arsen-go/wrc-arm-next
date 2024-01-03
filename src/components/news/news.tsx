"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import ArticleCard from "@/components/article-card";

const pageData = {
  title: "Current news",
  description: `news`,
};

export function Articles({ data }: { data: any }) {
  return (
    <section className="container mx-auto px-8 py-20">
      <Typography variant="h2" color="blue-gray" placeholder={undefined}>
        {pageData.title}
      </Typography>
      <Typography
        placeholder={undefined}
        variant="lead"
        className="my-2 w-full font-normal !text-gray-500 lg:w-12/12"
      >
        {pageData.description}
      </Typography>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {data.map((props: any, idx: any) => (
          <ArticleCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Articles;
