/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
"use client";

import { Typography } from "@material-tailwind/react";
import Link from "next/link";

function FeministActivismContent() {
  // Your array of objects with content
  const contentData = [
    {
      key: "feminist",
      title: "Feminist Activism",
      content:
        "Feminist activism is one of the main activities of the Women’s Resource Center. Expanding feminist activities, the Women’s Resource Center tries to contribute to the expansion of the feminist movement and the overthrow of the patriarchal system. Aiming to highlight women’s issues and contribute to the process of solving those issues, WRC implements a number of activities, events, training courses, and discussions.",
    },
    {
      key: "safe",
      title: "Creating a Safe Space",
      content:
        "Creating a safe space is also very important to us. It includes not only the physical space that can be used to study, work, and leisure, but also the safety that can be obtained in an environment that is equal, supportive, compassionate and non-judgmental.",
    },
    {
      key: "rights",
      title: "Sexual and Reproductive Health and Rights (SRHR) Program",
      content:
        "The Sexual and Reproductive Health and Rights (SRHR) program has been in operation since 2008, aiming to protect the sexual and reproductive rights of different groups of women by raising awareness and solving problems in the field.",
    },
    {
      key: "srhr",
      title: "SRHR Program Functions",
      content: [
        "Individual counseling",
        "Awareness raising",
        "Informational campaigns",
        "Advocacy",
      ],
    },
    {
      key: "advocacy",
      title: "Advocacy Activities",
      content:
        "Advocacy activities of the Women’s Resource Center include monitoring government policies, laws, regulations related to various groups of women and raising current problems, advocating the use of rights-based and gender-sensitive approaches in the development and implementation of state policies and legislation.",
    },
    {
      key: "advocacyExp",
      title: "Advocacy Based on Experience",
      content:
        "Our advocacy activities are based on the experience of working with different groups of women, including women with disabilities, women living with HIV, rural women, LBT+ women, Yezidi women, also women subjected to domestic and sexual violence, and the issues raised by women from these communities and professionals working with them.",
    },
    {
      key: "advocacyTopics",
      title: "Advocacy Topics",
      content: [
        "Gender equality",
        "Gender violence",
        "Raising issues of women’s human rights and sexual and reproductive health legislation and public policy, and implementing measures for social change at the decision-making level.",
      ],
    },
  ];

  return (
    <div className="container mx-auto mt-16 p-6 bg-white rounded-md shadow-md text-left">
      {contentData.map((section, index) => (
        <div key={index} className="mb-6">
          <Typography placeholder={undefined} className="underline">
            {["feminist", "rights", "advocacy"].includes(section.key) ? (
              <Link
                href={
                  section.key === "feminist"
                    ? "priorityAreas/feminist"
                    : section.key === "rights"
                    ? "priorityAreas/rights"
                    : section.key === "advocacy"
                    ? "priorityAreas/advocacy"
                    : ""
                }
                className="underline"
                style={{ color: "green" }}
              >
                {section.title}
              </Link>
            ) : (
              section.title
            )}
          </Typography>
          {Array.isArray(section.content) ? (
            <ul className="list-disc ml-8">
              {section.content.map((item, idx) => (
                <li key={idx}>
                  <Typography placeholder={undefined}>{item}</Typography>
                </li>
              ))}
            </ul>
          ) : (
            <Typography placeholder={undefined}>{section.content}</Typography>
          )}
        </div>
      ))}
    </div>
  );
}

export default FeministActivismContent;
