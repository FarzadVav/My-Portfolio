import { BASE_URL } from "./initialData"
import { ResponseApiT } from "@/types/datas.types"

type FetcherConfigsT = {
  baseUrl?: boolean,
  session?: string,
  request?: {
    method?: string,
    body?: BodyInit,
    cache?: RequestCache,
    next?: NextFetchRequestConfig
  }
}

export const fetcher = async <ResultT,>(endPoint: string, configs?: FetcherConfigsT) => {
  const currentUrl = (configs?.baseUrl ? BASE_URL : "") + endPoint
  const response = await fetch(currentUrl, {
    headers: configs?.session ? { Authorization: configs.session } : undefined,
    ...configs?.request
  })
  const result = await response.json() as ResponseApiT<ResultT>

  return {
    success: response.status === 200,
    ...result
  }
}