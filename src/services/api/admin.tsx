import {
  AboutPageContentHiddenFieldsType,
  AboutPageContentType,
} from "@/types/aboutPageContent.type";
import $apiClient from "../axios";
import { LanguagesEnum } from "@/enums/languages.enum";

export class AdminService {
  static login({ password, email }: { password: string; email: string }) {
    return $apiClient.post("/admin/login", {
      loginInput: {
        password,
        email,
      },
    });
  }

  static getAboutPageContent({ language }: { language: LanguagesEnum }) {
    return $apiClient.get(`/admin/content/about?language=${language}`);
  }

  static savePageContent(
    {
      aboutInformation,
      areasOfFocus,
      ourMission,
      ourPurpose,
      ourVision,
    }: AboutPageContentType,
    hideFields: AboutPageContentHiddenFieldsType,
    language: LanguagesEnum
  ) {
    return $apiClient.put("/admin/content/about", {
      aboutPageContentInput: {
        aboutInformation,
        areasOfFocus,
        ourMission,
        ourPurpose,
        ourVision,
      },
      hideFields,
      language,
    });
  }
}
