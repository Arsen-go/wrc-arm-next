"use client";

import Articles from "@/components/publications/articles";
import { I18nextProvider } from "react-i18next";
import i18n from "@/dictionaries/i18n";

function News() {
  return (
    <I18nextProvider i18n={i18n}>
      <Articles data={[]} />
    </I18nextProvider>
  );
}

export default News;
