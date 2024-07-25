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