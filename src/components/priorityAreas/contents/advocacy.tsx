"use client";

import { Typography } from "@material-tailwind/react";

const content = {
  advocacyActivities: {
    mainContent:
      "Advocacy activities of the Women’s Resource Center include: monitoring government policies, laws, regulations related to various groups of women and raising current problems, advocating the use of rights-based and gender-sensitive approaches in the development and implementation of state policies and legislation.",
    targetGroups: [
      "Women with disabilities",
      "Women living with HIV",
      "Rural women",
      "LBT+ women",
      "Yezidi women",
      "Women subjected to domestic and sexual violence",
    ],
    advocacyTopics: [
      "Gender equality",
      "Gender violence",
      "Women’s human rights",
      "Sexual and reproductive health legislation and public policy",
    ],
    advocacyLevels: {
      national: [
        "Ensuring gender sensitivity and human rights in domestic legislation",
        "Protecting women from gender discrimination",
        "Guaranteeing rights to decent work and payment",
        "Freedom from violence and harassment",
        "Quality education",
        "Access to healthcare",
      ],
      international: [
        "Drafting and advocating shadow reports to UN Contracting bodies and special reporters",
        "Advocating for proposals made to the state by the UN Contracting bodies",
        "Advocating for women’s rights in international platforms",
      ],
    },
    advocacyTeamActivities: [
      "Conducting studies, researches, legal analyzes in the field of protection of women’s rights",
      "Presenting findings to decision-makers",
      "Influencing domestic laws and decisions through strategic litigation",
      "Working with different groups of women and involving them in advocacy work",
      "Presenting the realization of women’s rights at various international platforms",
    ],
    affiliations: {
      stateInstitutions: [
        "Public Council under the Minister of Justice of the RA",
        "Public Council under the Ministry of Health of the RA",
        "Public Council under the Ministry of Labor and Social Affairs",
        "Public Council under the Ministry of Education, Science, Culture and Sports",
        "Human Rights Strategy Coordinating Council",
      ],
      networks: [
        "National Assembly – Civil Society Platform",
        "Armenian Gender-Thematic Groups",
        "The Armenian National Platform of the Eastern Partnership Civil Society Forum",
        "Open Society Foundations – Partnership for Open Society Initiative of Armenia",
        "Human Rights House Yerevan",
        "Coalition to Stop Violence Against Women",
        "Non-Discrimination and Equality Coalition",
        "ASTRA network for sexual and reproductive health and rights",
      ],
    },
  },
};

export default function AdvocacyActivitiesContent() {
  const {
    mainContent,
    targetGroups,
    advocacyTopics,
    advocacyLevels,
    advocacyTeamActivities,
    affiliations,
  } = content.advocacyActivities;

  return (
    <div className="container mx-auto mt-16 p-6 bg-white rounded-md shadow-md text-left">
      <Typography placeholder={undefined}>{mainContent}</Typography>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Target Groups:
        </Typography>
        <ul className="list-disc ml-8">
          {targetGroups.map((group, index) => (
            <li key={index}>
              <Typography placeholder={undefined}>{group}</Typography>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Advocacy Topics:
        </Typography>
        <ul className="list-disc ml-8">
          {advocacyTopics.map((topic: string, index: number) => (
            <li key={index}>
              <Typography placeholder={undefined}>{topic}</Typography>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Advocacy Levels:
        </Typography>
        <ul className="list-disc ml-8">
          {Object.entries(advocacyLevels).map(
            ([level, activities], index: number) => (
              <li key={index}>
                <Typography placeholder={undefined}>{level}:</Typography>
                <ul className="list-disc ml-8">
                  {activities.map((activity, idx) => (
                    <li key={idx}>
                      <Typography placeholder={undefined}>
                        {activity}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Advocacy Team Activities:
        </Typography>
        <ul className="list-disc ml-8">
          {advocacyTeamActivities.map((activity: string, index: number) => (
            <li key={index}>
              <Typography placeholder={undefined}>{activity}</Typography>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Affiliations:
        </Typography>
        <ul className="list-disc ml-8">
          {Object.entries(affiliations).map(
            ([type, organizations], index: number) => (
              <li key={index}>
                <Typography placeholder={undefined}>{type}:</Typography>
                <ul className="list-disc ml-8">
                  {organizations.map((org, idx) => (
                    <li key={idx}>
                      <Typography placeholder={undefined}>{org}</Typography>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
