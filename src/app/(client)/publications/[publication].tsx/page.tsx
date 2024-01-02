"use client";

import PublicationHero from "@/components/publications/publicationHero";
import i18n from "@/dictionaries/i18n";
import { I18nextProvider } from "react-i18next";

function Publications() {
  return (
    <I18nextProvider i18n={i18n}>
      <PublicationHero />
    </I18nextProvider>
  );
}

export default Publications;
