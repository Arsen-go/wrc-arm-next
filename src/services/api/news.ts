import $apiClient from "../axios";

export class NewsService {
  static getAdminNews() {
    return $apiClient.get("/news/list/original");
  }

  static getNews() {
    return $apiClient.get("/news/list");
  }

  static getNewsForLandingPage() {
    return $apiClient.get("/news/landing");
  }

  static getOneNews(id: number) {
    return $apiClient.get(`/news/${id}`);
  }

  static createNews(newsData: any) {
    return $apiClient.post("/news", {
      newsData,
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
