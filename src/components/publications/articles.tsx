"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import ArticleCard from "@/components/article-card";
import { DictionaryType } from "@/locales";

const pageData = {
  title: "Breaking Barriers: Diverse Perspectives in Women's Publications",
  description: `Women's publications are essential platforms amplifying diverse
        female voices and addressing crucial issues. Covering topics ranging
        from women's rights to health and career, these publications create
        a supportive space for sharing stories and insights globally. They
        contribute to breaking stereotypes, promoting intersectionality, and
        empowering women by offering valuable information on health, career
        development, and personal growth. In a rapidly changing world,
        women's publications play a vital role in fostering inclusivity,
        representation, and a sense of unity among women, transcending
        geographical and cultural boundaries.`,
};

interface Props {
  data: any;
  locales: any;
  lang: DictionaryType;
}

export function Articles({ data, locales, lang }: Props) {
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
        {data.map((props: any, idx: number) => (
          <ArticleCard
            key={idx}
            {...props}
            locales
            lang={lang}
            isPublication={true}
          />
        ))}
      </div>
    </section>
  );
}

export default Articles;
