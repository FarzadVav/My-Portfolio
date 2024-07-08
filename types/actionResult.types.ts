type ActionResultT = {
  fieldsError: { [key: string]: string }
  customErrors: string[] | null
  response: {
    status: boolean
    data: { [key: string]: any }
  }
}

export default ActionResultT