"use client";
import DonatePage from "@/components/donate/donate";
import AreaHero from "@/components/priorityAreas/priorityAreasHero";
import { I18nextProvider, useTranslation } from "react-i18next";

function Donate() {
  const { t } = useTranslation();

  return (
    <>
      <AreaHero title={t("donate")} />
      <DonatePage />
    </>
  );
}

export default Donate;
