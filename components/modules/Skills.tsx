import { v4 } from "uuid"
import { StarIcon } from "@heroicons/react/24/solid"

import cn from "@/lib/cn"

type SkillsT = {
  className?: string
  title: string
  skills: {
    name: string
    score: number
    color: string
  }[]
}

const Skills = ({ className, title, skills }: SkillsT) => {
  return (
    <div className={cn("bg-base-300 h-[30rem] px-3 rounded-box", className)} dir="ltr">
      <div className="font-base-bold content-title center w-full h-16 text-center">{title}</div>
      <ul className="bg-base-200 w-full h-[25.25rem] p-3 rounded-box overflow-y-auto">
        {skills.map((skill) => (
          <li key={v4()} className="row w-full mt-3 first-of-type:mt-0">
            <span
              style={{ backgroundColor: `${skill.color}10`, color: skill.color }}
              className="bg-sky-500/10 text-sky-500 w-max py-1.5 px-3 rounded-full max-lg:text-sm"
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
