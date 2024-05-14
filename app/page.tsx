import Image from "next/image"
import React from "react"

const Page = () => {
  return (
    <>
      <section className="mt-element row flex-col w-full xl:mt-28">
        <div className="w-60 h-60 relative">
          <div className="blured-box bg-secondary top-0 left-0"></div>
          <div className="blured-box bg-primary top-1/3 righ-0 -translate-y-1/2"></div>
          <div className="blured-box bg-info top-60 left-1/2 -translate-y-full -translate-x-1/2"></div>
          <Image className="bg-neutral rounded-full relative z-10" width={240} height={240} src={""} alt="" />
        </div>
      </section>
    </>
  )
}

export default Page
