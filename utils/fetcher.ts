import { ResponseApiT } from "@/types/datas.types"
import { BASE_URL } from "./initialData"

type FetcherReturnT<T> = { message: string }
  & ({ success: false, data: undefined } | { success: true, data: T })

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

export const fetcher = async <ResultT,>(
  endPoint: string,
  configs?: FetcherConfigsT
): Promise<FetcherReturnT<ResultT>> => {
  const currentUrl = (configs?.baseUrl ? BASE_URL : "") + endPoint

  const response = await fetch(currentUrl, {
    headers: configs?.session ? { Authorization: configs.session } : undefined,
    ...configs?.request
  })
  const result = await response.json() as ResponseApiT

  if (response.status === 200) {
    return {
      success: true,
      message: result.message,
      data: result.data as ResultT
    }
  }

  return {
    success: false,
    message: result.message,
    data: undefined
  }
}