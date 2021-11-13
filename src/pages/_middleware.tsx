import { NextRequest, NextResponse } from 'next/server'

// eslint-disable-next-line consistent-return
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname === '/') {
    return NextResponse.redirect('/login')
  }

  return NextResponse.next()
}
