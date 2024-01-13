import {
  Body,
  Catch,
  createHandler,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Request,
} from "next-api-decorators";
import prisma from "../../../../prisma/prisma";

// @Catch(exceptionHandler)
class NewsHandler {
  @Get("/list")
  async _getAllNews(@Req() req: any) {
    const allNews = await prisma.news.findMany({
      where: { language: req.query?.language },
      orderBy: [{ createdAt: "desc" }],
    });

    const changedNews: any[] = [];

    for (const news of allNews) {
      let filePath: string = "";
      if (news.fileId) {
        const file = await prisma.files.findFirst({
          where: { id: news.fileId },
        });

        if (file) {
          filePath = file.path;
        }
      }

      const date = new Date(news.createdAt);

      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      news.text = news.fileId
        ? news.text.slice(0, 200) + "..."
        : news.text.slice(0, 700) + "...";

      changedNews.push({
        ...news,
        readMoreLink: `/news/${news.id}`,
        formattedDate,
        filePath,
      });
    }

    return {
      ok: true,
      data: changedNews,
    };
  }

  @Get("/landing")
  async _getLandingNews() {
    const allNews = await prisma.news.findMany({
      take: 3,
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

      news.text = news.text.slice(0, 150);

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

  @Get("/list/original")
  async _getAllAdminNews() {
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

      changedNews.push({
        ...news,
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

  @Put("/")
  async _editNews(@Body() { newsData }: any) {
    const { id, text, title }: { id: number; text: string; title: string } =
      newsData;

    await prisma.news.update({ where: { id }, data: { text, title } });

    return {
      ok: true,
    };
  }

  @Delete("/:id")
  async _deleteNews(@Param("id") id: number) {
    await prisma.news.delete({ where: { id: +id } });

    return {
      ok: true,
    };
  }
}

export default createHandler(NewsHandler);
