"use client";

import { Typography } from "@material-tailwind/react";

const content = {
  srhrProgram: {
    mainContent:
      "The Sexual and Reproductive Health and Rights (SRHR) program has been in operation since 2008, aiming to protect the sexual and reproductive rights of different groups of women by raising awareness and solving problems in the field.",
    functions: [
      "Individual counseling",
      "Awareness raising",
      "Informational campaigns",
      "Advocacy",
    ],
    networkFoundedYear: 2017,
    networkInfo:
      "In 2017, the “Reproductive Rights Advocacy Network” was founded by the WRC which aims to raise the reproductive rights issues of different groups of women, in particular, women living with HIV, rural women, Yazidi women, women with disabilities, and LBT women. Network members are human rights defenders and related professionals working on women’s reproductive health and rights in various spheres. The creation of the network contributed to the consolidation of their efforts and the combination of their human rights activities, making them more inclusive and intersectional. Network activity is directed to raising legislative and state policy issues in the field of reproductive rights and organizing activities aimed at social change.",
  },
};

export default function SRHRProgramContent() {
  const {
    mainContent,
    functions,
    networkFoundedYear,
    networkInfo,
  }: {
    mainContent: string;
    functions: string[];
    networkFoundedYear: number;
    networkInfo: string;
  } = content.srhrProgram;

  return (
    <div className="container mx-auto mt-16 p-6 bg-white rounded-md shadow-md text-left">
      <Typography placeholder={undefined}>{mainContent}</Typography>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Functions within the framework of the SRHR program:
        </Typography>
        <ul className="list-disc ml-8">
          {functions.map((func, index: number) => (
            <li key={index}>
              <Typography placeholder={undefined}>{func}</Typography>
            </li>
          ))}
        </ul>
      </div>

      <Typography placeholder={undefined}>
        In {networkFoundedYear}, the “Reproductive Rights Advocacy Network” was
        founded by the WRC, which aims to raise the reproductive rights issues
        of different groups of women, in particular, women living with HIV,
        rural women, Yazidi women, women with disabilities, and LBT women.{" "}
        {networkInfo}
      </Typography>
    </div>
  );
}
