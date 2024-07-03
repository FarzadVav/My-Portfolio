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