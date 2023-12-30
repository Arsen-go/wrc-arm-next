// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "../../components/hero";
import Posts from "../../components/posts";
import Articles from "../../components/articles";
import OurStats from "@/components/our-stats";
import Faq from "@/components/faq";
import ContactUs from "@/components/contact";
import Video from "@/components/video";

export default function Campaign() {
  return (
    <>
      <Hero />
      <Posts />
      <OurStats />
      {/* <Articles /> */}
      <Faq />
      <Video url="https://docs.material-tailwind.com/demo.mp4" />
      <ContactUs />
    </>
  );
}
