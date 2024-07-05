"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpLeftIcon, EllipsisHorizontalIcon, ShareIcon } from "@heroicons/react/24/outline"

import cn from "@/lib/cn"
import { navigationShare } from "@/utils/functions"
import { ProjectsT } from "@/types/datas.types"

type ProjectT = ProjectsT & {
  className?: string
}

const Project = ({ className, name, logo, description, link, skills }: ProjectT) => {
  return (
    <div
      className={cn(
        "bg-neutral w-full flex flex-col p-6 rounded-box group-data-[theme='light']/html:bg-base-300",
        className
      )}
    >
      <div className="w-full flex">
        <div className="w-[calc(100%-6rem)]">
          <h6 className="font-base-bold content-title-xl w-full max-h-[96px] flex leading-relaxed ml-3 overflow-hidden">
            <span className="bg-base-content size-3 min-w-3 rounded-full translate-y-4"></span>
            <p className="mr-3">{name}</p>
          </h6>
          <div className="row gap-2 mt-3 ml-3 overflow-hidden relative">
            {skills.map((skill) => (
              <span
                key={skill.id}
                style={{ backgroundColor: `${skill.hex}15`, color: skill.hex }}
                className="flex-1 min-w-max max-w-max text-sm py-1 px-2 rounded-full"
              >
                {skill.name}
              </span>
            ))}
            <span className="bg-gradient-to-r from-neutral to-transparent to-90% w-24 h-[27.97px] absolute left-0"></span>
          </div>
        </div>
        <Image
          className="size-24 mr-auto rounded-full max-sm:hidden"
          src={logo}
          height={96}
          width={96}
          alt=""
        />
      </div>
      <div className="row w-full h-[162px] mt-9">
        <p className="content-text-sm w-full text-justify">
          {description.slice(0, 500) + "..."}
          <button className="btn btn-sm btn-ghost mr-3">بیشتر</button>
        </p>
      </div>
      <div className="row w-full mt-6">
        <Link className="btn" href={link}>
          <span>مشاهده</span>
          <ArrowUpLeftIcon className="icon" />
        </Link>
        <button
          className="btn btn-ghost btn-circle mr-auto"
          onClick={() => {
            navigationShare({
              title: name,
              text: description,
              url: link,
            })
          }}
        >
          <ShareIcon className="icon" />
        </button>
        <button className="btn btn-ghost btn-circle mr-1.5">
          <EllipsisHorizontalIcon className="icon-lg" />
        </button>
      </div>
    </div>
  )
}

export default Project
