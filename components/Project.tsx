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
      <div className="w-full h-24 flex">
        <div className="w-full flex flex-col sm:w-[calc(100%-6rem)]">
          <div className="row w-full">
            <Image
              className="size-9 rounded-full sm:hidden"
              src={logo}
              height={36}
              width={36}
              alt=""
            />
            <h6 className="font-base-bold row content-title-xl w-full max-h-[96px] flex leading-relaxed ml-3 overflow-hidden">
              <span className="bg-base-content size-3 min-w-3 rounded-full max-sm:hidden"></span>
              <p className="mr-3">{name}</p>
            </h6>
          </div>
          <div className="row w-full gap-2 my-auto ml-3 overflow-hidden relative">
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
          className="w-24 h-full mr-auto rounded-full max-sm:hidden"
          src={logo}
          height={96}
          width={96}
          alt=""
        />
      </div>
      <p className="content-text w-full h-[104px] text-justify mt-3 relative overflow-hidden">
        {description}
        <span className="bg-gradient-to-r from-neutral to-transparent from-10% to-90% w-3/4 h-6 absolute left-0 bottom-0"></span>
        <button className="btn btn-xs btn-link text-neutral-content absolute left-0 bottom-0">
          دیدن کامل
        </button>
      </p>
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
