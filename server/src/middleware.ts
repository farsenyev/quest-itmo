import { NextResponse } from 'next/server';
import { verifyAuthParams } from './lib/verifyAuthParams';

export const config = {
  matcher: '/api/:path*',
};

const allowedOrigins = [
  'https://user778250441-puszlgfj.wormhole.vk-apps.com',
  'http://localhost:3000',
];

export default function middleware(req: Request) {
  const response = NextResponse.next();

  // Handle CORS headers
  const origin = req.headers.get('origin');

  if (origin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    response.headers.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization'
    );
  } else {
    return new NextResponse(JSON.stringify({ error: 'Invalid origin' }), {
      status: 401,
    });
  }

  // Handle preflight requests (OPTIONS method)
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { status: 204, headers: response.headers });
  }

  // // Handle authorization
  // const authHeader = req.headers.get('authorization');

  // const userAuthorized = verifyAuthParams(authHeader);

  // if (!userAuthorized) {
  //   return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
  //     status: 401,
  //   });
  // }

  return response;
}
