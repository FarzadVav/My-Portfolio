import Link from "next/link"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"

import { AttributesT, GeneralInfoT, ProjectsT, SkillsCategoriesT } from "@/types/datas.types"
import { calculateEmptyData, fetcher } from "@/utils/functions"
import PagesHero from "@/components/PagesHero"
import Skills from "@/components/modules/Skills"
import Project from "@/components/Project"
import TitleAnimaiton from "@/components/modules/animations/TitleAnimaiton"
import { baseUrl } from "@/utils/initialData"
import SafeInnerHtml from "@/components/SafeInnerHtml"
import Pageination from "@/components/Pageination"

const Page = async () => {
  const generalInfo = await fetcher<GeneralInfoT>(baseUrl + "/generalInfo")
  const attributes = await fetcher<AttributesT[]>(baseUrl + "/attributes")
  const skillsCategories =
    (await fetcher<(SkillsCategoriesT | null)[]>(baseUrl + "/skills/categories")) || []
  const projects = (await fetcher<(ProjectsT | null)[]>(baseUrl + "/projects")) || []

  calculateEmptyData(skillsCategories, 3)
  calculateEmptyData(projects, 2)

  return (
    <>
      <PagesHero />

      {attributes?.length ? (
        <div className="container row attributes-wrapper flex-wrap -mt-3">
          {attributes.map((attribute) => (
            <div
              key={attribute.id}
              className="center border-l border-light w-1/2 py-3 my-3 lg:w-1/4 2xl:w-1/5"
            >
              <SafeInnerHtml className="attribute-icon-wrapper" html={attribute.svg} />
              <p className="font-base-bold mr-4 text-lg max-sm:text-sm">{attribute.name}</p>
            </div>
          ))}
        </div>
      ) : null}

      <TitleAnimaiton className="container mt-element" id="skills">
        <h2 className="title-xl">مهارت های من</h2>
      </TitleAnimaiton>
      <div className="box-wrapper mt-title">
        {skillsCategories.reverse().map((category) => {
          if (category) {
            return (
              <Skills
                key={category.id}
                className="max-sm:slide-box-w sm:box-w-1/2 md:box-w-1/3"
                name={category.name}
                skills={category.skills}
              />
            )
          }

          return (
            <div className="skeleton bg-base-300 h-[30rem] px-3 rounded-box max-sm:slide-box-w sm:box-w-1/2 md:box-w-1/3"></div>
          )
        })}
      </div>

      <TitleAnimaiton className="container mt-element" id="projects">
        <h3 className="title-xl">پروژه های من</h3>
      </TitleAnimaiton>
      <Pageination
        className="box-wrapper-xl mt-title"
        data={projects.map((project) => {
          if (project) {
            return (
              <Project
                className="max-lg:slide-box-w lg:box-w-1/2"
                {...project}
                logo="/icons/mysql.png"
              />
            )
          }

          return (
            <div className="skeleton bg-base-300 h-[332px] max-lg:slide-box-w lg:box-w-1/2"></div>
          )
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
