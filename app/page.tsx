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
import { BASE_URL } from "@/utils/initialData"
import { calculateEmptyData, fetcher } from "@/utils/functions"
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

const Page = async () => {
  const popularArticles =
    (await fetcher<(ArticlesT | null)[]>(BASE_URL + "/articles/popular")) || []
  const articlesCategories =
    (await fetcher<(ArticlesCategoriesT | null)[]>(BASE_URL + "/articles/categories")) || []
  const articlesTags = await fetcher<ArticlesTagsT[]>(BASE_URL + "/articles/tags")
  const projects = (await fetcher<(ProjectsT | null)[]>(BASE_URL + "/projects/popular")) || []
  const comments =
    (await fetcher<(ArticlesCommentsT | null)[]>(BASE_URL + "/articles/comments/popular")) || []

  calculateEmptyData(popularArticles, 10)
  calculateEmptyData(articlesCategories, 3)
  calculateEmptyData(projects, 2)
  calculateEmptyData(comments, 4)

  const popularArticlesIsEmpty = popularArticles.every((article) => article === null)
  const articlesCategoriesIsEmpty = articlesCategories.every((category) => category === null)
  const commentsIsEmpty = comments.every((comment) => comment === null)

  return (
    <>
      <section className="my-element row flex-col w-full xl:mt-28">
        <div className="w-full relative max-md:hidden">
          {/* icons */}
          <HeroIconAnimation
            className="top-0 left-[24vw] lg:left-[29vw]"
            index={0}
            src={"/icons/react.png"}
            size={64}
            side="LEFT"
          />
          <HeroIconAnimation
            className="top-12 left-[1vw] lg:left-[10vw]"
            index={1}
            src={"/icons/ts.png"}
            size={128}
            side="LEFT"
          />
          <HeroIconAnimation
            className="top-44 left-[17vw] lg:left-[22vw]"
            imageClassName="group-data-[theme='light']/html:brightness-0"
            index={2}
            src={"/icons/next.png"}
            size={96}
            side="LEFT"
          />
          <HeroIconAnimation
            className="top-0 right-[24vw] lg:right-[29vw]"
            index={3}
            src={"/icons/tailwind.png"}
            size={64}
            side="RIGHT"
          />
          <HeroIconAnimation
            className="top-12 right-[1vw] lg:right-[10vw]"
            index={4}
            src={"/icons/js.png"}
            size={128}
            side="RIGHT"
          />
          <HeroIconAnimation
            className="top-44 right-[17vw] lg:right-[22vw]"
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
        {popularArticles.map((article, i) => {
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
              <article className="skeleton center bg-base-300 w-full h-full rounded-box">
                {popularArticlesIsEmpty ? (
                  <span className="empty-data-alert">بزودی منتشر می‌شود</span>
                ) : null}
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
        data={articlesCategories.map((category) => {
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
            <div className="skeleton center bg-base-300 h-60 max-md:slide-box-w max-lg:slide-w-1/2 lg:box-w-1/3">
              {articlesCategoriesIsEmpty ? (
                <span className="empty-data-alert">بزودی منتشر می‌شود</span>
              ) : null}
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
        {projects.map((project) => {
          if (project) {
            return <Project {...project} logo="/icons/mysql.png" />
          }

          return <div className="skeleton w-project-box bg-base-300 w-full h-[413.96px]"></div>
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
        {comments.map((comment, i) => {
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
              <div className="skeleton center bg-base-300 w-full h-full">
                {commentsIsEmpty ? (
                  <span className="empty-data-alert">بزودی منتشر می‌شود</span>
                ) : null}
              </div>
            </HomeCommentAnimation>
          )
        })}
      </div>
    </>
  )
}

export default Page
