"use client";

import React from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import BlogPostCard from "@/components/blog-post-card";


const POSTS = [
  {
    img: `/image/blogs/blog2.svg`,
    tag: "Enterprise",
    title: "The key new features and changes in Tailwind CSS",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "10 September 2022",
    author: {
      img: `/image/avatar1.jpg`,
      name: "Ryan Samuel",
    },
  },
  {
    img: `/image/blogs/blog6.svg`,
    tag: "Startups",
    title: "Lyft launching cross-platform service this week",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "12 September 2022",
    author: {
      img: `/image/blogs/blog2.svg`,
      name: "Nora Hazel",
    },
  },
  {
    img: `/image/blogs/blog3.svg`,
    tag: "Trending",
    title: "6 insights into the French Fashion landscape",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "16 September 2022",
    author: {
      img: `/image/avatar2.jpg`,
      name: "Otto Gonzalez",
    },
  },
  // {
  //   img: `/image/blogs/blog4.svg`,
  //   tag: "Lifestyle",
  //   title: "Autodesk looks to future of 3D printing with Project",
  //   desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
  //   date: "18 September 2022",
  //   author: {
  //     img: `/image/avatar3.jpg`,
  //     name: "Ryan Samuel",
  //   },
  // },
  // {
  //   img: `/image/blogs/blog5.svg`,
  //   tag: "Enterprise",
  //   title: "Autodesk looks to future of 3D printing with Project",
  //   desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
  //   date: "10 September 2022",
  //   author: {
  //     img: `/image/avatar3.jpg`,
  //     name: "Ryan Samuel",
  //   },
  // },
  // {
  //   img: `/image/blogs/blog6.svg`,
  //   tag: "Startups",
  //   title: "Lyft launching cross-platform service this week",
  //   desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
  //   date: "12 September 2022",
  //   author: {
  //     img: `/image/avatar2.jpg`,
  //     name: "Nora Hazel",
  //   },
  // },
];

export function Posts() {
  return (
    <section className="grid min-h-screen place-items-center p-8">
      {/* <Tabs value="trends" className="mx-auto max-w-7xl w-full mb-16 ">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-10 !w-12/12 md:w-[50rem] border border-white/25 bg-opacity-90"  placeholder={undefined}>
            <Tab value="trends"  placeholder={undefined}>Trends</Tab>
            <Tab value="frontend"  placeholder={undefined}>Frontend</Tab>
            <Tab value="backend"  placeholder={undefined}>Backend</Tab>
            <Tab value="cloud"  placeholder={undefined}>Cloud</Tab>
            <Tab value="ai"  placeholder={undefined}>AI</Tab>
            <Tab value="tools"  placeholder={undefined}>Tools</Tab>
          </TabsHeader>
        </div>
      </Tabs> */}
      <Typography
        variant="lead"
        color="gray"
        className="max-w-10xl mb-36 text-center text-gray-500"  placeholder={undefined}      >
        At WRC Armenia, we passionately embrace the cause of women&apos;s rights, committing to a future where equality prevails. Our core priorities include:

        Workplace Equality
        Within our organization, gender equality is not just an aspiration—it&apos;s a reality. We champion equal opportunities, pay equity, and a supportive culture that empowers every team member, irrespective of gender.

        Holistic Wellness
        Beyond the workplace, we advocate for women&apos;s well-being by supporting accessible healthcare, prioritizing maternal health, and fostering overall physical and mental wellness.

        Education Empowerment
        Education is transformative. We actively break barriers to education for girls and women, unlocking their potential for a brighter future.

        Combatting Violence
        We vehemently oppose gender-based violence, actively participating in initiatives to raise awareness and support survivors.

        Amplifying Voices
        Diversity fuels progress. We amplify women&apos;s voices, contributing to a more equitable world where every perspective is valued.
      </Typography>
      {/* <Typography variant="h2" className="mb-4"  placeholder={undefined}>
        News
      </Typography> */}
      <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3">
        {POSTS.map(({ img, tag, title, desc, date, author }) => (
          <BlogPostCard
            key={title}
            img={img}
            tag={tag}
            title={title}
            desc={desc}
            date={date}
            author={{
              img: author.img,
              name: author.name,
            }}
          />
        ))}
      </div>
      <Button
        onClick={()=>window.location.href='news'}
        variant="text"
        size="lg"
        color="gray"
        className="flex items-center gap-2 mt-24"  placeholder={undefined}      >
        <ArrowSmallDownIcon className="h-5 w-5 font-bold text-gray-900" />
        VIEW MORE
      </Button>
    </section>
  );
}

export default Posts;
