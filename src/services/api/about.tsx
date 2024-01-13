import { LanguagesEnum } from "@/enums/languages.enum";
import $apiClient from "../axios";

export class AboutService {
  static getContent({ language }: { language: LanguagesEnum }) {
    return $apiClient.get(`/about?language=${language}`, {});
  }
}
