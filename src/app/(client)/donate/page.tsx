"use client";
import DonatePage from "@/components/donate/donate";
import PriorityAreasContent from "@/components/priorityAreas/contents/main";
import PriorityAreaHero from "@/components/priorityAreas/priorityAreasHero";
import i18n from "@/dictionaries/i18n";
import { I18nextProvider } from "react-i18next";

function Donate() {
  return (
    <I18nextProvider i18n={i18n}>
      <PriorityAreaHero title={"Donate"} />
      <DonatePage />
    </I18nextProvider>
  );
}

export default Donate;
