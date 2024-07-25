import { NextRequest, NextResponse } from "next/server";

import { UsersT } from "./types/datas.types";
import { fetcher } from "./utils/functions";

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next()

  const user = await fetcher<UsersT>("/auth", {
    baseUrl: true,
    session: request.cookies.get("session")?.value
  })
  if (!user) {
    response.cookies.delete("session")
    return response
  }
  response.cookies.set(
    "session",
    user.token,
    { path: "/", httpOnly: true, secure: true, maxAge: 2_592_000 }
  )

  return response
}

export const config = {
  matcher: ["/about"],
}