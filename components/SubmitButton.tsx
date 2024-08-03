"use client"

import cn from "@/utils/cn"
import { HTMLAttributes } from "react"
import { useFormStatus } from "react-dom"

type SubmitButtonT = HTMLAttributes<HTMLButtonElement>

const SubmitButton = ({ className, children, ...props }: SubmitButtonT) => {
  const { pending } = useFormStatus()

  return (
    <button
      className={cn("btn btn-primary w-max relative", className)}
      type="submit"
      disabled={pending}
      {...props}
    >
      {children}
    </button>
  )
}

export default SubmitButton
