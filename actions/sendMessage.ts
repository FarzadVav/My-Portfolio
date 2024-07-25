"use server"

import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

import ActionResultT from "@/types/actionResult.types"
import { fetcher } from "@/utils/fetcher"

const sendMessage = async (formData: FormData) => {
  const text = formData.get("text") as string

  const errors: ActionResultT = {
    fieldsError: {},
    customErrors: null,
    response: { status: false, data: {} }
  }
  if (!text.length)
    errors.fieldsError.text = "لطفا ایمیل تان را وارد کنید"
  if (Object.keys(errors.fieldsError).length)
    return errors

  const response = await fetcher("/chat", {
    baseUrl: true,
    session: cookies().get("session")?.value,
    request: {
      method: "post",
      body: formData
    }
  })

  if (!response) {
    errors.customErrors = ["خطای ناشناس سرور"]
    return errors
  }

  revalidatePath("/contact")
  errors.customErrors = null
  errors.fieldsError = {}
  errors.response = {
    status: true,
    data: {}
  }
  return errors
}

export default sendMessage