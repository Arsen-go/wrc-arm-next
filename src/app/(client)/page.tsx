"use client";

import Hero from "../../components/hero";
import Posts from "../../components/posts";
import OurStats from "@/components/our-stats";
import Faq from "@/components/faq";
import ContactUs from "@/components/contact";
import Video from "@/components/video";
import { I18nextProvider } from "react-i18next";
import i18n from "@/dictionaries/i18n";

export default function Campaign() {
  return (
    <I18nextProvider i18n={i18n}>
      <Hero />
      <Posts />
      <OurStats />
      <Faq />
      <Video url="https://docs.material-tailwind.com/demo.mp4" />
      <ContactUs />
    </I18nextProvider>
  );
}
