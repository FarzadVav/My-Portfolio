"use client"

import Carousel from "@/components/Carousel"
import { SwiperSlide } from "swiper/react"
import { v4 } from "uuid"

import { ArticlesCategoriesT } from "@/types/datas.types"
import ArticleCategory from "../ArticleCategory"

type ArticlesCategoriesCarouselT = {
  articlesCategories: (ArticlesCategoriesT | null)[]
}

const swiperSlideClassName =
  "!w-[calc(90%-(0.75rem/2))] md:!w-[calc(45%-(0.75rem/2))] pb-6 lg:!w-[calc(30.1111111%-(0.75rem-0.75rem/3))]"

const ArticlesCategoriesCarousel = ({ articlesCategories }: ArticlesCategoriesCarouselT) => {
  return (
    <Carousel
      className="container row mt-title gap-3 pb-3"
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {articlesCategories.map((category) => {
        if (category) {
          return (
            <SwiperSlide key={category.id} className={swiperSlideClassName}>
              <ArticleCategory
                className="w-full"
                category="مهندسی نرم افزار"
                picture="/icons/js.png"
                articleCount={23}
                tagsCount={10}
                link=""
              />
            </SwiperSlide>
          )
        }

        return (
          <SwiperSlide key={v4()} className={swiperSlideClassName}>
            <div className="skeleton bg-base-300 w-full h-[247px]"></div>
          </SwiperSlide>
        )
      })}
    </Carousel>
  )
}

export default ArticlesCategoriesCarousel
