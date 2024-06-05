import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const handler = () => setMatches(window.matchMedia(query).matches)
    window.addEventListener("resize", handler)

    return () => window.removeEventListener("resize", handler)
  }, [])

  return matches
}

export default useMediaQuery