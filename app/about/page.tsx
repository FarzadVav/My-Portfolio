import Link from "next/link"
import {
  AcademicCapIcon,
  CommandLineIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"

import PagesHero from "@/components/PagesHero"
import Skills from "@/components/modules/Skills"
import Project from "@/components/Project"
import TitleAnimaiton from "@/components/modules/animations/TitleAnimaiton"

const links = [
  { name: "مهارت ها", href: "#skills" },
  { name: "نمونه کار", href: "#projects" },
  { name: "رزومه", href: "#cv" },
]

const skills = [
  { name: "Typescript", color: "#90fa9b", score: 3 },
  { name: "React", color: "#90fa9b", score: 3 },
  { name: "Javascript", color: "#90fa9b", score: 3 },
  { name: "Next", color: "#90fa9b", score: 3 },
  { name: "SWR", color: "#90fa9b", score: 3 },
  { name: "MySql", color: "#90fa9b", score: 3 },
]

const techs = [
  { name: "Javascript", color: "#90fa9b" },
  { name: "Typescript", color: "#90fa9b" },
  { name: "React", color: "#90fa9b" },
  { name: "Next", color: "#90fa9b" },
  { name: "SWR", color: "#90fa9b" },
  { name: "MySql", color: "#90fa9b" },
]

const Page = () => {
  return (
    <>
      <PagesHero
        picture="/images/smart-cv.png"
        title="من فرزاد وحدتی نژاد"
        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است"
        links={links}
      />

      <div className="container row flex-wrap">
        <div className="center border-light w-1/2 py-6 lg:w-1/4 max-lg:border-b">
          <CommandLineIcon className="icon" />
          <p className="font-base-bold mr-3 max-sm:text-sm">تجربه دو ساله</p>
        </div>
        <div className="center border-r border-light w-1/2 py-6 lg:w-1/4 max-lg:border-b">
          <AcademicCapIcon className="icon" />
          <p className="font-base-bold mr-3 max-sm:text-sm">دانشجوی کامپیوتر</p>
        </div>
        <div className="center border-light w-1/2 py-6 lg:border-r lg:w-1/4">
          <UserGroupIcon className="icon" />
          <p className="font-base-bold mr-3 max-sm:text-sm">مهارت کار تیمی</p>
        </div>
        <div className="center border-r border-light w-1/2 py-6 lg:w-1/4">
          <PresentationChartLineIcon className="icon" />
          <p className="font-base-bold mr-3 max-sm:text-sm">عاشق یادگیری</p>
        </div>
      </div>

      <TitleAnimaiton className="container mt-element" id="skills">
        <h2 className="title-xl">مهارت های من</h2>
      </TitleAnimaiton>
      <div className="container row mt-title gap-3 sm:flex-wrap sm:justify-center max-sm:pb-3 max-sm:overflow-x-auto">
        <Skills
          className="max-sm:min-w-[90%] max-sm:flex-1 sm:w-[calc(50%-(0.75rem/2))] md:w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
          title="Front-End"
          skills={skills}
        />
        <Skills
          className="max-sm:min-w-[90%] max-sm:flex-1 sm:w-[calc(50%-(0.75rem/2))] md:w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
          title="Front-End"
          skills={skills}
        />
        <Skills
          className="max-sm:min-w-[90%] max-sm:flex-1 sm:w-[calc(50%-(0.75rem/2))] md:w-[calc(33.3333333%-(0.75rem-0.75rem/3))]"
          title="Front-End"
          skills={skills}
        />
      </div>

      <TitleAnimaiton className="container mt-element" id="projects">
        <h3 className="title-xl">پروژه های من</h3>
      </TitleAnimaiton>
      <div className="container row mt-title w-full gap-3 max-lg:pb-3 max-lg:overflow-x-auto">
        <Project
          className="lg:w-[calc(50%-0.75rem)] max-lg:min-w-[90%] max-lg:flex-1"
          name="کلون Jobvision به صورت Realtime"
          techs={techs}
          logo="/icons/react.png"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است"
          link=""
        />
        <Project
          className="lg:w-[calc(50%-0.75rem)] max-lg:min-w-[90%] max-lg:flex-1"
          name="کلون Jobvision به صورت Realtime"
          techs={techs}
          logo="/icons/react.png"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است"
          link=""
        />
      </div>

      <TitleAnimaiton className="container mt-element" id="cv">
        <h4 className="title-xl">درباره من</h4>
      </TitleAnimaiton>
      <div className="container mt-title">
        <p className="content-text-lg text-center mt-6 lg:px-20">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
          جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <div className="center mt-6">
          <a className="btn btn-primary rounded-full" href="">
            <span>دانلود رزومه</span>
            <ArrowDownTrayIcon className="icon" />
          </a>
          <Link className="btn btn-ghost mr-3 rounded-full" href={"/contact"}>
            همکاری با من
          </Link>
        </div>
      </div>
    </>
  )
}

export default Page
