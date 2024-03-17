"use server";
import * as jwt from "jsonwebtoken";
import { Body, createHandler, Post } from "next-api-decorators";
import { cookies } from "next/headers";

class LoginHandler {
  @Post("/")
  async _login(@Body() body: any) {
    const { loginInput } = body;

    if (
      loginInput.email !== process.env.ADMIN_EMAIL ||
      loginInput.password !== process.env.ADMIN_PASSWORD
    ) {
      return {
        data: null,
        ok: false,
        error: "Invalid email or password",
      };
    }

    const token = jwt.sign(
      { email: loginInput.email },
      String(process.env.JWT_SECRET),
      {
        expiresIn: "1m",
      }
    );

    // const cookieStore = cookies().;
    // const token = cookieStore.("tkn");
    // Return a custom response object with the token and set-cookie header
    return {
      response: {
        data: { token },
        ok: true,
      },
      headers: {
        "Set-Cookie": `tkn=${token}; HttpOnly; Secure; SameSite=None; Path=/`,
      },
    };
  }
}

export default createHandler(LoginHandler);
