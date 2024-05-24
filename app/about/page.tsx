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

      <div className="container row">
        <div className="center w-1/4 p-6 rounded-r-box">
          <CommandLineIcon className="icon" />
          <p className="font-base-bold mr-3">تجربه دو ساله</p>
        </div>
        <div className="center border-r border-light w-1/4 p-6">
          <AcademicCapIcon className="icon" />
          <p className="font-base-bold mr-3">دانشجوی کامپیوتر</p>
        </div>
        <div className="center border-r border-light w-1/4 p-6">
          <UserGroupIcon className="icon" />
          <p className="font-base-bold mr-3">مهارت کار تیمی</p>
        </div>
        <div className="center border-r border-light w-1/4 p-6 rounded-l-box">
          <PresentationChartLineIcon className="icon" />
          <p className="font-base-bold mr-3">عاشق یادگیری</p>
        </div>
      </div>

      <div className="container mt-element" id="skills">
        <h2 className="center title-xl">مهارت های من</h2>
        <div className="center mt-element gap-3" dir="ltr">
          <Skills title="Front-End" skills={skills} />
          <Skills title="Front-End" skills={skills} />
          <Skills title="Front-End" skills={skills} />
        </div>
      </div>

      <div className="container mt-element" id="projects">
        <h2 className="center title-xl">پروژه های من</h2>
        <div className="row mt-element w-full gap-3">
          <Project
            className="w-[calc(50%-0.75rem)]"
            name="کلون Jobvision به صورت Realtime"
            techs={techs}
            logo="/icons/react.png"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است"
            link=""
          />
          <Project
            className="w-[calc(50%-0.75rem)]"
            name="کلون Jobvision به صورت Realtime"
            techs={techs}
            logo="/icons/react.png"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است"
            link=""
          />
        </div>
        <div className="join center w-full mt-6">
          <button className="join-item btn btn-active">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn">3</button>
        </div>
      </div>

      <div className="container mt-element" id="cv">
        <h3 className="center title-xl">درباره من</h3>
        <p className="text-center leading-loose px-20 mt-6">
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
