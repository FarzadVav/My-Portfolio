"use server"

import ActionResultT from "@/types/actionResult.types"

const addMessage = async (formData: FormData): Promise<ActionResultT> => {
  const fullName = formData.get("fullName") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const text = formData.get("text") as string

  const errors: ActionResultT = {
    fieldsError: {},
    customErros: null,
    response: { status: false, data: {} }
  }

  if (!fullName.length)
    errors.fieldsError.fullName = "لطفا اسم و فامیل خود را وارد کنید"
  if (!email.length)
    errors.fieldsError.email = "لطفا ایمیل تان را وارد کنید"
  if (!password.length)
    errors.fieldsError.password = "برای امنیت ارتباط، رمزتان را وارد کنید و آن را به خاطر بسپارید"
  if (!text.length)
    errors.fieldsError.text = "لطفا متنی که در نظر دارید را بنویسید"
  if (Object.keys(errors.fieldsError).length)
    return errors

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth", {
    method: "post",
    body: formData
  })

  if (response.status === 200) {
    errors.response = {
      status: true,
      data: await response.json()
    }
  }

  errors.fieldsError = {}
  errors.customErros = null
  return errors
}

export default addMessage