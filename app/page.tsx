import Image from "next/image"
import Link from "next/link"
import React from "react"
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline"

import Article from "@/components/Article"
import BgPattern from "@/components/modules/BgPattern"
import ArticleCategory from "@/components/ArticleCategory"
import Project from "@/components/Project"
import TagsCarousel from "@/components/modules/TagsCarousel"
import Comment from "@/components/Comment"

const techs = [
  { name: "Javascript", classColor: "bg-yellow-500/10 text-yellow-500" },
  { name: "Typescript", classColor: "bg-blue-500/10 text-blue-500" },
  { name: "React", classColor: "bg-info/10 text-info" },
  { name: "Next", classColor: "bg-black/10 text-black" },
  { name: "SWR", classColor: "bg-base-content/10 text-base-content" },
  { name: "MySql", classColor: "bg-orange-500/10 text-orange-500" },
]

const Page = () => {
  return (
    <>
      <section className="my-element row flex-col w-full relative xl:mt-28">
        <div className="hero_profile size-60 relative">
          {/* icons */}
          <div className="icons-hover size-16 -top-10 right-80">
            <Image
              className="rounded-full"
              width={64}
              height={64}
              src={"/icons/react.png"}
              alt="react"
            />
          </div>
          <div className="icons-hover size-32 top-0 -left-[475px]">
            <Image
              className="rounded-full"
              width={128}
              height={128}
              src={"/icons/ts.png"}
              alt="ts"
            />
          </div>
          <div className="icons-hover size-24 top-32 right-[410px]">
            <Image
              className="rounded-full group-data-[theme='light']/html:brightness-0"
              width={96}
              height={96}
              src={"/icons/next.png"}
              alt="next"
            />
          </div>

          <div className="icons-hover-2 size-16 -top-10 left-80">
            <Image
              className="rounded-full"
              width={64}
              height={64}
              src={"/icons/tailwind.png"}
              alt="tailwind"
            />
          </div>
          <div className="icons-hover-2 size-32 top-0 -right-[475px]">
            <Image
              className="rounded-full"
              width={128}
              height={128}
              src={"/icons/js.png"}
              alt="js"
            />
          </div>
          <div className="icons-hover-2 size-24 top-32 left-[410px]">
            <Image
              className="rounded-full"
              width={128}
              height={128}
              src={"/icons/mysql.png"}
              alt="mysql"
            />
          </div>
          {/* icons */}

          {/* blured box */}
          <div className="blured-box bg-secondary left-24"></div>
          <div className="blured-box bg-info right-24"></div>
          {/* blured box */}

          <div className="center bg-neutral mask mask-squircle size-[248px]">
            <Image
              className="bg-base-100 mask mask-squircle relative z-10"
              width={240}
              height={240}
              src={"/images/profile.jpg"}
              alt=""
            />
          </div>
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

      <main className="container mt-element home-articles">
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
        <h2 className="center title-xl">دسته بندی مقالات</h2>
        <div className="row mt-element w-full flex-wrap gap-3 justify-between">
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
        <h2 className="center title-xl">پروژه های منتخب وب</h2>
        <div className="row mt-element w-full flex-wrap gap-3 justify-between">
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
      </div>

      <div className="container mt-element">
        <h2 className="center title-xl">برترین نظرات سایت</h2>
        <div className="mt-element w-full">
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
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
