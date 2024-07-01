import { GeneralInfoT } from "@/types/datas.types"

const checkDatas = <ResultT,>(response: Response, result: ResultT) => {
  if (response.status !== 200) return null
  return result
}

const getCurrentUrl = (client: boolean | undefined, route: `/${string}`) => {
  const url = client
    ? `/api${route}`
    : (process.env.NEXT_PUBLIC_API_URL + route)

  return url
}

export const getGeneralInfo = async (client?: boolean) => {
  const response = await fetch(getCurrentUrl(client, "/generalInfo"))
  const result = await response.json()

  return checkDatas<GeneralInfoT>(response, result)
}