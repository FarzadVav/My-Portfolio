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
    errors.fieldsError["fullName"] = "لطفا اسم و فامیل خود را وارد کنید"
  if (!email.length)
    errors.fieldsError["email"] = "لطفا ایمیل تان را وارد کنید"
  if (!password.length)
    errors.fieldsError["password"] = "برای امنیت ارتباط، رمزتان را وارد کنید و آن را به خاطر بسپارید"
  if (text.length < 32)
    errors.fieldsError["text"] = "لطفا متنی که در نظر دارید را بنویسید"
  if (Object.keys(errors.fieldsError).length)
    return errors

  const response = await fetch("http://localhost:3000/api/auth", {
    method: "post",
    body: formData
  })
  const result = await response.json()
  console.log(result)

  errors.fieldsError = {}
  errors.customErros = null
  errors.response = {
    status: true,
    data: result
  }
  return errors
}

export default addMessage