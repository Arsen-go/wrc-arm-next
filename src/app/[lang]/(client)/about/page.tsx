"use client";
// pages/about.tsx
import AboutHero from "@/components/about/aboutHero";
import AboutContent from "@/components/about/aboutContent";
import { I18nextProvider } from "react-i18next";

function About() {
  return (
    <>
      <AboutHero />
      <AboutContent />
    </>
  );
}

export default About;
