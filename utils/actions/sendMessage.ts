"use server"

import { cookies } from "next/headers"
import { baseUrl } from "../initialData"
import { revalidatePath } from "next/cache"

const sendMessage = async (formData: FormData) => {
  const text = formData.get("text") as string
  if (!text.length) return

  const token = cookies().get("user")?.value || ""
  const response = await fetch(baseUrl + "/chat", {
    method: "post",
    headers: { Authorization: token },
    body: formData
  })

  response.status === 200 && revalidatePath("/contact")
}

export default sendMessage