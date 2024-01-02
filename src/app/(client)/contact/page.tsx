"use client";
import ContactForm from "@/components/contact/contact";
import ContactHero from "@/components/contact/contactHero";
import i18n from "@/dictionaries/i18n";
import { I18nextProvider } from "react-i18next";

function ContactUs() {
  return (
    <I18nextProvider i18n={i18n}>
      <ContactHero />
      <ContactForm />
    </I18nextProvider>
  );
}

export default ContactUs;
