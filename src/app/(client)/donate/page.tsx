"use client";
import DonatePage from "@/components/donate/donate";
import AreaHero from "@/components/priorityAreas/priorityAreasHero";
import i18n from "@/dictionaries/i18n";
import { I18nextProvider, useTranslation } from "react-i18next";

function Donate() {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <AreaHero title={t("donate")} />
      <DonatePage />
    </I18nextProvider>
  );
}

export default Donate;
