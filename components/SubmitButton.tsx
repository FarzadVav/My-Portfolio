"use client"

import cn from "@/utils/cn"
import { ButtonHTMLAttributes } from "react"
import { useFormStatus } from "react-dom"

type SubmitButtonT = ButtonHTMLAttributes<HTMLButtonElement>

const SubmitButton = ({ className, children, ...props }: SubmitButtonT) => {
  const { pending } = useFormStatus()

  return (
    <button
      className={cn("btn btn-primary relative", className)}
      type="submit"
      disabled={pending}
      {...props}
    >
      {children}
    </button>
  )
}

export default SubmitButton
