import { betterAuth } from '@repo/auth';

const publicRoutes = ['/sign-in', '/sign-up', '/reset-password'];

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isPublicRoute) {
    return;
  }

  const session = await betterAuth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return Response.redirect(new URL('/sign-in', request.url));
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
