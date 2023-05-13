import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(request: NextRequest) {
   const defaultLang = 'ru';
   let language = request.nextUrl.locale;
   let CurrentURL = new URL(request.url);
   if (!language?.includes(defaultLang)) {
      CurrentURL.searchParams.set('lang', 'en');
      return NextResponse.rewrite(new URL(CurrentURL));
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
