"use client";
import ContactForm from "@/components/contact/contact";
import ContactHero from "@/components/contact/contactHero";
import { I18nextProvider } from "react-i18next";

function ContactUs() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}

export default ContactUs;
