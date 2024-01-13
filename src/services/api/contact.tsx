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

  static sendReplyMessage({
    text,
    contactId,
  }: {
    text: string;
    contactId: number;
  }) {
    return $apiClient.post("/contact/reply", {
      replyInput: {
        text,
        contactId,
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
