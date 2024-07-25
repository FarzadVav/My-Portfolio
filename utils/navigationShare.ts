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