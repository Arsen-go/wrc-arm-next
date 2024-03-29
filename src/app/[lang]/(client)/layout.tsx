import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin, Navbar, Footer } from "@/components";
import { DictionaryType, getDictionary } from "@/locales";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextJS Tailwind Blog Posts Page",
  description:
    "Download Tailwind Blog Post Page, a free webpage template developed by Creative Tim. Based on Tailwind CSS and Material Tailwind, see the live demo on our site and elevate your blogging experience!",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = await getDictionary(
    ["en", "am"].includes(params.lang)
      ? (params.lang as DictionaryType)
      : ("en" as DictionaryType)
  );

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          <Navbar locales={locale} lang={params.lang} />
          {children}
          <FixedPlugin />
          <Footer locales={locale} />
        </Layout>
      </body>
    </html>
  );
}
