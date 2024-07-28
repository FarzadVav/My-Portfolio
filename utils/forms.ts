import ActionResultT from "@/types/actionResult.types";

export const defaultFormErrors = (): ActionResultT => ({
  fields: {},
  customErrors: null,
  success: false
})

export const successedFormErrors = (): ActionResultT => ({
  fields: {},
  customErrors: null,
  success: true
})