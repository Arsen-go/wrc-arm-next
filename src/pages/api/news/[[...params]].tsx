import {
  Body,
  Catch,
  createHandler,
  Get,
  Param,
  Post,
  Query,
  Req,
} from "next-api-decorators";
import prisma from "../../../../prisma/prisma";

// @Catch(exceptionHandler)
class NewsHandler {
  @Get("/list")
  async _getAllNews() {
    const allNews = await prisma.news.findMany({
      orderBy: [{ createdAt: "desc" }],
    });

    const changedNews: any[] = [];
    allNews.map((news) => {
      const date = new Date(news.createdAt);
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      news.text = news.text.slice(0, 200) + "...";

      changedNews.push({
        ...news,
        readMoreLink: `/news/${news.id}`,
        formattedDate,
      });
    });

    return {
      ok: true,
      data: changedNews,
    };
  }

  @Get("/:id")
  async _getOneNews(@Req() req: any) {
    const news = await prisma.news.findFirst({
      where: { id: +req.query?.params[0] },
    });

    return {
      ok: true,
      data: news,
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
