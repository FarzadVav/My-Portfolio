"use client"

import { HTMLAttributes } from "react"
import { Swiper } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import cn from "@/lib/cn"

type CarouselT = HTMLAttributes<HTMLDivElement> & {
  breakpoints?: { [key: number]: { slidesPerView: number } }
}

const Carousel = ({ className, breakpoints, children, ...props }: CarouselT) => {
  return (
    <div className={cn("container overflow-hidden", className)} {...props}>
      <Swiper
        className="w-full h-full rounded-md"
        navigation
        spaceBetween={12}
        slidesPerView={"auto"}
        breakpoints={breakpoints}
        modules={[Navigation]}
      >
        {children}
      </Swiper>
    </div>
  )
}

export default Carousel
