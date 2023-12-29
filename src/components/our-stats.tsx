"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "1,500+",
    title: "Women and girls supported",
  },
  {
    count: "50",
    title: "Programs Implemented",
  },
  {
    count: "10+",
    title: "Years of activity",
  },
  {
    count: "3",
    title: "Speakers",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <Typography placeholder={undefined} variant="h6" color="orange" className="mb-6 font-medium">
          Our Stats
        </Typography>
        <Typography placeholder={undefined}
          className="text-5xl font-bold leading-tight lg:w-3/4"
          color="blue-gray"
        >
          Highlights
        </Typography>
        <Typography placeholder={undefined}
          variant="lead"
          className="mt-3 w-full !text-gray-500 lg:w-9/12"
        >
          At WRC, we&apos;re proud of our commitment to women&apos;s rights. Achieving workplace equality, supporting wellness, and advocating for education and safety, we stand firm for progress. Together, we build a future where every woman&apos;s potential is realized
        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
