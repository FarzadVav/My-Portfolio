"use server"

import { cookies } from "next/headers"
import { baseUrl } from "../initialData"

const sendMessage = async (formData: FormData) => {
  const token = cookies().get("user")?.value || ""
  const response = await fetch(baseUrl + "/chat", {
    method: "post",
    headers: { Authorization: token },
    body: formData
  })
  const data = await response.json()

  console.log("*********** data:", data)
}

export default sendMessage