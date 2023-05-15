import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from "@i18n/index";


export async function middleware(request: NextRequest) {
   const defaultLocale = i18n.defaultLocale;
   let language = request.nextUrl.locale;
   let currentURL = new URL(request.url);
   // If user locale != default locale, then add search params "lang" with user locale
   if (!language?.includes(defaultLocale)) {
      currentURL.searchParams.set('lang', defaultLocale);
      return NextResponse.rewrite(new URL(currentURL));
   }
}

export const config = {
   matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/',
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
   ],
};
