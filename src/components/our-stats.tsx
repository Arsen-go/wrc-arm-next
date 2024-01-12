"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "1,500+",
    k: "highlight.supported",
    title: "Women and girls supported",
  },
  {
    count: "50",
    k: "highlight.implemented",
    title: "Programs Implemented",
  },
  {
    count: "10+",
    k: "highlight.activity",
    title: "Years of activity",
  },
  {
    count: "3",
    k: "highlight.speakers",
    title: "Speakers",
  },
];

export function OurStats({ locales }: any) {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <Typography
          placeholder={undefined}
          variant="h6"
          color="orange"
          className="mb-6 font-medium"
        >
          {locales.ourStats}
        </Typography>
        <Typography
          placeholder={undefined}
          className="text-5xl font-bold leading-tight lg:w-3/4"
          color="blue-gray"
        >
          {locales.highlights}
        </Typography>
        <Typography
          placeholder={undefined}
          variant="lead"
          className="mt-3 w-full !text-gray-500 lg:w-9/12"
        >
          {locales["highlight.content"]}
        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} locales={locales} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
