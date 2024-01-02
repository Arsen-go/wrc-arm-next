"use client";
import PriorityAreasContent from "@/components/priorityAreas/contents/main";
import PriorityAreaHero from "@/components/priorityAreas/priorityAreasHero";
import i18n from "@/dictionaries/i18n";
import { I18nextProvider } from "react-i18next";

function PriorityAreas() {
  return (
    <I18nextProvider i18n={i18n}>
      <PriorityAreaHero title={"Priority Areas"} />
      <PriorityAreasContent />
    </I18nextProvider>
  );
}

export default PriorityAreas;
