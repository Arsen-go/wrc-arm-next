"use client";
// pages/about.tsx
import { Footer, Navbar } from "@/components";
import PriorityAreasContent from "@/components/priorityAreas/contents/main";
import PriorityAreaHero from "@/components/priorityAreas/priorityAreasHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Your Website Title",
  description: "Brief description of your website or company.",
};

function PriorityAreas() {
  return (
    <>
      <PriorityAreaHero title={"Priority Areas"} />
      <PriorityAreasContent />
    </>
  );
}

export default PriorityAreas;
