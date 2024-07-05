export const fetcher = async <ResultT,>(url: string) => {
  const response = await fetch(url)
  const result = await response.json() as ResultT

  if (response.status !== 200) return null
  return result
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