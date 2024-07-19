"use client"

import Carousel from "@/components/Carousel"
import { SwiperSlide } from "swiper/react"
import { v4 } from "uuid"

import { ArticlesCategoriesT } from "@/types/datas.types"
import ArticleCategory from "../ArticleCategory"

type ArticlesCategoriesCarouselT = {
  articlesCategories: (ArticlesCategoriesT | null)[]
}

const ArticlesCategoriesCarousel = ({ articlesCategories }: ArticlesCategoriesCarouselT) => {
  return (
    <Carousel
      className="container row mt-title gap-3 pb-3"
      breakpoints={{
        540: {
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
            <SwiperSlide
              key={category.id}
              className="!w-full sm:!w-[calc(50%-(0.75rem/2))] pb-6 lg:!w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
            >
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
          <SwiperSlide
            key={v4()}
            className="!w-full sm:!w-[calc(50%-(0.75rem/2))] pb-6 lg:!w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
          >
            <div className="skeleton bg-base-300 w-full h-[247px]"></div>
          </SwiperSlide>
        )
      })}
    </Carousel>
  )
}

export default ArticlesCategoriesCarousel
