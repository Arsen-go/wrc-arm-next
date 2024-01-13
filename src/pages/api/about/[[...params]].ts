import { createHandler, Get, Req } from "next-api-decorators";
import prisma from "../../../../prisma/prisma";
import { PagesEnum } from "@/enums/pages.enum";

class AboutHandler {
  @Get("/")
  async _getAboutContents(@Req() req: any) {
    const contents = await prisma.contents.findMany({
      where: { language: req.query?.language, page: PagesEnum.ABOUT },
    });

    const object: any = {
      aboutInformation: "",
      ourVision: "",
      ourMission: "",
      ourPurpose: "",
      areasOfFocus: "",
    };

    contents.forEach((content: any) => {
      object[content.key] = content.value;
    });

    return {
      ok: true,
      data: object,
    };
  }
}

export default createHandler(AboutHandler);
