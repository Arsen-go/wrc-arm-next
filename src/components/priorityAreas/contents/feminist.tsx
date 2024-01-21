/* eslint-disable react/no-unescaped-entities */
"use client";

import { Typography } from "@material-tailwind/react";

const contentData = {
  feministActivism:
    "One of the goals of the Women’s Resource Center is to empower women through education and community discussions. That is why we have developed, created and conducted many courses over the years of our activity, the largest and most comprehensive of which is the three-day training on Women’s Rights.During the three days, selected participants learn about the following topics: human rights, gender and gender identity, gender-based violence, feminism, sexual and reproductive health and rights, and peacebuilding. Participants get the opportunity to apply for a small grant with their ideas and implement advocacy programs in their communities, which can have various formats and content: courses, workshops, theater performances, photo and video stories, feminist board games, etc. Also, various feminist discussions, training of trainers and other information programs are held.",
  safeSpace:
    "Creating a safe space is also very important to us. It includes not only the physical space that can be used to study, work, and leisure, but also the safety that can be obtained in an environment that is equal, supportive, compassionate and non-judgmental.",
  coursesAndDiscussions:
    "One of the goals of the Women’s Resource Center is to empower women through education and community discussions. That is why we have developed, created and conducted many courses over the years of our activity, the largest and most comprehensive of which is the three-day training on Women’s Rights...",
  safeSpaceDetails:
    "The safe space is open to anyone who needs information, support and advice. Our specialists listen to each visitor, assess their needs, provide necessary information, and, if necessary, direct them to relevant organizations and specialists. We are open from Monday to Saturday from 14:00 to 19:00, except Wednesdays. It’s free to work, study, use our library and interact with staff...",
  girlsTalkProgram:
    "The two-month program “Girls talk” is intended for 13 to 18-year-old girls. The goal of the program is to empower teenage girls, create a safe space for communication and self-development. During the meetings, the participants have the opportunity to share their knowledge, discuss the role of young girls in society, talk about their problems, goals, and aspirations...",
  girlsTalkPodcast:
    "The “Girls Talk” initiative in collaboration with the “Women’s Voice” radio, created the “Girls Talk” podcast. The purpose of the podcast is to present the issues of girls and women through oral stories, reflect on the gender stereotypes in our society, try to present the views of young girls on the above-mentioned topics...",
  volunteering:
    "The WRC emphasizes the role of volunteers in its activities. Both local and international volunteers can volunteer with us. Why and how to volunteer at WRC? By volunteering at the WRC, you will have the opportunity to participate in the center’s programs, to contribute to the feminist movement in Armenia, and to address women’s issues...",
  shuhelGroup:
    "“Shuhel” creative women’s group was created in 2017. The women of the Shuhel group, participating in the “Women’s Economic Empowerment” program, decided to start their own social enterprise. Having no professional education, no craft, women began to fight for themselves, for their children, for the present, for the future. Shuhel is open to women over the age of 40 who want to develop their handicraft skills, have knowledge that they are willing to share with other members of the group, and love teamwork...",
  radio:
    "Women’s Voice radio channel started its activities in 2015 with a mission to raise the voices of women in Armenia, inform the public about the rights and problems of women. Interviews aiming to raise awareness about Armenian and international women’s activities, programs, goals, and agendas. Reports on notable actions and events...",
  psychologicalAssistance:
    "The WRC organizes a series of public meetings with a psychologist for women and girls. Also, one-time open group meetings with a psychologist on a predetermined topic are held from time to time.",
  legalAdvice:
    "The Women’s Resource Center provides FREE legal consultancy services to women in Marital and Family Relations and Labor rights. Free Legal Service is provided every Tuesday, Wednesday, Thursday. It is implemented by an experienced lawyer Narine Grigoryan, both online and offline. To get a consultation, you need to register in advance by calling: 093 94 88 86. It’s also available on Viber.",
};

export default function FeministContent({ locales }: { locales: any }) {
  return (
    <div className="container mx-auto mt-16 p-6 bg-white rounded-md shadow-md text-left">
      <div className="mb-6">
        <Typography placeholder={undefined}>
          {contentData.feministActivism}
        </Typography>
        <Typography placeholder={undefined}>{contentData.safeSpace}</Typography>
        <Typography placeholder={undefined}>
          {contentData.coursesAndDiscussions}
        </Typography>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Courses and Discussions
        </Typography>
        <Typography placeholder={undefined}>
          {contentData.coursesAndDiscussions}
        </Typography>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Safe Space
        </Typography>
        <Typography placeholder={undefined}>
          {contentData.safeSpaceDetails}
        </Typography>
        <Typography placeholder={undefined}>
          {contentData.girlsTalkProgram}
        </Typography>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          "Girls Talk" Podcast
        </Typography>
        <Typography placeholder={undefined}>
          {contentData.girlsTalkPodcast}
        </Typography>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Volunteering
        </Typography>
        <Typography placeholder={undefined}>
          {contentData.volunteering}
        </Typography>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Shuhel Creative Women's Group
        </Typography>
        <Typography placeholder={undefined}>
          {contentData.shuhelGroup}
        </Typography>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Radio
        </Typography>
        <Typography placeholder={undefined}>{contentData.radio}</Typography>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Psychological Assistance
        </Typography>
        <Typography placeholder={undefined}>
          {contentData.psychologicalAssistance}
        </Typography>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Legal Advice
        </Typography>
        <Typography placeholder={undefined}>
          {contentData.legalAdvice}
        </Typography>
      </div>
    </div>
  );
}
