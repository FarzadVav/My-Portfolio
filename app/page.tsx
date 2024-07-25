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
import { fetcher } from "@/utils/fetcher"
import Article from "@/components/Article"
import BgPattern from "@/components/modules/BgPattern"
import TagsCarousel from "@/components/modules/TagsCarousel"
import Project from "@/components/Project"
import HomeComment from "@/components/modules/HomeComment"
import HeroIconAnimation from "@/components/modules/animations/HeroIconAnimation"
import ProfileAnimation from "@/components/modules/animations/ProfileAnimation"
import TitleAnimaiton from "@/components/modules/animations/TitleAnimaiton"
import Pageination from "@/components/Pageination"
import ArticleCategory from "@/components/ArticleCategory"
import HomeArticleAnimation from "@/components/modules/animations/HomeArticleAnimation"
import HomeCommentAnimation from "@/components/modules/animations/HomeCommentAnimation"
import { getEmptyData } from "@/utils/calculateEmptyData"

const Page = async () => {
  const popularArticles = await fetcher<ArticlesT[]>("/articles/popular", { baseUrl: true })
  const articlesTags = await fetcher<ArticlesTagsT[]>("/articles/tags", { baseUrl: true })
  const projects = await fetcher<ProjectsT[]>("/projects/popular", { baseUrl: true })
  const comments = await fetcher<ArticlesCommentsT[]>("/articles/comments/popular", {
    baseUrl: true,
  })
  const articlesCategories = await fetcher<ArticlesCategoriesT[]>("/articles/categories", {
    baseUrl: true,
  })

  return (
    <>
      <section className="my-element row w-full flex-col relative xl:mt-28 2xl:container">
        <div className="w-full relative max-md:hidden">
          {/* icons */}
          <HeroIconAnimation
            className="top-0 left-[23%] lg:left-[30%]"
            index={0}
            src={"/icons/react.png"}
            size={64}
            side="LEFT"
          />
          <HeroIconAnimation
            className="top-12 left-[5%] lg:left-[8%]"
            index={1}
            src={"/icons/ts.png"}
            size={128}
            side="LEFT"
          />
          <HeroIconAnimation
            className="top-44 left-[18%] lg:left-[22%]"
            imageClassName="group-data-[theme='light']/html:brightness-0"
            index={2}
            src={"/icons/next.png"}
            size={96}
            side="LEFT"
          />
          <HeroIconAnimation
            className="top-0 right-[23%] lg:right-[30%]"
            index={3}
            src={"/icons/tailwind.png"}
            size={64}
            side="RIGHT"
          />
          <HeroIconAnimation
            className="top-12 right-[5%] lg:right-[8%]"
            index={4}
            src={"/icons/js.png"}
            size={128}
            side="RIGHT"
          />
          <HeroIconAnimation
            className="top-44 right-[18%] lg:right-[22%]"
            index={5}
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
          <ProfileAnimation />
        </div>
        <h1 className="container mt-element title-2xl w-full block text-center leading-tight relative z-10 md:w-3/4 xl:mt-16">
          فرزاد هستم برنامه نویس
          <p className="text-primary inline-block mx-3">
            <span>فرانت اند</span>
          </p>
          برای آموش و همکاری با من همراه باش
        </h1>

        <div className="row mt-element">
          <Link className="btn btn-neutral" href={"/about#cv"}>
            دیدن رزومه
          </Link>
          <Link className="btn btn-ghost mr-3" href={"/contact"}>
            همکاری با من
          </Link>
        </div>

        <ArrowDownCircleIcon className="icon-xl mt-element" />
        <BgPattern />
      </section>
      <main className="box-wrapper mt-element">
        {getEmptyData<ArticlesT>(popularArticles, 10).map((article, i) => {
          if (article) {
            return (
              <HomeArticleAnimation index={i}>
                <Article
                  picture="/images/article.jpg"
                  category="جاواسکریپت"
                  title="چگونه آبجکا ها را deep merg کنیم؟"
                  date={new Date()}
                  comments={23}
                  score={3.6}
                />
              </HomeArticleAnimation>
            )
          }

          return (
            <HomeArticleAnimation
              className="h-80 sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 md:last:hidden lg:last:block lg:box-w-1/4 xl:box-w-1/5"
              index={i}
            >
              <article className="skeleton w-full h-full">
                <span className="empty-data-alert">بزودی منتشر می‌شود</span>
              </article>
            </HomeArticleAnimation>
          )
        })}
      </main>

      <TitleAnimaiton className="container mt-element lg:mt-48">
        <h2 className="title-xl">دسته بندی مقالات</h2>
      </TitleAnimaiton>
      <Pageination
        className="box-wrapper-xl mt-title"
        data={getEmptyData<ArticlesCategoriesT>(articlesCategories, 3).map((category) => {
          if (category) {
            return (
              <ArticleCategory
                category="مهندسی نرم افزار"
                picture="/icons/js.png"
                articleCount={23}
                tagsCount={10}
                link=""
              />
            )
          }

          return (
            <div className="skeleton h-60 max-md:slide-box-w max-lg:slide-w-1/2 lg:box-w-1/3">
              <span className="empty-data-alert">بزودی منتشر می‌شود</span>
            </div>
          )
        })}
        pageCount={3}
      />
      {articlesTags?.length ? <TagsCarousel tags={articlesTags} /> : null}

      <TitleAnimaiton className="container mt-element">
        <h3 className="title-xl">پروژه های منتخب وب</h3>
      </TitleAnimaiton>
      <div className="box-wrapper-xl mt-title">
        {getEmptyData<ProjectsT>(projects, 2).map((project) => {
          if (project) {
            return <Project {...project} logo="/icons/mysql.png" />
          }

          return <div className="skeleton w-project h-project"></div>
        })}
      </div>
      <Link className="link-hover center text-primary text-lg mt-6" href={"/about#projects"}>
        <LinkIcon className="icon" />
        <span className="mr-2">مشاهده همه پروژه ها</span>
      </Link>

      <TitleAnimaiton className="container mt-element">
        <h4 className="title-xl">برترین نظرات سایت</h4>
      </TitleAnimaiton>
      <div className="home-comments">
        {getEmptyData<ArticlesCommentsT>(comments, 4).map((comment, i) => {
          if (comment) {
            return (
              <HomeCommentAnimation index={i}>
                <HomeComment
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
              </HomeCommentAnimation>
            )
          }

          return (
            <HomeCommentAnimation index={i} className="h-80">
              <div className="skeleton w-full h-full">
                <span className="empty-data-alert">بزودی منتشر می‌شود</span>
              </div>
            </HomeCommentAnimation>
          )
        })}
      </div>
    </>
  )
}

export default Page
