export const fetcher = async <ResultT,>(url: string, session?: string) => {
  const response = await fetch(url, {
    headers: { Authorization: session || "" }
  })
  const result = await response.json()

  if (response.status !== 200) return null
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

export const calculateEmptyData = (dataArray: any[], numberOfEmpty: number) => {
  if (dataArray.length < numberOfEmpty) {
    const num = numberOfEmpty - dataArray.length
    for (let i = 0; i < num; i++) {
      dataArray.push(null)
    }
  }
}