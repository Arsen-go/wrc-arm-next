import { createHandler, Get } from "next-api-decorators";
import prisma from "../../../../../prisma/prisma";

class ContactHandler {
  @Get("/")
  async _contacts() {
    try {
      // Fetch contacts from the database using Prisma
      const contacts = await prisma.contact_details.findMany();

      // Return the fetched contacts to the client
      return {
        data: contacts,
        ok: true,
      };
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return {
        data: null,
        ok: false,
      };
    }
  }
}

export default createHandler(ContactHandler);
