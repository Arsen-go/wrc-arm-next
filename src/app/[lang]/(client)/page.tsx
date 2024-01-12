import Hero from "../../../components/hero";
import Posts from "../../../components/posts";
import OurStats from "@/components/our-stats";
import Faq from "@/components/faq";
import ContactUs from "@/components/contact";
import Video from "@/components/video";
import { DictionaryType, getDictionary } from "@/locales";

export default async function Main({ params }: any) {
  const locale = await getDictionary(params.lang as DictionaryType);

  return (
    <>
      <Hero locales={locale} />
      <Posts lang={params.lang} locales={locale} />
      <OurStats locales={locale} />
      <Faq locales={locale} />
      {/* <Video url="https://docs.material-tailwind.com/demo.mp4" /> */}
      <ContactUs locales={locale} />
    </>
  );
}
