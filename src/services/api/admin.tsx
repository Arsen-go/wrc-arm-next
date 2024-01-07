import $apiClient from "../axios";

export class AdminService {
  static login({ password, email }: { password: string; email: string }) {
    return $apiClient.post("/admin/login", {
      loginInput: {
        password,
        email,
      },
    });
  }
}
