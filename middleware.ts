import { NextRequest, NextResponse } from "next/server";

import { UsersT } from "./types/datas.types";
import { fetcher } from "./utils/fetcher";
import { cookieOptions } from "./utils/session";

export const middleware = async (request: NextRequest) => {
  console.log("********************", request.nextUrl.pathname, "********************")
  const response = NextResponse.next()

  const user = await fetcher<UsersT>("/auth", {
    baseUrl: true,
    session: request.cookies.get("session")?.value
  })
  if (!user.success) {
    response.cookies.delete(cookieOptions.name)
    return response
  }
  response.cookies.set("session", user.data.token, cookieOptions.options)

  return response
}

export const config = {
  matcher: "/contact/:path*",
}