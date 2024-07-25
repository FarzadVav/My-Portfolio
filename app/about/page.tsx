import Link from "next/link"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"

import { AttributesT, GeneralInfoT, ProjectsT, SkillsCategoriesT } from "@/types/datas.types"
import { getEmptyData, fetcher } from "@/utils/functions"
import PagesHero from "@/components/PagesHero"
import Skills from "@/components/modules/Skills"
import Project from "@/components/Project"
import TitleAnimaiton from "@/components/modules/animations/TitleAnimaiton"
import Pageination from "@/components/Pageination"
import AboutAttribute from "@/components/modules/AboutAttribute"

const Page = async () => {
  const generalInfo = await fetcher<GeneralInfoT>("/generalInfo", { baseUrl: true })
  const attributes = await fetcher<AttributesT[]>("/attributes", { baseUrl: true })
  const projects = await fetcher<ProjectsT[]>("/projects", { baseUrl: true })
  const skillsCategories = await fetcher<SkillsCategoriesT[]>("/skills/categories", {
    baseUrl: true,
  })

  return (
    <>
      <PagesHero />

      {attributes?.length ? (
        <div className="attributes-wrapper">
          {attributes.map((attribute) => (
            <AboutAttribute key={attribute.id} {...attribute} />
          ))}
        </div>
      ) : null}

      <TitleAnimaiton className="container mt-element" id="skills">
        <h2 className="title-xl">مهارت های من</h2>
      </TitleAnimaiton>
      <div className="box-wrapper-lg mt-title">
        {getEmptyData<SkillsCategoriesT>(skillsCategories, 3).map((category) => {
          if (category) {
            return <Skills key={category.id} name={category.name} skills={category.skills} />
          }

          return (
            <div className="skeleton w-skills-category bg-base-300 h-[30rem] rounded-box"></div>
          )
        })}
      </div>

      <TitleAnimaiton className="container mt-element" id="projects">
        <h3 className="title-xl">پروژه های من</h3>
      </TitleAnimaiton>
      <Pageination
        className="box-wrapper-xl mt-title"
        data={getEmptyData<ProjectsT>(projects, 2).map((project) => {
          if (project) {
            return <Project {...project} logo="/icons/mysql.png" />
          }

          return <div className="skeleton w-project-box bg-base-300 h-[332px]"></div>
        })}
        pageCount={2}
      />

      <TitleAnimaiton className="container mt-element" id="cv">
        <h4 className="title-xl">درباره من</h4>
      </TitleAnimaiton>
      <div className="container mt-title">
        <p className="content-text-lg text-center mt-6 lg:px-20">{generalInfo?.aboutMe}</p>
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
