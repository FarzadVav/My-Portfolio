"use client"

import Image from "next/image"
import Link from "next/link"
import { v4 } from "uuid"
import { ArrowUpLeftIcon, EllipsisHorizontalIcon, ShareIcon } from "@heroicons/react/24/outline"

import cn from "@/lib/cn"

type ProjectT = {
  className?: string
  name: string
  techs: { name: string; color: string }[]
  logo: string
  description: string
  link: string
}

const Project = ({ className, name, techs, logo, description, link }: ProjectT) => {
  return (
    <div
      className={cn(
        "bg-neutral w-full flex flex-col p-6 rounded-box group-data-[theme='light']/html:bg-base-300",
        className
      )}
    >
      <div className="w-full flex">
        <div className="w-calc(100%-6rem)">
          <h6 className="font-base-bold content-title-xl w-full max-h-[96px] flex leading-relaxed ml-3 overflow-hidden">
            <span className="bg-base-content size-3 min-w-3 rounded-full translate-y-4"></span>
            <p className="mr-3">{name}</p>
          </h6>
          <div className="h-[80px] flex items-start flex-wrap gap-2 mt-3 overflow-y-auto">
            {techs.map((i) => (
              <span
                key={v4()}
                style={{ backgroundColor: `${i.color}15`, color: i.color }}
                className="py-1.5 px-3 rounded-full max-sm:text-sm"
              >
                {i.name}
              </span>
            ))}
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
      <p className="content-text-sm w-full h-[78px] text-justify pl-3 mt-3 overflow-y-auto">
        {description}
      </p>
      <div className="row w-full mt-6">
        <Link className="btn" href={link}>
          <span>مشاهده</span>
          <ArrowUpLeftIcon className="icon" />
        </Link>
        <button
          className="btn btn-ghost btn-circle mr-auto"
          onClick={() => {
            navigator.share({
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
