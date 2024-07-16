"use server"

import { cookies } from "next/headers"
import { baseUrl } from "../initialData"
import { revalidatePath } from "next/cache"

import ActionResultT from "@/types/actionResult.types"

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

  const session = cookies().get("session")?.value || ""
  const response = await fetch(baseUrl + "/chat", {
    method: "post",
    headers: { Authorization: session },
    body: formData
  })

  if (response.status !== 200) {
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