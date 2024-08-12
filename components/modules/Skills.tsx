import { v4 } from "uuid"
import { StarIcon } from "@heroicons/react/24/solid"

import cn from "@/utils/cn"
import { SkillsCategoriesT } from "@/types/datas.types"

type CurrentSkillsT = SkillsCategoriesT & {
  className?: string
}

const Skills = ({ className, name, skills }: CurrentSkillsT) => {
  return (
    <div className={cn("bg-base-300 w-full h-full px-3 rounded-box", className)} dir="ltr">
      <div className="font-bold text-lg tracking-wide center w-full h-16 text-center">{name}</div>
      <ul className="bg-base-200 w-full h-[25.25rem] p-3 rounded-box overflow-auto">
        {skills.map((skill) => (
          <li key={v4()} className="row w-full flex-wrap gap-1.5 mt-3 first-of-type:mt-0">
            <span
              style={{ backgroundColor: `${skill.hex}10`, color: skill.hex }}
              className="w-max py-1.5 px-3 rounded-full max-lg:text-sm group-data-[theme='light']/html:brightness-50"
            >
              {skill.name}
            </span>
            <div className="row ml-auto">
              {Array.from(Array(skill.score > 5 ? 5 : skill.score)).map(() => (
                <StarIcon key={v4()} className="icon-xs lg:icon-sm" />
              ))}
              {skill.score < 5
                ? Array.from(Array(5 - skill.score)).map(() => (
                    <StarIcon key={v4()} className="icon-xs opacity-25 lg:icon-sm" />
                  ))
                : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
