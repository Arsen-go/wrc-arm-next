import {
  Body,
  Catch,
  createHandler,
  Get,
  Param,
  Post,
  Query,
} from "next-api-decorators";
import prisma from "../../../../prisma/prisma";

// @Catch(exceptionHandler)
class NewsHandler {
  @Get("/list")
  async _getAllNews() {
    const allNews = await prisma.news.findMany({
      orderBy: [{ createdAt: "desc" }],
    });

    return {
      ok: true,
      data: allNews,
    };
  }

  @Post("/")
  async _createNews(@Body() body: any) {
    await prisma.news.create({ data: { ...body.newsData } });

    return {
      ok: true,
    };
  }
}

export default createHandler(NewsHandler);
