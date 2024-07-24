import Link from "next/link"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"

import { AttributesT, GeneralInfoT, ProjectsT, SkillsCategoriesT } from "@/types/datas.types"
import { calculateEmptyData, fetcher } from "@/utils/functions"
import PagesHero from "@/components/PagesHero"
import Skills from "@/components/modules/Skills"
import Project from "@/components/Project"
import TitleAnimaiton from "@/components/modules/animations/TitleAnimaiton"
import { BASE_URL } from "@/utils/initialData"
import SafeInnerHtml from "@/components/SafeInnerHtml"
import Pageination from "@/components/Pageination"
import AboutAttribute from "@/components/modules/AboutAttribute"

const Page = async () => {
  const generalInfo = await fetcher<GeneralInfoT>(BASE_URL + "/generalInfo")
  const attributes = await fetcher<AttributesT[]>(BASE_URL + "/attributes")
  const skillsCategories =
    (await fetcher<(SkillsCategoriesT | null)[]>(BASE_URL + "/skills/categories")) || []
  const projects = (await fetcher<(ProjectsT | null)[]>(BASE_URL + "/projects")) || []

  calculateEmptyData(skillsCategories, 3)
  calculateEmptyData(projects, 2)

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
