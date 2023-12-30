/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
"use client";

import { Typography } from "@material-tailwind/react";

function AboutContent() {
  return (
    <div className="container mx-auto mt-16 p-6 bg-white rounded-md shadow-md text-left">
      <div className="mb-6">
        <Typography placeholder={undefined}>
          The Women’s Resource Center (hereafter WRC) was established in 2003
          and operates in the territory of the Republic of Armenia.
        </Typography>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Our Vision
        </Typography>
        <ul className="list-disc ml-8">
          <li>
            <Typography placeholder={undefined}>
              Establish the equal and self-determined status of women in
              Armenian society;
            </Typography>
          </li>
          <li>
            <Typography placeholder={undefined}>
              Eliminate oppression and restrictions on women by patriarchal
              societal standards.
            </Typography>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Our Mission
        </Typography>
        <ul className="list-disc ml-8">
          <li>
            <Typography placeholder={undefined}>
              Empower and support different groups of women and girls;
            </Typography>
          </li>
          <li>
            <Typography placeholder={undefined}>
              Identify and reduce cultural, systemic manifestations of
              discrimination and violence against women;
            </Typography>
          </li>
          <li>
            <Typography placeholder={undefined}>
              Spread feminist ideology and support women’s united struggle
              against inequalities created by the patriarchal system.
            </Typography>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Our Purpose
        </Typography>
        <Typography placeholder={undefined}>
          Through its activities, the WRC strives for social and normative
          change - influencing state policy, legislative, and socio-cultural
          spheres.
        </Typography>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Areas of Focus
        </Typography>
        <ul className="list-disc ml-8">
          <li>
            <Typography placeholder={undefined}>
              Feminist safe space and empowerment of women and girls;
            </Typography>
          </li>
          <li>
            <Typography placeholder={undefined}>
              Sexual and Reproductive Health and Rights;
            </Typography>
          </li>
          <li>
            <Typography placeholder={undefined}>
              Women’s Rights Advocacy.
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutContent;
