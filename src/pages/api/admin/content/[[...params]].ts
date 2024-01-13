import { Body, createHandler, Get, Put, Req } from "next-api-decorators";
import prisma from "../../../../../prisma/prisma";
import {
  AboutPageContentHiddenFieldsType,
  AboutPageContentType,
} from "@/types/aboutPageContent.type";
import { PagesEnum } from "@/enums/pages.enum";
import { LanguagesEnum } from "@/enums/languages.enum";

class ContentHandler {
  @Put("/about")
  async _aboutContent(
    @Body()
    {
      aboutPageContentInput,
      hideFields,
      language,
    }: {
      aboutPageContentInput: AboutPageContentType;
      hideFields: AboutPageContentHiddenFieldsType;
      language: LanguagesEnum;
    }
  ) {
    await Promise.all([
      Object.keys(aboutPageContentInput).map(async (objKey) => {
        const content = await prisma.contents.findFirst({
          where: { key: objKey, language },
        });

        const specificData =
          aboutPageContentInput[objKey as keyof AboutPageContentType];
        const hiddenFiled = hideFields[objKey as keyof AboutPageContentType];

        if (!content) {
          await prisma.contents.create({
            data: {
              hidden: hiddenFiled ?? false,
              key: objKey,
              language,
              page: PagesEnum.ABOUT,
              value: specificData,
            },
          });
        } else {
          await prisma.contents.update({
            where: { id: content.id },
            data: {
              value: specificData.length ? specificData : content.value,
              hidden: hiddenFiled ?? content.hidden,
            },
          });
        }
      }),
    ]);

    return {
      data: null,
      ok: true,
    };
  }

  @Get("/about")
  async _getAboutPageContent(@Req() req: any) {
    const aboutContents = await prisma.contents.findMany({
      where: { page: PagesEnum.ABOUT, language: req.query.language },
    });

    const sortOrder = [
      "aboutInformation",
      "areasOfFocus",
      "ourMission",
      "ourPurpose",
      "ourVision",
    ];

    const sortedAboutContents = aboutContents.sort(
      (a, b) => sortOrder.indexOf(a.key) - sortOrder.indexOf(b.key)
    );

    return { ok: true, data: sortedAboutContents };
  }
}

export default createHandler(ContentHandler);
