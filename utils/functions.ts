import { BASE_URL } from "./initialData"

export const fetcher = async <ResultT,>(
  endPoint: string,
  configs?: { baseUrl?: boolean, session?: string }
) => {
  const currentUrl = (configs?.baseUrl ? BASE_URL : "") + endPoint
  const response = await fetch(currentUrl, {
    ...(configs?.session ? { headers: { Authorization: configs.session || "" } } : {})
  })
  const result = await response.json()

  if (response.status !== 200) return undefined
  return result as ResultT
}

export const navigationShare = (shareData: {
  title: string
  text: string
  url: string
}) => {
  try {
    navigator.share(shareData)
  } catch (err) {
    alert("در مرورگر شما پشتیبانی نمی‌شود")
  }
}

export const getEmptyData = <ResultT,>(dataArray: any[] | undefined, emptyCount: number) => {
  const currentArray = [...(dataArray || [])]
  if (currentArray.length < emptyCount) {
    const num = emptyCount - currentArray.length
    for (let i = 0; i < num; i++) {
      currentArray.push(null)
    }
  }

  return currentArray as (ResultT | null)[]
}

export const showModal = (modalId: string) => {
  const modal = document.querySelector("#" + modalId) as HTMLDialogElement
  modal.showModal()
}