"use client";

import { Typography } from "@material-tailwind/react";

function AboutHero({ locale }: { locale: any }) {
  return (
    <div className="relative h-[200px] bg-[url('/backImage.png')] bg-cover bg-no-repeat flex items-center justify-center">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="container relative z-10 text-center">
        <Typography
          variant="h4"
          color="white"
          className="mb-2"
          placeholder={undefined}
        >
          {locale.aboutUs}
        </Typography>
      </div>
    </div>
  );
}

export default AboutHero;
