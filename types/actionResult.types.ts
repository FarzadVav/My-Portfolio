type ActionResultT = {
  fieldsError: { [key: string]: string }
  customErros: string[] | null
  response: {
    status: boolean
    data: { [key: string]: any }
  }
}

export default ActionResultT