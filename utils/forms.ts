import { RefObject } from "react";

import ActionResultT from "@/types/actionResult.types";
import toast from "react-hot-toast";

export const defaultFormErrors: ActionResultT = { fields: {}, customErrors: null, success: false }

export const successedFormErrors: ActionResultT = { fields: {}, customErrors: null, success: true }

export const internalError = (
  error: any,
  formErrors: ActionResultT,
  fields?: {
    customError?: string,
    fileName?: string
  }
) => {
  console.log(`Uknown Error in ${fields?.fileName || "server"} =>`, error)
  formErrors.customErrors = [
    ...(formErrors.customErrors || []),
    fields?.customError || "خطای ناشناخته سمت سرور"
  ]
  return formErrors
}

export const resetFormUi = (
  formRef: RefObject<HTMLFormElement>,
  handler?: () => void
) => {
  handler && handler()
  formRef.current?.reset()
  toast.success("عملیات با موفقیت انجام شد")
}