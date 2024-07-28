"use server"

import { UsersT } from "@/types/datas.types"
import { fetcher } from "@/utils/fetcher"
import { defaultFormErrors, successedFormErrors } from "@/utils/forms"
import { createSession, getSession } from "@/utils/session"

const editUser = async (formData: FormData) => {
  const fullName = formData.get("fullName") as string

  const errors = defaultFormErrors
  if (!fullName.length)
    errors.fields.fullName = "error"
  if (Object.keys(errors.fields).length)
    return errors

  const response = await fetcher<UsersT>("/auth", {
    baseUrl: true,
    session: getSession(),
    request: {
      method: "put",
      body: JSON.stringify({ fullName })
    }
  })

  if (!response.success) {
    errors.customErrors = [response.message]
    return errors
  }

  createSession(response.data.token)
  return successedFormErrors
}

export default editUser