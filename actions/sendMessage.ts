"use server"

import { revalidatePath } from "next/cache"

import { fetcher } from "@/utils/fetcher"
import { getSession } from "@/utils/session"
import { defaultFormErrors, successedFormErrors } from "@/utils/forms"

const sendMessage = async (formData: FormData) => {
  const text = formData.get("text") as string

  const errors = defaultFormErrors
  if (!text.length)
    errors.fields.text = "لطفا ایمیل تان را وارد کنید"
  if (Object.keys(errors.fields).length)
    return errors

  const response = await fetcher("/chat", {
    baseUrl: true,
    session: getSession(),
    request: {
      method: "post",
      body: formData
    }
  })

  if (!response.success) {
    errors.customErrors = [response.message]
    return errors
  }

  revalidatePath("/contact")
  return successedFormErrors
}

export default sendMessage