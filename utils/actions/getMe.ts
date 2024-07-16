"use server"

import { cookies } from "next/headers"

import { baseUrl } from "../initialData"
import { UsersApiT } from "@/types/datas.types"

const getMe = async () => {
  const session = cookies().get("session")?.value
  if (!session) return null
  
  const response = await fetch(baseUrl + "/auth", {
    headers: { Authorization: session }
  })
  if (response.status !== 200) return null

  const data = await response.json()
  return { ...data, token: session } as UsersApiT & { token: string }
}

export default getMe