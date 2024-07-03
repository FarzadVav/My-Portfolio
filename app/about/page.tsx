import Link from "next/link"
import {
  ArrowDownTrayIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline"

import { AttributesApiT, GeneralInfoApiT } from "@/types/datas.types"
import { fetcher } from "@/utils/functions"
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

const Page = async () => {
  const info = await fetcher<GeneralInfoApiT>(process.env.NEXT_PUBLIC_API_URL + "/generalInfo")
  const attributes = await fetcher<AttributesApiT[]>(
    process.env.NEXT_PUBLIC_API_URL + "/attributes"
  )

  return (
    <>
      <PagesHero
        picture="/images/smart-cv.png"
        title="من فرزاد وحدتی نژاد"
        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است"
        links={links}
      />

      <div className="container row attributes-wrapper flex-wrap -mt-3">
        {attributes?.map((attribute) => (
          <div
            key={attribute.id}
            className="center border-l border-light w-1/2 py-3 my-3 lg:w-1/4 2xl:w-1/5"
          >
            <div
              className="attribute-icon-wrapper"
              dangerouslySetInnerHTML={{ __html: attribute.svg }}
            ></div>
            <p className="font-base-bold mr-4 text-lg max-sm:text-sm">{attribute.name}</p>
          </div>
        ))}
      </div>

      <TitleAnimaiton className="container mt-element" id="skills">
        <h2 className="title-xl">مهارت های من</h2>
      </TitleAnimaiton>
      <div className="box-wrapper mt-title">
        <Skills
          className="max-sm:slide-box-w sm:box-w-1/2 md:box-w-1/3"
          title="Soft-Skills"
          skills={skills}
        />
        <Skills
          className="max-sm:slide-box-w sm:box-w-1/2 md:box-w-1/3"
          title="Back-End"
          skills={skills}
        />
        <Skills
          className="max-sm:slide-box-w sm:box-w-1/2 md:box-w-1/3"
          title="Front-End"
          skills={skills}
        />
      </div>

      <TitleAnimaiton className="container mt-element" id="projects">
        <h3 className="title-xl">پروژه های من</h3>
      </TitleAnimaiton>
      <div className="box-wrapper-lg mt-title">
        <Project
          className="w-full lg:box-w-1/2 max-md:slide-box-w"
          name="کلون Jobvision به صورت Realtime"
          techs={techs}
          logo="/icons/mysql.png"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است"
          link=""
        />
        <Project
          className="w-full lg:box-w-1/2 max-md:slide-box-w"
          name="کلون Jobvision به صورت Realtime"
          techs={techs}
          logo="/icons/mysql.png"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله است"
          link=""
        />
      </div>
      <div className="join w-full justify-center mt-6 max-md:hidden">
        <button className="join-item btn">
          <ChevronDoubleRightIcon className="icon-sm" />
        </button>
        <button className="join-item btn btn-active">1</button>
        <button className="join-item btn">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">
          <ChevronDoubleLeftIcon className="icon-sm" />
        </button>
      </div>

      <TitleAnimaiton className="container mt-element" id="cv">
        <h4 className="title-xl">درباره من</h4>
      </TitleAnimaiton>
      <div className="container mt-title">
        <p className="content-text-lg text-center mt-6 lg:px-20">{info?.aboutMe}</p>
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
