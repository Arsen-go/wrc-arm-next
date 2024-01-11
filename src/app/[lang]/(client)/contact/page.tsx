import ContactForm from "@/components/contact/contact";
import ContactHero from "@/components/contact/contactHero";
import { DictionaryType, getDictionary } from "@/locales";

export default async function ContactUs({ params }: { params: any }) {
  const locale = await getDictionary(params.lang as DictionaryType);

  return (
    <>
      <ContactHero locales={locale} />
      <ContactForm />
    </>
  );
}
