type ActionResultT = {
  fields: { [key: string]: string | undefined }
  customErrors: string[] | null
  success: boolean
}

export default ActionResultT