import { Body, createHandler, Post } from "next-api-decorators";
import prisma from "../../../../prisma/prisma";
import { donateService } from "./service";

// @Catch(exceptionHandler)
class DonateHandler {
  @Post("/")
  async _donate(@Body() body: any) {
    const { donateInput } = body;

    const donation = await prisma.donations.create({ data: donateInput });

    const emailDataForRequestor = JSON.stringify({
      sender: {
        name: "WRC Armenia",
        email: "matevosyandev2000@gmail.com", // will be wrc email
      },
      to: [
        {
          email: donateInput.email,
          name: donateInput.firstName,
        },
      ],
      subject: "Donation request sent",
      htmlContent: donateService.getRequestorMailContent({ donateInput }),
    });

    const emailDataForAcceptor = JSON.stringify({
      sender: {
        name: "WRC Armenia",
        email: donateInput.email,
      },
      to: [
        {
          email: "matevosyandev2000@gmail.com",
          name: donateInput.firstName,
        },
      ],
      subject: `Donation request from ${
        donateInput.firstName || donateInput.lastName
      }`,
      htmlContent: donateService.getReceiverMailContent({ donateInput }),
    });

    donateService.sendEmail({ emailData: emailDataForRequestor });
    donateService.sendEmail({ emailData: emailDataForAcceptor });

    return {
      data: donation,
      ok: true,
    };
  }
}

export default createHandler(DonateHandler);
