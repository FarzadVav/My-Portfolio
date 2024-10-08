import dynamic from "next/dynamic"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"

import { AttributesT, GeneralInfoT, ProjectsT, SkillsCategoriesT } from "@/types/datas.types"
import { fetcher } from "@/utils/fetcher"
import PagesHero from "@/components/PagesHero"
import Skills from "@/components/modules/Skills"
import Project from "@/components/Project"
import Title from "@/components/Title"
import Pageination from "@/components/Pageination"
import AboutAttribute from "@/components/modules/animations/AboutAttribute"
import ContactLink from "@/components/modules/ContactLink"
const SkillsAnimation = dynamic(() => import("@/components/modules/animations/SkillsAnimation"), {
  ssr: false,
})
const AboutText = dynamic(() => import("@/components/modules/animations/AboutText"), {
  ssr: false,
})

const Page = async () => {
  const { data: generalInfo } = await fetcher<GeneralInfoT>("/generalInfo", { baseUrl: true })
  const { data: attributes } = await fetcher<AttributesT[]>("/attributes", { baseUrl: true })
  const { data: projects } = await fetcher<ProjectsT[]>("/projects", { baseUrl: true })
  const { data: skillsCategories } = await fetcher<SkillsCategoriesT[]>("/skills/categories", {
    baseUrl: true,
  })

  return (
    <>
      <PagesHero />

      {attributes?.length ? (
        <div className="container center flex-wrap gap-y-6 -mt-3">
          {attributes.map((attribute, i) => (
            <AboutAttribute index={i} key={attribute.id} {...attribute} />
          ))}
        </div>
      ) : null}

      {skillsCategories?.length ? (
        <>
          <Title className="container mt-element" id="skills">
            <h2 className="title-xl">مهارت های من</h2>
          </Title>
          <div className="box-wrapper-lg mt-title">
            {skillsCategories.map((category, i) => (
              <div
                className="h-[30rem] max-sm:slide-box-w max-md:slide-w-1/2 md:box-w-1/3"
                key={category.id}
              >
                <SkillsAnimation className="w-full h-full" index={i}>
                  <Skills {...category} />
                </SkillsAnimation>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {projects?.length ? (
        <>
          <Title className="container mt-element" id="projects">
            <h3 className="title-xl">پروژه های من</h3>
          </Title>
          <Pageination
            className="box-wrapper-xl mt-title"
            data={projects.map((project) => (
              <Project key={project.id} {...project} />
            ))}
            pageCount={2}
          />
        </>
      ) : null}

      <Title className="container mt-element" id="cv">
        <h4 className="title-xl">درباره من</h4>
      </Title>
      <div className="container mt-title">
        <AboutText text={generalInfo?.aboutMe || ""} />

        <div className="center mt-6">
          <a
            className="btn btn-primary rounded-full"
            href={generalInfo?.cv || ""}
            download="Farzad-Vahdati-CV.txt"
            target="_blank"
          >
            <span>دانلود رزومه</span>
            <ArrowDownTrayIcon className="icon" />
          </a>
          <ContactLink />
        </div>
      </div>
    </>
  )
}

export default Page
