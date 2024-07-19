"use client"

import Carousel from "@/components/Carousel"
import { SwiperSlide } from "swiper/react"
import { v4 } from "uuid"

import { ArticlesCategoriesT } from "@/types/datas.types"
import ArticleCategory from "../ArticleCategory"

type ArticlesCategoriesCarouselT = {
  articlesCategories: (ArticlesCategoriesT | null)[]
}

const swiperSlideClassName = "flex-1 slide-box-w md:slide-w-1/2 pb-6 lg:slide-w-1/3"

const ArticlesCategoriesCarousel = ({ articlesCategories }: ArticlesCategoriesCarouselT) => {
  const articlesCategoriesIsEmpty = articlesCategories.every((category) => category === null)

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
            <div className="skeleton center bg-base-300 w-full h-[247px]">
              {articlesCategoriesIsEmpty ? (
                <span className="empty-data-alert">بزودی منتشر می‌شود</span>
              ) : null}
            </div>
          </SwiperSlide>
        )
      })}
    </Carousel>
  )
}

export default ArticlesCategoriesCarousel
