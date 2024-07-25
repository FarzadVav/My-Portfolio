"use server"

import { cookies } from "next/headers"

import { UsersT } from "@/types/datas.types"
import { fetcher } from "@/utils/fetcher"

const getMe = async () => {
  const session = cookies().get("session")?.value
  if (!session) return undefined

  const response = await fetcher<UsersT>("/auth", {
    baseUrl: true,
    session
  })
  return response
}

export default getMe