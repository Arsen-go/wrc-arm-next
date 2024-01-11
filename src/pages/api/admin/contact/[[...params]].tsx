import { createHandler, Get } from "next-api-decorators";
import prisma from "../../../../../prisma/prisma";

class ContactHandler {
  @Get("/")
  async _contacts() {
    try {
      // Fetch contacts from the database using Prisma
      const contacts = await prisma.contact_details.findMany();

      const changedContacts: any[] = [];
      contacts.map((contact) => {
        const date = new Date(contact.createdAt);
        const formattedDate = date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true, // Use 24-hour format
        });

        changedContacts.push({
          ...contact,
          formattedDate,
        });
      });

      return {
        data: changedContacts,
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
