import { NextRequest, NextResponse } from "next/server";

import { UsersT } from "./types/datas.types";
import { fetcher } from "./utils/fetcher";
import { cookieOptions } from "./utils/session";

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next()

  const user = await fetcher<UsersT>("/auth", {
    baseUrl: true,
    session: request.cookies.get("session")?.value
  })
  if (!user.success || !user.data) {
    response.cookies.delete(cookieOptions.name)
    return response
  }
  response.cookies.set(
    "session",
    user.data?.token,
    { path: "/", httpOnly: true, secure: true, maxAge: 2_592_000 }
  )

  return response
}

export const config = {
  matcher: ["/contact"],
}