import { NextRequest, NextResponse } from "next/server";

import { BASE_URL } from "./utils/initialData";
import { UsersT } from "./types/datas.types";

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next()
  const session = request.cookies.get("session")?.value || ""

  const fetchAuth = await fetch(BASE_URL + "/auth", {
    headers: {
      Authorization: session
    }
  })
  if (fetchAuth.status !== 200) {
    response.cookies.delete("session")
    return response
  }

  const user = await fetchAuth.json() as UsersT
  response.cookies.set(
    "session",
    user.refreshToken,
    { path: "/", httpOnly: true, secure: true, maxAge: 2_592_000 }
  )

  return response
}

export const config = {
  matcher: ["/contact"],
}