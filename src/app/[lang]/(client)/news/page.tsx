import NewsSection from "@/components/news/news";
import AreaHero from "@/components/priorityAreas/priorityAreasHero";
import { DictionaryType, getDictionary } from "@/locales";

const content = [
  {
    img: "/image/blogs/blog-1.png",
    title: "Needs Assessment of Forcibly Displaced Women from Artsakh",
    desc: "Following the forced displacement of Artsakh Armenians in September 2023, approximately 100,000 citizens were relocated in Armenia. The following is a brief needs assessment of forcibly displaced women from Nagorno-Karabakh (Artsakh), residing in shelters.",
    date: "December 2023",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/12/Needs-assessment-of-NK-population.pdf",
  },
  {
    img: "/image/blogs/blog-2.png",
    title: "Natalist Policies in Armenia",
    desc: "The following is the English summary of a policy brief prepared by the Women’s Resource Center NGO. This policy brief is intended for public policy and legislation makers, advocacy organizations and the general public. It was developed on the basis of the real stories of women about sexual harassment in the workplace and a public survey.",
    date: "November 2023",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/11/Pronatalism-brief-English.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Updates On The Nagorno-Karabakh Humanitarian Catastrophe",
    desc: "On September 19, 2023, Azerbaijan launched a large-scale military offensive against Nagorno-Karabakh. The following is an update on the situation from the point of view of women’s rights.",
    date: "October 2023",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/10/Updates-on-the-Nagorno-Karabakh-humanitarian-catastrophe-.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Updates On The Nagorno-Karabakh Humanitarian Catastrophe",
    desc: "On September 19, 2023, Azerbaijan launched a large-scale military offensive against Nagorno-Karabakh. The following is an update on the situation from the point of view of women’s rights.",
    date: "October 2023",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/10/Updates-on-the-Nagorno-Karabakh-humanitarian-catastrophe-.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Updates On The Nagorno-Karabakh Humanitarian Catastrophe",
    desc: "On September 19, 2023, Azerbaijan launched a large-scale military offensive against Nagorno-Karabakh. The following is an update on the situation from the point of view of women’s rights.",
    date: "October 2023",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2023/10/Updates-on-the-Nagorno-Karabakh-humanitarian-catastrophe-.pdf",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "3rd cycle UPR Final Report Armenia",
    desc: "Armenia continues to lack comprehensive protections for victims of domestic violence and trainings for law enforcement and judges. Further, women’s human rights defenders in Armenia are subjected to personal attacks, infringing on their ability to assist women throughout the country.",
    date: "January 2020",
    readMoreLink:
      "https://womenofarmenia.org/wp-content/uploads/2019/08/Armenia-3rd-cycle-UPR-Final.pdf",
  },
];

async function News({ params }: { params: any }) {
  const locale = await getDictionary(params.lang as DictionaryType);

  return (
    <>
      <AreaHero title={locale.news} />
      <NewsSection data={content} />
    </>
  );
}

export default News;
