import "server-only"
import { cookies } from "next/headers"

export const cookieOptions = {
  name: "session",
  options: { path: "/", httpOnly: true, secure: true, maxAge: 2_592_000 },
  age: 2_592_000
}

export const createSession = async (token: string) => {
  cookies().set(cookieOptions.name, token, cookieOptions.options)
}

export const deleteSession = () => cookies().delete(cookieOptions.name)

export const getSession = () => cookies().get(cookieOptions.name)?.value