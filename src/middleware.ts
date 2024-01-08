import { NextRequest, NextResponse } from "next/server";

export default function redirectMiddleware(request: NextRequest) {
  if (!true) {
    // If there's no token, redirect to the login page
    return NextResponse.redirect("/login");
  }

  // Continue with the original request
  return NextResponse.next();
}

export const config = {
  matcher: ["/en/about"],
};
