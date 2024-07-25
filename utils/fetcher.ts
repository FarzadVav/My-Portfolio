import { BASE_URL } from "./initialData"

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
  const result = await response.json()

  if (response.status !== 200) return undefined
  return result as ResultT
}