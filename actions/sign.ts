"use server"

import { revalidatePath } from "next/cache"

import ActionResultT from "@/types/actionResult.types"
import { UsersT } from "@/types/datas.types"
import { fetcher } from "@/utils/fetcher"
import { createSession } from "@/utils/session"
import { defaultFormErrors, successedFormErrors } from "@/utils/forms"

const sign = async (formData: FormData): Promise<ActionResultT | undefined> => {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const errors = defaultFormErrors

  if (!email.length)
    errors.fields.email = "لطفا ایمیل تان را وارد کنید"
  if (!password.length)
    errors.fields.password = "برای امنیت ارتباط، رمزتان را وارد کنید و آن را به خاطر بسپارید"
  if (Object.keys(errors.fields).length)
    return errors

  const response = await fetcher<UsersT>("/auth", {
    baseUrl: true,
    request: {
      method: "post",
      body: JSON.stringify({ email, password })
    }
  })

  if (!response.success) {
    errors.customErrors = [response.message]
    return errors
  }

  createSession(response.data.token)
  revalidatePath("/contact")
  return successedFormErrors
}

export default sign