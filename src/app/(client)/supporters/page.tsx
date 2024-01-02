"use client";
import TimelineSupporters from "@/components/supporters/suporters";
import SupportersHero from "@/components/supporters/supportersHero";
import i18n from "@/dictionaries/i18n";
import { I18nextProvider } from "react-i18next";

function PriorityAreas() {
  return (
    <I18nextProvider i18n={i18n}>
      <SupportersHero />
      <TimelineSupporters />
    </I18nextProvider>
  );
}

export default PriorityAreas;
