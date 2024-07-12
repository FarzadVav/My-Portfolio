"use server"

import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

import ActionResultT from "@/types/actionResult.types"

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

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth", {
    method: "post",
    body: JSON.stringify({ email, password })
  })
  const data = await response.json() as { [key: string]: string }

  if (response.status !== 200) {
    errors.customErrors = [data.message]
    return errors
  }

  cookies().set("user", data.token, { path: "/", httpOnly: true, maxAge: 2_592_000 })
  revalidatePath("/contact")
}

export default sign