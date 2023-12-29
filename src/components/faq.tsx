"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. Why is gender equality important in the workplace?",
    desc: "Gender equality fosters diversity, innovation, and a thriving work environment. We believe every individual, regardless of gender, should have equal opportunities for professional growth and success.",
  },
  {
    title: "2. How does your company promote workplace equality?",
    desc: "We ensure pay equity, provide equal career advancement opportunities, and maintain a supportive work culture that values and empowers all employees.",
  },
  {
    title: "3. What steps is your company taking to combat gender-based violence?",
    desc: "We condemn all forms of gender-based violence and actively participate in awareness campaigns, employee training, and community initiatives to combat and prevent such incidents.",
  },
  {
    title: "4. How does your company amplify women's voices?",
    desc: "We promote diversity in leadership roles, encourage mentorship programs, and collaborate with organizations that amplify women's perspectives, fostering an inclusive and equitable environment.",
  },
  {
    title: "5. How can individuals support your company's women's rights initiatives?",
    desc: "Individuals can join our advocacy efforts, participate in awareness campaigns, and contribute to a workplace culture that values diversity and inclusivity, ultimately creating a world where women's rights are celebrated.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography placeholder={undefined} variant="h1" color="blue-gray" className="mb-4">
            Frequently asked questions
          </Typography>
          <Typography placeholder={undefined}
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
          >
            Explore our responses to common inquiries about our commitment to gender equality, workplace empowerment, and initiatives promoting women&apos;s rights. Join us in building a future of inclusivity and progress.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion placeholder={undefined}
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader placeholder={undefined} className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography placeholder={undefined}
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Faq;
