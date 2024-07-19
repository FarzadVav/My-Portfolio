"use client"

import { HTMLAttributes } from "react"
import { Swiper } from "swiper/react"
import "swiper/css"

import cn from "@/lib/cn"

type CarouselT = HTMLAttributes<HTMLDivElement> & {
  breakpoints?: { [key: number]: { slidesPerView: number } }
}

const Carousel = ({ className, breakpoints, children, ...props }: CarouselT) => {
  return (
    <div className={cn("container overflow-hidden", className)} {...props}>
      <Swiper
        className="w-full h-full rounded-box"
        navigation
        spaceBetween={12}
        slidesPerView={"auto"}
        breakpoints={breakpoints}
      >
        {children}
      </Swiper>
    </div>
  )
}

export default Carousel
