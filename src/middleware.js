import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth({
  callbacks: {  
    authorized({ req, token }) {
      const { pathname } = req.nextUrl;

      if (pathname.startsWith("/backoffice")) {
        console.log(token);

        if (!token) {
          return false;
        }

        if (token.role !== "admin") {
          return false;
        }
      }
      return true;
    },
  },
});

export const config = {
  matcher: ["/backoffice/:path*"],
};
