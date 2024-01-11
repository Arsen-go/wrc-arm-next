import Articles from "@/components/publications/articles";
import PublicationHero from "@/components/publications/publicationHero";
import { DictionaryType, getDictionary } from "@/locales";

const content = [
  {
    img: "/image/blogs/blog-1.png",
    title: "Needs Assessment of Forcibly Displaced Women from Artsakh",
    text: "Following the forced displacement of Artsakh Armenians in September 2023, approximately 100,000 citizens were relocated in Armenia. The following is a brief needs assessment of forcibly displaced women from Nagorno-Karabakh (Artsakh), residing in shelters.",
    date: "December 2023",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/12/Needs-assessment-of-NK-population.pdf",
  },
  {
    img: "/image/blogs/blog-2.png",
    title: "Natalist Policies in Armenia",
    text: "The following is the English summary of a policy brief prepared by the Women’s Resource Center NGO. This policy brief is intended for public policy and legislation makers, advocacy organizations and the general public. It was developed on the basis of the real stories of women about sexual harassment in the workplace and a public survey.",
    date: "November 2023",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/11/Pronatalism-brief-English.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Updates On The Nagorno-Karabakh Humanitarian Catastrophe",
    text: "On September 19, 2023, Azerbaijan launched a large-scale military offensive against Nagorno-Karabakh. The following is an update on the situation from the point of view of women’s rights.",
    date: "October 2023",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/10/Updates-on-the-Nagorno-Karabakh-humanitarian-catastrophe-.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "WRC Annual Report 2022",
    text: "This is a comprehensive report of the WRC’s activities in 2022. All the activities, projects, initiatives are presented by teams.",
    date: "Beginning of 2023",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/04/WRC-Annual-Report-2022_eng.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title:
      "Universal Periodic Review: Joint Submission for the Fourth Periodic Review of Azerbaijan",
    text: "This joint report is submitted to the UN Human Rights Council by the Coalition for Justice and Human Rights consisting of Protection of Rights without Borders NGO, Democracy Development Foundation, Transparency International Anti-Corruption Center, Helsinki Citizens’ Assembly -Vanadzor, Women’s Resource Center Armenia, Journalists’ Club “Asparez”.",
    date: "April 2023",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/04/Final_Coalition-for-Justice-and-Human-Rights-1.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "“Women, Peace and Security” Agenda in Armenia. Factsheet",
    text: "This factsheet is prepared by the Advocacy and Policy Development team of the Women Resource Center NGO. It is intended for Government agencies and Civil Society representatives who carry out advocacy activities in this field. The factsheet is based on a rights-based and evidence-based approach.",
    date: "2023",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/04/WPS-Factsheet.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Right to Abortion. Factsheet",
    text: "This factsheet is prepared by the Advocacy and Policy Development team of the Women Resource Center NGO. It is intended for Government agencies and Civil Society representatives who carry out advocacy activities in this field. The factsheet is based on a rights-based and evidence-based approach.",
    date: "2023",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/04/Abortion-factsheet.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Workplace Sexual Harassment in Armenia. Factsheet",
    text: "This factsheet is prepared by the Advocacy and Policy Development team of the Women Resource Center NGO. It is intended for Government agencies and Civil Society representatives who carry out advocacy activities in this field. The factsheet is based on a rights-based and evidence-based approach.",
    date: "2023",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/04/WSH-Factsheet.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Contraceptive Policy",
    text: "This is a short annotation of Armenian document on Contraceptive access among women and state obligations to provide available, accessible and affordable contraceptives to different groups of women. The aim of this policy paper is to present international legal norms, standards, and experience regarding the right to the availability of contraceptive methods.",
    date: "2022",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/02/Contraceptive-policy.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Policy Brief on the Right to Abortion",
    text: "The purpose of this policy brief is to present the international legal regulations on the right to artificial termination of pregnancy (abortion), the existing international standards and practices, as well as to elaborate counter-arguments for initiatives calling for restricting access to the right to abortion.",
    date: "2021",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/02/Policy-Brief_Abortion-right.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Research on Artsakh war and women’s rights",
    text: "This is a short annotation of the research on Impact of 2020 Artsakh War and the Post-War Situation on Women’s Basic Rights. This report presents the impact of the war unleashed by Azerbaijan between September and November of 2020 on the women living and/or displaced from Artsakh.",
    date: "2021",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2021/06/Artsakh-war-and-womens-rights.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "COVID19 CEE ASTRA",
    text: "In the publication, we gathered insights from our members from 16 countries of the region, with a focus put on seven aspects of SRHR.",
    date: "2021",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2021/06/Artsakh-war-and-womens-rights.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "UPR Armenia Report",
    text: "This joint UPR stakeholder report (2020) was developed by the “Advocates for Reproductive Health and Rights” network initiated by the Women’s Resource Center.",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2019/07/UPR-Armenia-Report.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "3rd cycle UPR Final Report Armenia",
    text: "Armenia continues to lack comprehensive protections for victims of domestic violence and trainings for law enforcement and judges. Further, women’s human rights defenders in Armenia are subjected to personal attacks, infringing on their ability to assist women throughout the country.",
    date: "January 2020",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2019/08/Armenia-3rd-cycle-UPR-Final.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "COVID-19 Survey report",
    text: "The on-line survey in a form of formative assessment was conducted among the women to reveal their experiences in sexual and reproductive health services during the pandemic. The main tool of the survey was a standardized questionnaire.",
    date: "2020",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/02/COVID-19-survey-report.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Attitudes Toward Women’s Organizations In Armenia",
    text: "In this small-scale quantitative study, a group of researchers attempted to understand what people think of women’s organizations in Armenia, and what the roles and missions are of these organizations in politics and everyday life.",
    date: "2019",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2019/07/Attitudes-Toward-Women%E2%80%99s-Organizations-In-Armenia-fin.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Reproductive rights report",
    text: "The report has been developed considering the diverse views and experiences of women from rural areas, with disabilities, LBT women, Yezidis and women that are HIV positive.",
    date: "2019",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2019/12/Reproductive-rights_report_.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Who is afraid of gender equality",
    text: "Data for this report (2019) was collected via an online questionnaire was then analyzed through quantitative and qualitative measures and related to the recent literature in the field.",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2019/07/Who-is-afraid-of-gender-equality-3.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Morality and Sexuality: Discourses and Practices",
    text: "The aim of this study (2019) was to examine the key perceptions of morality in Armenian society today, their effect on behavior, from both individual and societal points of view, and reciprocities with the issue of sexuality.",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2020/01/Aghasi-Tadevosyan-morality-and-sexuality.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Views of the Armenian Reproductive rights legislation",
    text: "In this study we consider the right to reproductive health as a fundamental human right. In this regard, we will discuss issues related to safe motherhood and childbirth, abortion, surrogate motherhood and reproductive health strategy and the 2016-2020 action plans discussing the right to reproductive health as a fundamental human right.",
    date: "2018",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/02/Views-of-the-Armenian-Reproductive-rights-legislation.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title:
      "The gynecologists’ attitudes towards abortion procedure in different medical institutions.: research",
    text: "This is a short annotation of Armenian research on the gynecologists’ attitudes towards abortion procedure in different medical institutions. The main purpose of this research is to study the processes of abortion in Armenia in different medical institutions. The interviews have been conducted in Yerevan and Armavir, Gegharkunik, Lori, Shirak regions.",
    date: "2018",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/02/Gynecologists-attitudes-on-abortion.pdfREAD MORE",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Gender Discrimination Army, Media, Politics, Marriage, Education",
    text: "In this collection of articles (2016) various manifestations of gender discrimination on different levels and in different areas in Armenian society is presented.",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2019/07/Boll_articles_landscape_ENG.pdf",
  },
];

export default async function Publications({ params }: any) {
  const locale = await getDictionary(params.lang as DictionaryType);

  return (
    <>
      <PublicationHero />
      <Articles data={content} locales={locale} lang={params.lang} />
    </>
  );
}
