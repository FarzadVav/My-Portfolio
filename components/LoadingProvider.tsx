"use client"

import useLoading from "@/hooks/store/useLoading"
import { usePathname } from "next/navigation"
import { PropsWithChildren, useEffect } from "react"

const LoadingProvider = ({ children }: PropsWithChildren) => {
  const { loading, cancelLoading } = useLoading()
  const pathname = usePathname()

  useEffect(() => {
    cancelLoading()
  }, [pathname])

  return (
    <>
      {children}
      <div
        className={`bg-primary h-1 w-screen rounded-l-full fixed top-0 right-0 z-50 transition-all ${
          loading ? "loading-animation opacity-100" : "opacity-0"
        }`}
      />
    </>
  )
}

export default LoadingProvider
