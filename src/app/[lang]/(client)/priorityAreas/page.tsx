"use client";
import PriorityAreasContent from "@/components/priorityAreas/contents/main";
import AreaHero from "@/components/priorityAreas/priorityAreasHero";
import { I18nextProvider, useTranslation } from "react-i18next";

function PriorityAreas() {
  const { t } = useTranslation();

  return (
    <>
      <AreaHero title={t("priorityAreas")} />
      <PriorityAreasContent />
    </>
  );
}

export default PriorityAreas;
