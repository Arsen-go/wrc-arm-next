"use client";
// pages/about.tsx
import AboutHero from "@/components/about/aboutHero";
import AboutContent from "@/components/about/aboutContent";
import { I18nextProvider } from "react-i18next";
import i18n from "@/dictionaries/i18n";

function About() {
  return (
    <I18nextProvider i18n={i18n}>
      <AboutHero />
      <AboutContent />
    </I18nextProvider>
  );
}

export default About;
