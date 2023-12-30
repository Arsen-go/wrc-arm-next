"use client";
// pages/about.tsx
import { Footer, Navbar } from "@/components";
import { Metadata } from "next";
import AboutHero from "@/components/about/aboutHero";
import AboutContent from "@/components/about/aboutContent";

export const metadata: Metadata = {
  title: "About Us - Your Website Title",
  description: "Brief description of your website or company.",
};

function About() {
  return (
    <>
      <AboutHero />
      <AboutContent />
    </>
  );
}

export default About;
