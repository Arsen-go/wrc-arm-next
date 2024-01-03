"use client";

import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

function PublicationHero() {
  const { t } = useTranslation();

  return (
    <div className="relative h-[200px] bg-[url('/image/women.jpg')] bg-cover bg-no-repeat flex items-center justify-center">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="container relative z-10 text-center">
        <Typography
          variant="h4" // Adjusted to a smaller heading size
          color="white"
          className="mb-2"
          placeholder={undefined}
        >
          {t("navbar.publications")}
        </Typography>
      </div>
    </div>
  );
}

export default PublicationHero;
