import $apiClient from "../axios";

export class ContactService {
  static sendContactMessage({
    name,
    email,
    text,
  }: {
    name: string;
    email: string;
    text: string;
  }) {
    return $apiClient.post("/contact", {
      contactInput: {
        name,
        email,
        text,
      },
    });
  }

  static getContactMessages() {
    return $apiClient.get("/admin/contact", {});
  }

  static deleteContact(id: number) {
    return $apiClient.delete(`/contact/${id}`);
  }
}
