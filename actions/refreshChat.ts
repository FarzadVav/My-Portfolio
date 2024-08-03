"use server"

import { revalidatePath } from "next/cache"

const refreshChat = () => revalidatePath("/contact")

export default refreshChat