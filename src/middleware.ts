// src/app/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const loggedInRoutes = ["/dashboard"];
const loggedOutRoutes = ["/login"];
export default async function AuthMiddleware(
  req: NextRequest
): Promise<NextResponse> {
  const userEmail = req.cookies.get('email'); // 

  if (loggedInRoutes.some(path => req.nextUrl.pathname.startsWith(path))) {

    if (!userEmail) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }else if (loggedOutRoutes.some(path => req.nextUrl.pathname.startsWith(path))) {
    if(userEmail){
      return NextResponse.redirect(new URL('/dashboard/home', req.url));
    }
  }

  return NextResponse.next();
}