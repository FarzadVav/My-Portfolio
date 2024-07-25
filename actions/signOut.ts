"use server"

import { deleteSession } from "@/utils/session"
import { revalidatePath } from "next/cache"

const signOut = () => {
  deleteSession()
  revalidatePath("/contact")
}

export default signOut