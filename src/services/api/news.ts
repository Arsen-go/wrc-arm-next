import $apiClient from "../axios";

export class NewsService {
  static getNews() {
    return $apiClient.get("/news/list");
  }

  static sendNews() {
    return $apiClient.post("/news/list", {
      newsData: [1, 2, 3],
    });
  }
}
