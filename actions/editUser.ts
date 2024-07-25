"use server"

import ActionResultT from "@/types/actionResult.types"
import { UsersT } from "@/types/datas.types"
import { fetcher } from "@/utils/fetcher"
import { createSession, getSession } from "@/utils/session"

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

  const response = await fetcher<UsersT>("/auth", {
    baseUrl: true,
    session: getSession(),
    request: {
      method: "put",
      body: JSON.stringify({ fullName })
    }
  })

  if (!response) {
    errors.customErrors = ["خطای ناشناس سرور"]
    return errors
  }

  createSession(response.token)
  errors.customErrors = null
  errors.fieldsError = {}
  errors.response = {
    status: true,
    data: {}
  }
  return errors
}

export default editUser