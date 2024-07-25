"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

const signOut = () => {
  cookies().delete("session")
  revalidatePath("/contact")
}

export default signOut