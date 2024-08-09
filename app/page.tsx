import dynamic from "next/dynamic"
import Link from "next/link"
import React from "react"
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline"

import {
  ArticlesT,
  ArticlesCategoriesT,
  ArticlesCommentsT,
  ArticlesTagsT,
  ProjectsT,
  GeneralInfoT,
} from "@/types/datas.types"
import { fetcher } from "@/utils/fetcher"
import Article from "@/components/Article"
import BgPattern from "@/components/modules/BgPattern"
import TagsCarousel from "@/components/modules/TagsCarousel"
import Project from "@/components/Project"
import HomeComment from "@/components/modules/HomeComment"
import TitleAnimaiton from "@/components/modules/animations/TitleAnimaiton"
import Pageination from "@/components/Pageination"
import ArticleCategory from "@/components/ArticleCategory"
import ProfileAnimation from "@/components/modules/animations/ProfileAnimation"
import AttachedLink from "@/components/AttachedLink"
const HeroIconAnimation = dynamic(
  () => import("@/components/modules/animations/HeroIconAnimation"),
  { ssr: false }
)
const HomeArticleAnimation = dynamic(
  () => import("@/components/modules/animations/HomeArticleAnimation"),
  { ssr: false }
)
const HomeCommentAnimation = dynamic(
  () => import("@/components/modules/animations/HomeCommentAnimation"),
  { ssr: false }
)

const Page = async () => {
  const { data: generalInfo } = await fetcher<GeneralInfoT>("/generalInfo", {
    baseUrl: true,
  })
  const { data: popularArticles } = await fetcher<ArticlesT[]>("/articles?take=10", {
    baseUrl: true,
  })
  const { data: articlesTags } = await fetcher<ArticlesTagsT[]>("/articles/tags", {
    baseUrl: true,
  })
  const { data: projects } = await fetcher<ProjectsT[]>("/projects/random", {
    baseUrl: true,
  })
  const { data: categories } = await fetcher<ArticlesCategoriesT[]>("/articles/categories", {
    baseUrl: true,
  })
  const { data: comments } = await fetcher<ArticlesCommentsT[]>(
    "/articles/comments/popular?take=4",
    { baseUrl: true }
  )

  return (
    <>
      <section className="pt-element row w-full flex-col relative max-sm:overflow-hidden xl:pt-28 2xl:container">
        <div className="w-full relative max-md:hidden">
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
        </div>

        <ProfileAnimation src={generalInfo?.profile || ""} />

        <h1 className="font-title container mt-element w-full text-4xl text-center leading-tight relative z-10 md:w-3/4 md:text-5xl xl:mt-16 xl:text-6xl 2xl:text-7xl">
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

      {popularArticles?.length === 10 ? (
        <>
          <main className="box-wrapper mt-element sm:h-[2143px] md:h-[1233px] lg:h-[1230px] xl:h-[814.8px] 2xl:h-[917.2px]">
            {popularArticles.map((article, i) => (
              <HomeArticleAnimation
                className="sm:box-w-1/2 max-sm:slide-box-w md:box-w-1/3 md:last:hidden lg:last:flex lg:box-w-1/4 xl:box-w-1/5"
                key={article.id}
                index={i}
              >
                <Article {...article} />
              </HomeArticleAnimation>
            ))}
          </main>

          <AttachedLink className="mt-element xl:mt-[164px]" href={"/articles"}>
            مشاهده همه مقالات
          </AttachedLink>
        </>
      ) : null}

      {categories?.length ? (
        <>
          <TitleAnimaiton className="container mt-element">
            <h2>دسته بندی مقالات</h2>
          </TitleAnimaiton>
          <Pageination
            className="box-wrapper-xl mt-title h-max"
            data={categories.map((category) => (
              <ArticleCategory
                key={category.id}
                className="slide-box-w md:slide-w-1/2 lg:slide-w-1/3"
                {...category}
              />
            ))}
            pageCount={3}
          />
        </>
      ) : null}

      {articlesTags?.length ? <TagsCarousel tags={articlesTags} /> : null}

      {projects?.length ? (
        <>
          <TitleAnimaiton className="container mt-element">
            <h3 className="title-xl">پروژه های منتخب</h3>
          </TitleAnimaiton>
          <div className="box-wrapper-xl mt-title">
            {projects.map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </div>

          <AttachedLink className="mt-title" href={"/about#projects"}>
            مشاهده همه پروژه ها
          </AttachedLink>
        </>
      ) : null}

      {comments?.length === 4 ? (
        <>
          <TitleAnimaiton className="container mt-element">
            <h4 className="title-xl">برترین نظرات سایت</h4>
          </TitleAnimaiton>
          <div className="home-comments">
            {comments.map((comment, i) => (
              <HomeCommentAnimation index={i} key={comment.id}>
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
            ))}
          </div>
        </>
      ) : null}
    </>
  )
}

export default Page
