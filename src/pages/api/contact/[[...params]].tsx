import {
  Body,
  Catch,
  createHandler,
  Get,
  Param,
  Post,
  Query,
} from "next-api-decorators";
import prisma from "../../../../prisma/prisma";
import axios from "axios";

// @Catch(exceptionHandler)
class ContactHandler {
  @Post("/")
  async _contact(@Body() body: any) {
    const { contactInput } = body;

    const data = await prisma.contact_details.create({
      data: {
        email: contactInput.email,
        text: contactInput.text,
        name: contactInput.name,
      },
    });

    const emailData = JSON.stringify({
      sender: {
        name: "WRC Armenia",
        email: contactInput.email,
      },
      to: [
        {
          email: "matevosyandev2000@gmail.com",
          name: contactInput.name,
        },
      ],
      subject: "Contact to WRC",
      htmlContent: `<html><head></head><body> ${contactInput.text} </body></html>`,
    });

    let config = {
      method: "post",
      url: process.env.BREVO_EMAIL_URL + "/smtp/email",
      headers: {
        "api-key": process.env.BREVO_EMAIL_SECRET_KEY,
        "Content-Type": "application/json",
      },
      data: emailData,
    };

    axios
      .request(config)
      .then((response: any) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error: any) => {
        console.log(error);
      });

    return {
      data,
      ok: true,
    };
  }
}

export default createHandler(ContactHandler);
