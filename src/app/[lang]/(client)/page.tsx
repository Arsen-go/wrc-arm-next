"use client";

import Hero from "../../../components/hero";
import Posts from "../../../components/posts";
import OurStats from "@/components/our-stats";
import Faq from "@/components/faq";
import ContactUs from "@/components/contact";
import Video from "@/components/video";
import { I18nextProvider } from "react-i18next";

export default function Campaign() {
  return (
    <>
      <Hero />
      <Posts />
      <OurStats />
      <Faq />
      <Video url="https://docs.material-tailwind.com/demo.mp4" />
      <ContactUs />
    </>
  );
}
