import Link from "next/link"
import React from "react"
import { ArrowDownCircleIcon, LinkIcon } from "@heroicons/react/24/outline"

import {
  ArticlesT,
  ArticlesCategoriesT,
  ArticlesCommentsT,
  ArticlesTagsT,
  ProjectsT,
} from "@/types/datas.types"
import { baseUrl } from "@/utils/initialData"
import { calculateEmptyData, fetcher } from "@/utils/functions"
import Article from "@/components/Article"
import BgPattern from "@/components/modules/BgPattern"
import ArticlesCategoriesCarousel from "@/components/modules/ArticlesCategoriesCarousel"
import TagsCarousel from "@/components/modules/TagsCarousel"
import Project from "@/components/Project"
import Comment from "@/components/Comment"
import HeroIcons from "@/components/modules/animations/HeroIcons"
import HeroProfile from "@/components/modules/animations/HeroProfile"
import TitleAnimaiton from "@/components/modules/animations/TitleAnimaiton"

const Page = async () => {
  const popularArticles = (await fetcher<(ArticlesT | null)[]>(baseUrl + "/articles/popular")) || []
  const articlesCategories =
    (await fetcher<(ArticlesCategoriesT | null)[]>(baseUrl + "/articles/categories")) || []
  const articlesTags = await fetcher<ArticlesTagsT[]>(baseUrl + "/articles/tags")
  const projects = (await fetcher<(ProjectsT | null)[]>(baseUrl + "/projects/popular")) || []
  const comments =
    (await fetcher<(ArticlesCommentsT | null)[]>(baseUrl + "/articles/comments/popular")) || []

  calculateEmptyData(popularArticles, 10)
  calculateEmptyData(articlesCategories, 3)
  articlesCategories[0] = {}
  articlesCategories[4] = null
  calculateEmptyData(projects, 2)
  calculateEmptyData(comments, 7)

  return (
    <>
      <section className="my-element row flex-col w-full xl:mt-28">
        <div className="w-full relative max-md:hidden">
          {/* icons */}
          <HeroIcons
            className="top-0 left-[24vw] lg:left-[29vw]"
            src={"/icons/react.png"}
            size={64}
            side="LEFT"
          />
          <HeroIcons
            className="top-12 left-[1vw] lg:left-[10vw]"
            src={"/icons/ts.png"}
            size={128}
            side="LEFT"
          />
          <HeroIcons
            className="top-44 left-[17vw] lg:left-[22vw]"
            imageClassName="group-data-[theme='light']/html:brightness-0"
            src={"/icons/next.png"}
            size={96}
            side="LEFT"
          />
          <HeroIcons
            className="top-0 right-[24vw] lg:right-[29vw]"
            src={"/icons/tailwind.png"}
            size={64}
            side="RIGHT"
          />
          <HeroIcons
            className="top-12 right-[1vw] lg:right-[10vw]"
            src={"/icons/js.png"}
            size={128}
            side="RIGHT"
          />
          <HeroIcons
            className="top-44 right-[17vw] lg:right-[22vw]"
            src={"/icons/mysql.png"}
            size={96}
            side="RIGHT"
          />
          {/* icons */}
        </div>
        <div className="center size-[248px] relative md:mb-6 lg:mb-0">
          {/* blured box */}
          <div className="blured-box bg-secondary left-24"></div>
          <div className="blured-box bg-info right-24"></div>
          {/* blured box */}
          <HeroProfile />
        </div>
        <h1 className="container mt-element title-2xl w-full block text-center leading-tight relative z-10 md:w-3/4 xl:mt-16">
          فرزاد هستم برنامه نویس
          <p className="font-base-bold text-primary inline-block mx-3">
            <span>Next.js</span>
          </p>
          برای آموش و همکاری با من همراه باش
        </h1>

        <div className="row mt-element">
          <Link className="btn btn-neutral" href={""}>
            دیدن رزومه
          </Link>
          <Link className="btn btn-ghost mr-3" href={""}>
            همکاری با من
          </Link>
        </div>

        <ArrowDownCircleIcon className="icon-xl mt-element" />
        <BgPattern />
      </section>
      <main className="box-wrapper mt-element home-articles">
        {popularArticles.map((article) => {
          if (article) {
            return (
              <Article
                className="sm:box-w-1/2 md:box-w-1/3 max-sm:slide-box-w lg:box-w-1/4 xl:box-w-1/5"
                picture="/images/article.jpg"
                category="جاواسکریپت"
                title="چگونه آبجکا ها را deep merg کنیم؟"
                date={new Date()}
                comments={23}
                score={3.6}
              />
            )
          }

          return (
            <article className="skeleton bg-base-300 box-w-1/2 h-[302.76px] rounded-box max-sm:hidden md:box-w-1/3 lg:box-w-1/4 xl:box-w-1/5"></article>
          )
        })}
      </main>

      <TitleAnimaiton className="container mt-element lg:mt-48">
        <h2 className="title-xl">دسته بندی مقالات</h2>
      </TitleAnimaiton>
      <ArticlesCategoriesCarousel articlesCategories={articlesCategories} />
      {articlesTags?.length ? <TagsCarousel tags={articlesTags} /> : null}

      <TitleAnimaiton className="container mt-element">
        <h3 className="title-xl">پروژه های منتخب وب</h3>
      </TitleAnimaiton>
      <div className="container row mt-title gap-3 pb-3 overflow-x-auto">
        {projects.map((project) => {
          if (project) {
            return (
              <Project
                className="w-full lg:box-w-1/2 max-md:slide-box-w"
                {...project}
                logo="/icons/mysql.png"
              />
            )
          }

          return (
            <div className="skeleton bg-base-300 w-full h-[413.96px] lg:box-w-1/2 max-md:slide-box-w"></div>
          )
        })}
      </div>
      <Link className="link-hover center text-primary text-lg mt-6" href={"/about#projects"}>
        <LinkIcon className="icon" />
        <span className="mr-2">مشاهده همه پروژه ها</span>
      </Link>

      <TitleAnimaiton className="container mt-element">
        <h4 className="title-xl">برترین نظرات سایت</h4>
      </TitleAnimaiton>
      <div className="box-wrapper-lg mt-title home-comments md:justify-center">
        {comments.map((comment) => {
          if (comment) {
            return (
              <Comment
                username={"فرزاد وحدتی نژاد"}
                score={4.9}
                text={
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون است."
                }
                picture="/images/profile.jpg"
                link=""
                like={13}
                dislike={32996}
              />
            )
          }

          return <div className="skeleton bg-base-300 w-full h-[294.66px]"></div>
        })}
      </div>
    </>
  )
}

export default Page
