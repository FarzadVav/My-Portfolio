import { StarIcon } from "@heroicons/react/24/solid"
import { v4 } from "uuid"

type SkillsT = {
  title: string
  skills: {
    name: string
    score: number
    color: string
  }[]
}

const Skills = ({ title, skills }: SkillsT) => {
  return (
    <div className="bg-base-300 w-96 h-[30rem] px-3 rounded-box">
      <div className="font-base-bold center w-full h-16 text-lg text-center">{title}</div>
      <ul className="bg-base-200 w-full h-[25.25rem] p-3 rounded-box overflow-y-auto">
        {skills.map((skill) => (
          <li key={v4()} className="row w-full mt-3 first-of-type:mt-0">
            <span
              style={{ backgroundColor: `${skill.color}10`, color: skill.color }}
              className="bg-sky-500/10 text-sky-500 w-max py-1.5 px-3 rounded-full"
            >
              {skill.name}
            </span>
            <div className="row ml-auto">
              {Array.from(Array(skill.score > 5 ? 5 : skill.score)).map(() => (
                <StarIcon key={v4()} className="icon-sm" />
              ))}
              {skill.score < 5
                ? Array.from(Array(5 - skill.score)).map(() => (
                    <StarIcon key={v4()} className="icon-sm opacity-25" />
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
