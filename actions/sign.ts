"use server"

import { revalidatePath } from "next/cache"

import ActionResultT from "@/types/actionResult.types"
import { UsersT } from "@/types/datas.types"
import { fetcher } from "@/utils/fetcher"
import { createSession } from "@/utils/session"

const sign = async (formData: FormData): Promise<ActionResultT | undefined> => {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const errors: ActionResultT = {
    fieldsError: {},
    customErrors: null,
    response: { status: false, data: {} }
  }

  if (!email.length)
    errors.fieldsError.email = "لطفا ایمیل تان را وارد کنید"
  if (!password.length)
    errors.fieldsError.password = "برای امنیت ارتباط، رمزتان را وارد کنید و آن را به خاطر بسپارید"
  if (Object.keys(errors.fieldsError).length)
    return errors

  const response = await fetcher<UsersT>("/auth", {
    baseUrl: true,
    request: {
      method: "post",
      body: JSON.stringify({ email, password })
    }
  })

  if (!response) {
    // @ts-ignore
    errors.customErrors = [data.message]
    return errors
  }

  createSession(response.token)
  revalidatePath("/contact")
}

export default sign