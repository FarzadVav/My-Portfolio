import Image from "next/image"
import Link from "next/link"
import React from "react"
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline"

import Article from "@/components/Article"
import BgPattern from "@/components/modules/BgPattern"
import ArticleCategory from "@/components/ArticleCategory"
import Project from "@/components/Project"

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
      <section className="my-element row flex-col w-full relative xl:my-28">
        {/* icons */}
        <div className="hero_icons-hover w-16 h-16 rounded-full absolute -top-10 left-96">
          <Image
            className="rounded-full"
            width={64}
            height={64}
            src={"/icons/react.png"}
            alt="react"
          />
        </div>
        <div className="hero_icons-hover w-32 h-32 rounded-full absolute -top-10 left-20">
          <Image className="rounded-full" width={128} height={128} src={"/icons/ts.png"} alt="ts" />
        </div>
        <div className="hero_icons-hover w-24 h-24 rounded-full absolute top-32 left-60">
          <Image
            className="rounded-full"
            width={96}
            height={96}
            src={"/icons/next.png"}
            alt="next"
          />
        </div>
        <div className="hero_icons-hover-2 w-16 h-16 rounded-full absolute -top-10 right-96">
          <Image
            className="rounded-full"
            width={64}
            height={64}
            src={"/icons/tailwind.png"}
            alt="tailwind"
          />
        </div>
        <div className="hero_icons-hover-2 w-32 h-32 rounded-full absolute -top-10 right-20">
          <Image className="rounded-full" width={128} height={128} src={"/icons/js.png"} alt="js" />
        </div>
        <div className="hero_icons-hover-2 w-24 h-24 rounded-full absolute top-32 right-60">
          <Image
            className="rounded-full"
            width={128}
            height={128}
            src={"/icons/mysql.png"}
            alt="mysql"
          />
        </div>
        {/* icons */}
        <div className="w-60 h-60 relative">
          {/* blured */}
          <div className="blured-box bg-secondary top-0 left-0"></div>
          <div className="blured-box bg-info top-0 righ-0"></div>
          <div className="blured-box bg-primary -bottom-32 left-1/2 -translate-x-1/2"></div>
          {/* blured */}
          <div className="center bg-base-300 mask mask-squircle w-[248px] h-[248px]">
            <Image
              className="bg-base-100 mask mask-squircle relative z-10"
              width={240}
              height={240}
              src={"/images/profile.jpg"}
              alt=""
            />
          </div>
        </div>
        <h1 className="mt-element title-xl block w-3/4 text-center relative z-10 xl:mt-16">
          فرزاد هستم برنامه نویس
          <p className="text-primary inline-block text-6xl mx-2">
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
            picture=""
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
          />
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture=""
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
          />
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture=""
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
          />
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture=""
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
          />
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture=""
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
          />
        </div>
        <div className="row w-full flex-wrap justify-between gap-3 mt-3">
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture=""
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
          />
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture=""
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
          />
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture=""
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
          />
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture=""
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
          />
          <Article
            className="w-[calc(20%-(0.75rem-0.75rem/5))]"
            picture=""
            category="جاواسکریپت"
            title="چگونه آبجکا ها را deep merg کنیم؟"
            date={new Date()}
          />
        </div>
      </main>
      <div className="container mt-element xl:mt-44">
        <h2 className="center title-lg">دسته بندی مقالات</h2>
        <div className="row mt-element w-full flex-wrap gap-3 justify-between">
          <ArticleCategory
            className="w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
            category="مهندسی نرم افزار"
            picture="/icons/js.png"
            articleCount={19}
            link=""
          />
          <ArticleCategory
            className="w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
            category="مهندسی نرم افزار"
            picture="/icons/js.png"
            articleCount={19}
            link=""
          />
          <ArticleCategory
            className="w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
            category="برنامه نویسی وب"
            picture="/icons/ts.png"
            articleCount={19}
            link=""
          />
          <ArticleCategory
            className="w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
            category="مهندسی نرم افزار"
            picture="/icons/js.png"
            articleCount={19}
            link=""
          />
          <ArticleCategory
            className="w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
            category="برنامه نویسی وب"
            picture="/icons/ts.png"
            articleCount={19}
            link=""
          />
          <ArticleCategory
            className="w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
            category="مهندسی نرم افزار"
            picture="/icons/js.png"
            articleCount={19}
            link=""
          />
        </div>
      </div>
      <div className="container mt-element">
        <h2 className="center title-lg">پروژه های منتخب وب</h2>
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
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است"
            link=""
          />
        </div>
      </div>
    </>
  )
}

export default Page
