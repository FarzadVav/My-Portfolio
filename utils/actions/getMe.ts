"use server"

import { cookies } from "next/headers"

import { BASE_URL } from "../initialData"
import { UsersT } from "@/types/datas.types"

const getMe = async () => {
  const session = cookies().get("session")?.value
  if (!session) return null

  const response = await fetch(BASE_URL + "/auth", {
    headers: { Authorization: session }
  })
  if (response.status !== 200) return null

  const data = await response.json()
  return { ...data, token: session } as UsersT & { token: string }
}

export default getMe