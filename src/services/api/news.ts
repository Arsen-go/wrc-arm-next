import { LanguagesEnum } from "@/enums/languages.enum";
import $apiClient from "../axios";

export class NewsService {
  static getAdminNews() {
    return $apiClient.get("/news/list/original");
  }

  static getNews(language: LanguagesEnum) {
    return $apiClient.get(`/news/list?language=${language}`);
  }

  static getNewsForLandingPage() {
    return $apiClient.get("/news/landing");
  }

  static getOneNews(id: number) {
    return $apiClient.get(`/news/${id}`);
  }

  static createNews(body: any) {
    return $apiClient.post("/news", {
      newsData: body,
    });
  }

  static editNews(newsData: any) {
    return $apiClient.put("/news", {
      newsData,
    });
  }

  static deleteNews(id: number) {
    return $apiClient.delete(`/news/${id}`);
  }
}
