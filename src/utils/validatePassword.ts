import { UnauthorizedException } from "next-api-decorators";

export const validateUserPassword = async (email: string, password: string) => {
  try {
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      throw new UnauthorizedException("ERROR_MESSAGES.invalidCredentials");
    }

    const user = {
      name: "ADMIN",
      password: process.env.ADMIN_PASSWORD,
      email: process.env.ADMIN_EMAIL,
    };

    return user;
  } catch (e) {
    throw new Error(e as string);
  }
};
