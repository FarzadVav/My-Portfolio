import Image from "next/image"
import Link from "next/link"
import { v4 } from "uuid"
import { ArrowUpLeftIcon, EllipsisHorizontalIcon, ShareIcon } from "@heroicons/react/24/outline"

import cn from "@/lib/cn"

type ProjectT = {
  className?: string
  name: string
  techs: { name: string; classColor: string }[]
  logo: string
  description: string
  link: string
}

const Project = ({ className, name, techs, logo, description, link }: ProjectT) => {
  return (
    <div
      className={cn(
        "bg-neutral w-full h-80 flex flex-col p-6 rounded-box group-data-[theme='light']/html:bg-base-300",
        className
      )}
    >
      <div className="w-full flex">
        <div className="w-calc(100%-6rem)">
          <h6 className="font-base-bold w-full max-h-[96px] flex text-2xl leading-relaxed ml-3 overflow-hidden">
            <span className="bg-base-content w-3 h-3 rounded-full translate-y-3"></span>
            <p className="mr-3">{name}</p>
          </h6>
          <div className="row max-h-[70px] flex-wrap text-sm gap-2 mt-3">
            {techs.map((i) => (
              <span key={v4()} className={`${i.classColor} py-1.5 px-3 rounded-full`}>
                {i.name}
              </span>
            ))}
          </div>
        </div>
        <Image
          className="w-24 h-24 mr-auto rounded-full"
          src={logo}
          height={96}
          width={96}
          alt=""
        />
      </div>
      <p className="w-full max-h-[78px] leading-relaxed mt-auto overflow-hidden">{description}</p>
      <div className="row w-full mt-auto">
        <Link className="btn" href={link}>
          <span>مشاهده</span>
          <ArrowUpLeftIcon className="icon" />
        </Link>
        <button className="btn btn-ghost btn-circle mr-auto">
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
