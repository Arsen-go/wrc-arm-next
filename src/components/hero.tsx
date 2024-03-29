/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
"use client";

import { Typography } from "@material-tailwind/react";

function Hero({ locales }: any) {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/women.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography
            variant="h3"
            color="white"
            className="mb-2"
            placeholder={undefined}
          >
            {locales.heroText1}
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="lg:max-w-3xl"
            placeholder={undefined}
          >
            {/* Women’s Rights in Armenia */}
            {locales.heroText2}
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
            placeholder={undefined}
          >
            {locales.heroText3}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Hero;
