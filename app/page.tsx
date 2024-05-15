import Image from "next/image"
import React from "react"

const Page = () => {
  return (
    <>
      <section className="my-element row flex-col w-full relative xl:my-28">
        {/* icons */}
        <div className="hero_icons-hover w-16 h-16 rounded-full absolute -top-10 left-96">
          <Image
            className="rounded-full"
            width={64}
            height={64}
            src={"/icons/react.png"}
            alt="react"
          />
        </div>
        <div className="hero_icons-hover w-32 h-32 rounded-full absolute -top-10 left-20">
          <Image className="rounded-full" width={128} height={128} src={"/icons/ts.png"} alt="ts" />
        </div>
        <div className="hero_icons-hover w-24 h-24 rounded-full absolute top-32 left-60">
          <Image
            className="rounded-full"
            width={96}
            height={96}
            src={"/icons/next.png"}
            alt="next"
          />
        </div>
        <div className="hero_icons-hover-2 w-16 h-16 rounded-full absolute -top-10 right-96">
          <Image
            className="rounded-full"
            width={64}
            height={64}
            src={"/icons/tailwind.png"}
            alt="tailwind"
          />
        </div>
        <div className="hero_icons-hover-2 w-32 h-32 rounded-full absolute -top-10 right-20">
          <Image className="rounded-full" width={128} height={128} src={"/icons/js.png"} alt="js" />
        </div>
        <div className="hero_icons-hover-2 w-24 h-24 rounded-full absolute top-32 right-60">
          <Image
            className="rounded-full"
            width={128}
            height={128}
            src={"/icons/mysql.png"}
            alt="mysql"
          />
        </div>
        {/* icons */}
        <div className="w-60 h-60 relative">
          {/* blured */}
          <div className="blured-box bg-secondary top-0 left-0"></div>
          <div className="blured-box bg-info top-0 righ-0"></div>
          <div className="blured-box bg-primary -bottom-32 left-1/2 -translate-x-1/2"></div>
          {/* blured */}
          <Image
            className="bg-neutral ring-8 ring-base-100 rounded-full relative z-10"
            width={240}
            height={240}
            src={"/images/profile.jpg"}
            alt=""
          />
        </div>
        <h1 className="mt-element title-xl block w-3/4 text-center relative z-10 xl:mt-16">
          فرزاد هستم برنامه نویس
          <p className="text-primary inline-block text-6xl mx-2">
            <span>Next.js</span>
          </p>
          برای آموش و همکاری با من همراه باش
        </h1>
      </section>
    </>
  )
}

export default Page
