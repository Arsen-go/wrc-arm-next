import { UnauthorizedException } from "next-api-decorators";
import NextAuth, { AuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { validateUserPassword } from "@/utils/validatePassword";

export const authOptions: AuthOptions = {
  secret: process.env.JWT_SECRET,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: { email: { type: "text" }, password: { type: "password" } },
      // @ts-ignore
      authorize: async (credentials: any) =>
        (await validateUserPassword(
          credentials?.email || "",
          credentials?.password || ""
        )) || null,
    }),
  ],
  callbacks: {
    session: async ({ session }) => {
      const user = { password: process.env.ADMIN_PASSWORD };
      if (!user) {
        throw new UnauthorizedException();
      }
      const { password: _, ...userWithoutPassword } = user;

      return { ...session, user: userWithoutPassword };
    },
    jwt: async ({ token }) => {
      const user = { password: process.env.ADMIN_PASSWORD };
      if (!user) {
        throw new UnauthorizedException();
      }

      return token;
    },
  },
  pages: { signIn: "/login", error: "/login" },
  session: { strategy: "jwt" },
};
export const serverSession = () => {
  try {
    return getServerSession(authOptions);
  } catch (e) {
    throw e;
  }
};
export default NextAuth(authOptions);
