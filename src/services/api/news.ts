import $apiClient from "../axios";

export class NewsService {
  static getNews() {
    return $apiClient.get("/news/list");
  }

  static getOneNews(id: number) {
    return $apiClient.get(`/news/${id}`);
  }

  static createNews(newsData: any) {
    return $apiClient.post("/news", {
      newsData,
    });
  }
}
