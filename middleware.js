// import NextAuth from "next-auth/next";
// import { config } from "../../pages/api/auth/[...nextauth]";


// export default NextAuth(config).auth

// export const config = {
//     matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
// }

import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If token exists, proceed
  if (token) {
    return NextResponse.next();
  }

  // If not authenticated, redirect to sign-in page
  const signInUrl = new URL('/login', req.url);
  return NextResponse.redirect(signInUrl);
}

// Match all routes except for API routes, static files, and assets
export const config = {
  matcher: [
    /*
     Match all routes except:
     - API routes (start with /api)
     - Static files (start with /_next/static)
     - Image files (start with /_next/image)
     - Public file types like .png, .jpg, .jpeg, .svg, .ico
    */
    //'/((?!api|_next/static|_next/image|favicon.ico|.*\\.(png|jpg|jpeg|svg|ico)).*)',
    '/about', '/', '/contact', '/welcome((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|/).*)'
    
  ],
};
