"use client";
import PriorityAreasContent from "@/components/priorityAreas/contents/main";
import AreaHero from "@/components/priorityAreas/priorityAreasHero";
import i18n from "@/dictionaries/i18n";
import { I18nextProvider, useTranslation } from "react-i18next";

function PriorityAreas() {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <AreaHero title={t("priorityAreas")} />
      <PriorityAreasContent />
    </I18nextProvider>
  );
}

export default PriorityAreas;
