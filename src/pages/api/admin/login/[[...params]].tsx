import {
  Body,
  Catch,
  createHandler,
  Get,
  Param,
  Post,
  Query,
} from "next-api-decorators";

// @Catch(exceptionHandler)
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
      };
    }

    return {
      data: { token: "s" },
      ok: true,
    };
  }
}

export default createHandler(LoginHandler);
