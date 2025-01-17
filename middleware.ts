import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const protectedRoutes = createRouteMatcher([
  '/', 
  '/upcoming', 
  '/previous', 
  '/recordings', 
  '/personal-room', 
  '/meeting(.*)', 
  '/join', 
  '/schedule', 
  '/profile'
]);

export default clerkMiddleware(async (auth, req) => {
  if (protectedRoutes(req)) {
      const authObject = await auth();
      if (!authObject.userId) {
        const redirectUrl = new URL('/sign-in', req.url);
        return NextResponse.redirect(redirectUrl);
      }
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};