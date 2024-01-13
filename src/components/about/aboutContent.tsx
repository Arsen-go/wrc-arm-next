"use client";

import { LanguagesEnum } from "@/enums/languages.enum";
import { AboutService } from "@/services/api/about";
import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

function AboutContent({ language }: { language: LanguagesEnum }) {
  const [contents, setContents] = useState<any>();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response: any = await AboutService.getContent({
          language,
        });

        if (response.ok) {
          setContents(response.data);
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto mt-16 p-6 bg-white rounded-md shadow-md text-left">
      <div className="mb-6">
        <Typography placeholder={undefined}>
          {contents?.aboutInformation
            ? contents?.aboutInformation
            : "The Women’s Resource Center (hereafter WRC) was established in 2003 and operates in the territory of the Republic of Armenia."}
        </Typography>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Our Vision
        </Typography>
        <Typography placeholder={undefined}>
          {contents?.ourVision
            ? contents?.ourVision
            : "Establish the equal and self-determined status of women in Armenian society:  Eliminate oppression and restrictions on women by patriarchal societal standards."}
        </Typography>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Our Mission
        </Typography>
        <Typography placeholder={undefined}>
          {contents?.ourMission
            ? contents?.ourMission
            : "Empower and support different groups of women and girls: Identify and reduce cultural, systemic manifestations of discrimination and violence against women: Spread feminist ideology and support women’s united struggle against inequalities created by the patriarchal system."}
        </Typography>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Our Purpose
        </Typography>
        <Typography placeholder={undefined}>
          {contents?.ourPurpose
            ? contents?.ourPurpose
            : "Through its activities, the WRC strives for social and normative change - influencing state policy, legislative, and socio-cultural spheres."}
        </Typography>
      </div>

      <div className="mb-6">
        <Typography placeholder={undefined} className="font-bold">
          Areas of Focus
        </Typography>
        <Typography placeholder={undefined}>
          {contents?.areasOfFocus
            ? contents?.areasOfFocus
            : " Feminist safe space and empowerment of women and girls; Sexual and Reproductive Health and Rights.Women’s Rights Advocacy."}
        </Typography>
      </div>
    </div>
  );
}

export default AboutContent;
