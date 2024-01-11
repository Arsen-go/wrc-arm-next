import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextApiRequest) {
  const url = process.env.NEXTAUTH_URL + "/en/admin/login";
  try {
    const token = await getToken({ req, secret: process.env.JWT_SECRET });
    if (!token) {
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(url);
  }
}
export const config = {
  matcher: ["/en/admin/dashboard"],
};
