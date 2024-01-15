import { NextRequest, NextResponse } from 'next/server';

const REDIRECTS: Record<string, string> = {
  kickoff: 'https://cal.com/konstantinmuenster/project-kickoff',
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  const path = url.split('/').pop();

  if (path && REDIRECTS[path]) {
    return NextResponse.redirect(REDIRECTS[path]);
  }
}

export const config = {
  matcher: ['/meeting/:path*'],
};
