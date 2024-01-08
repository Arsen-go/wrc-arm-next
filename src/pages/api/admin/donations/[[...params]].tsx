import { createHandler, Get } from "next-api-decorators";
import prisma from "../../../../../prisma/prisma";

class DonationHandler {
  @Get("/")
  async _donations() {
    try {
      const donations = await prisma.donations.findMany();

      return {
        data: donations,
        ok: true,
      };
    } catch (error) {
      console.error("Error fetching donations:", error);
      return {
        data: null,
        ok: false,
      };
    }
  }
}

export default createHandler(DonationHandler);
