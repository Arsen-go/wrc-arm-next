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
class AuthHandler {
  @Get("/list")
  _getOnlineCoursesList() {
    console.log("-------");
    return {
      name: "Name",
    };
  }

  @Post("/list")
  _postOnlineCoursesList(@Body() body: any) {
    console.log(body, "-------");
    return {
      ok: true,
    };
  }
}
export default createHandler(AuthHandler);
