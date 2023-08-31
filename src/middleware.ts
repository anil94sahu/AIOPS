"use client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { PAGE_ROUTE_LOCATION, TRAILSLASH } from "../utils/constants";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  let isLogin = request.cookies.get("jwtToken")?.value;
  if (!isLogin) {
    if (
      request.nextUrl.pathname.startsWith(TRAILSLASH + PAGE_ROUTE_LOCATION.DASHBOARD) ||
      request.nextUrl.pathname.startsWith(TRAILSLASH + PAGE_ROUTE_LOCATION.CUSTOMERS) ||
      request.nextUrl.pathname.startsWith(TRAILSLASH + PAGE_ROUTE_LOCATION.INVOICES) ||
      request.nextUrl.pathname.startsWith(TRAILSLASH + PAGE_ROUTE_LOCATION.REQUESTS) ||
      request.nextUrl.pathname.startsWith(TRAILSLASH + PAGE_ROUTE_LOCATION.CUSTOMERDATA)
    ) {
      return NextResponse.rewrite(new URL("/", request.url));
    }
  } else {
    if (url.pathname === "/") {
      url.pathname = "/customers";
      return NextResponse.redirect(url);
    }
  }
}

export const config = {
  matcher: [
    PAGE_ROUTE_LOCATION.DASHBOARD,
    PAGE_ROUTE_LOCATION.CUSTOMERDATA,
    PAGE_ROUTE_LOCATION.CUSTOMERS,
    PAGE_ROUTE_LOCATION.REQUESTS,
    PAGE_ROUTE_LOCATION.INVOICES,
    PAGE_ROUTE_LOCATION.INVOICES
  ],
};
