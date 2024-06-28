export const getGeneralInfo = async () => {
  const response = await fetch(`/api/generalInfo`)
  const result = await response.json()

  if (response.status !== 200) {
    return undefined
  }

  return result as { [key: string]: string }
}