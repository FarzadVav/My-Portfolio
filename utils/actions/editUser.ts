"use server"

import { cookies } from "next/headers"

import { BASE_URL } from "../initialData"
import ActionResultT from "@/types/actionResult.types"
import { UsersT } from "@/types/datas.types"

const editUser = async (formData: FormData) => {
  const fullName = formData.get("fullName") as string

  const errors: ActionResultT = {
    fieldsError: {},
    customErrors: null,
    response: { status: false, data: {} }
  }
  if (!fullName.length)
    errors.fieldsError.fullName = "error"
  if (Object.keys(errors.fieldsError).length)
    return errors

  const session = cookies().get("session")?.value || ""
  const response = await fetch(BASE_URL + "/auth", {
    method: "put",
    headers: { Authorization: session },
    body: JSON.stringify({ fullName })
  })

  if (response.status !== 200) {
    errors.customErrors = ["خطای ناشناس سرور"]
    return errors
  }

  const user = await response.json() as UsersT
  cookies().set(
    "session",
    user.token,
    { path: "/", httpOnly: true, secure: true, maxAge: 2_592_000 }
  )

  errors.customErrors = null
  errors.fieldsError = {}
  errors.response = {
    status: true,
    data: {}
  }
  return errors
}

export default editUser