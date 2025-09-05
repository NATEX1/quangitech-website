import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyToken } from "./lib/jwt";


export default async function middleware(req) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }


  return NextResponse.next();
}

export const config = {
  matcher: ["/backoffice/:path*"],
};
