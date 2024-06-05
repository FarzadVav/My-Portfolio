import Link from "next/link"
import React from "react"
import { ArrowDownCircleIcon, LinkIcon } from "@heroicons/react/24/outline"

import Article from "@/components/Article"
import BgPattern from "@/components/modules/BgPattern"
import ArticleCategory from "@/components/ArticleCategory"
import Project from "@/components/Project"
import TagsCarousel from "@/components/modules/TagsCarousel"
import Comment from "@/components/Comment"
import HeroIcons from "@/components/modules/animations/HeroIcons"
import HeroProfile from "@/components/modules/animations/HeroProfile"
import TitleAnimaiton from "@/components/modules/animations/TitleAnimaiton"

const techs = [
  { name: "Javascript", color: "#f9a0b3" },
  { name: "Typescript", color: "#f9a0b3" },
  { name: "React", color: "#f9a0b3" },
  { name: "Next", color: "#f9a0b3" },
  { name: "SWR", color: "#f9a0b3" },
  { name: "MySql", color: "#f9a0b3" },
]

const Page = () => {
  return (
    <>
      <section className="my-element row flex-col w-full relative xl:mt-28">
        {/* icons */}
        <HeroIcons className="top-0 left-1/3" src={"/icons/react.png"} size={64} side="LEFT" />
        <HeroIcons className="top-12 left-52" src={"/icons/ts.png"} size={128} side="LEFT" />
        <HeroIcons
          className="top-44 left-1/4"
          imageClassName="group-data-[theme='light']/html:brightness-0"
          src={"/icons/next.png"}
          size={96}
          side="LEFT"
        />
        <HeroIcons className="top-0 right-1/3" src={"/icons/tailwind.png"} size={64} side="RIGHT" />
        <HeroIcons className="top-12 right-52" src={"/icons/js.png"} size={128} side="RIGHT" />
        <HeroIcons className="top-44 right-1/4" src={"/icons/mysql.png"} size={96} side="RIGHT" />
        {/* icons */}
        <div className="center size-[248px] relative">
          {/* blured box */}
          <div className="blured-box bg-secondary left-24"></div>
          <div className="blured-box bg-info right-24"></div>
          {/* blured box */}
          <HeroProfile />
        </div>
        <h1 className="mt-element title-2xl w-3/4 block text-center leading-tight relative z-10 xl:mt-16">
          فرزاد هستم برنامه نویس
          <p className="font-base-bold text-primary inline-block text-6xl mx-3">
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

      <main className="container mt-element home-articles [&_article:nth-child(even)]:translate-y-32">
        <div className="row w-full flex-wrap justify-between gap-3">
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture="/images/article.jpg"
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
            comments={23}
            score={3.6}
          />
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture="/images/article.jpg"
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
            comments={23}
            score={3.6}
          />
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture="/images/article.jpg"
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
            comments={23}
            score={3.6}
          />
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture="/images/article.jpg"
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
            comments={23}
            score={3.6}
          />
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture="/images/article.jpg"
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
            comments={23}
            score={3.6}
          />
        </div>
        <div className="row w-full flex-wrap justify-between gap-3 mt-3">
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture="/images/article.jpg"
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
            comments={23}
            score={3.6}
          />
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture="/images/article.jpg"
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
            comments={23}
            score={3.6}
          />
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture="/images/article.jpg"
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
            comments={23}
            score={3.6}
          />
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture="/images/article.jpg"
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
            comments={23}
            score={3.6}
          />
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture="/images/article.jpg"
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
            comments={23}
            score={3.6}
          />
        </div>
      </main>

      <div className="container mt-element xl:mt-48">
        <TitleAnimaiton>
          <h2 className="title-xl">دسته بندی مقالات</h2>
        </TitleAnimaiton>
        <div className="row mt-title w-full flex-wrap gap-3 justify-between">
          <ArticleCategory
            className="w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
            category="مهندسی نرم افزار"
            picture="/icons/js.png"
            articleCount={23}
            tagsCount={10}
            link=""
          />
          <ArticleCategory
            className="w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
            category="مهندسی نرم افزار"
            picture="/icons/js.png"
            articleCount={23}
            tagsCount={10}
            link=""
          />
          <ArticleCategory
            className="w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
            category="برنامه نویسی وب"
            picture="/icons/ts.png"
            articleCount={23}
            tagsCount={10}
            link=""
          />
          <ArticleCategory
            className="w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
            category="مهندسی نرم افزار"
            picture="/icons/js.png"
            articleCount={23}
            tagsCount={10}
            link=""
          />
          <ArticleCategory
            className="w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
            category="برنامه نویسی وب"
            picture="/icons/ts.png"
            articleCount={23}
            tagsCount={10}
            link=""
          />
          <ArticleCategory
            className="w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
            category="مهندسی نرم افزار"
            picture="/icons/js.png"
            articleCount={23}
            tagsCount={10}
            link=""
          />
        </div>
      </div>
      <TagsCarousel />

      <div className="container mt-element">
        <TitleAnimaiton>
          <h3 className="title-xl">پروژه های منتخب وب</h3>
        </TitleAnimaiton>
        <div className="row mt-title w-full gap-3">
          <Project
            className="w-[calc(50%-0.75rem)]"
            name="کلون Jobvision به صورت Realtime"
            techs={techs}
            logo="/icons/mysql.png"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است"
            link=""
          />
          <Project
            className="w-[calc(50%-0.75rem)]"
            name="کلون Jobvision به صورت Realtime"
            techs={techs}
            logo="/icons/mysql.png"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است"
            link=""
          />
        </div>
        <Link className="link-hover center text-primary text-lg mt-6" href={"/about#projects"}>
          <LinkIcon className="icon" />
          <span className="mr-2">مشاهده همه پروژه ها</span>
        </Link>
      </div>

      <div className="container mt-element">
        <TitleAnimaiton>
          <h4 className="title-xl">برترین نظرات سایت</h4>
        </TitleAnimaiton>
        <div className="mt-title w-full">
          <div className="center w-full gap-3">
            <Comment
              className="w-1/3"
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
            <Comment
              className="w-1/3"
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
          </div>

          <div className="center w-full gap-3 mt-3">
            <Comment
              className="w-1/3"
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
            <Comment
              className="w-1/3"
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
            <Comment
              className="w-1/3"
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
          </div>

          <div className="center w-full gap-3 mt-3">
            <Comment
              className="w-1/3"
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
            <Comment
              className="w-1/3"
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
