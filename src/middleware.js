// middleware.ts
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export default async function middleware(req) {
  const url = req.nextUrl.clone();

  if (req.nextUrl.pathname.startsWith("/api")) {
    const res = NextResponse.next();

    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    // preflight request
    if (req.method === "OPTIONS") {
      return new NextResponse(null, { status: 204, headers: res.headers });
    }

    return res;
  }

  if (url.pathname.startsWith("/backoffice")) {
    const token = req.headers.get("cookie")?.match(/token=([^;]+)/)?.[1];

    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      await jwtVerify(token, secret); 
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/backoffice/:path*"],
};
