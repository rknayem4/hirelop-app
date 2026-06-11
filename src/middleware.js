import { NextResponse } from "next/server";

export async function middleware(request) {
  const sessionCookie = request.cookies.get("better-auth.session_token");

  // login na thakle auth page e pathao
  if (!sessionCookie) {
    return NextResponse.redirect(
      new URL("/auth/signin", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};