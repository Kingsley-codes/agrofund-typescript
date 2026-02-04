import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const adminToken = req.cookies.get("admin_token");
  const userToken = req.cookies.get("user_token");

  // 🔐 Protect admin routes (excluding login page)
  if (
    pathname.startsWith("/admin") &&
    pathname !== "/admin/login" && // exclude login
    !adminToken
  ) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // 🔐 Protect user dashboard routes (excluding login page)
  if (
    pathname.startsWith("/dashboard") &&
    pathname !== "/login" && // exclude login
    !userToken
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ✅ Allow request
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
