"use server"

import { cookies } from "next/headers"
import { baseUrl } from "../initialData"

const getMe = async () => {
  const userToken = cookies().get("user")?.value
  if (!userToken) return null

  const response = await fetch(baseUrl + "/auth", {
    headers: { Authorization: userToken }
  })
  if (response.status !== 200) return null

  const data = await response.json() as { fullName: string }
  return data
}

export default getMe