import Image from "next/image"
import Link from "next/link"
import { ArrowUpLeftIcon, EllipsisHorizontalIcon, ShareIcon } from "@heroicons/react/24/outline"
import { v4 } from "uuid"

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
    <div className={`bg-neutral w-full p-6 rounded-box ${className}`}>
      <div className="w-full flex">
        <div>
          <h6 className="font-base-bold row max-h-[96px] text-2xl leading-relaxed ml-3 overflow-hidden">
            <p className="bg-base-content w-2 h-2 ml-2.5 rounded-full"></p>
            {name}
          </h6>
          <div className="row max-h-[70px] flex-wrap text-sm gap-1.5 mt-3">
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
      <p className="w-full max-h-[78px] leading-relaxed mt-6 overflow-hidden">{description}</p>
      <div className="row w-full mt-6">
        <button className="btn btn-ghost btn-circle">
          <ShareIcon className="icon" />
        </button>
        <button className="btn btn-ghost btn-circle mr-3">
          <EllipsisHorizontalIcon className="icon-lg" />
        </button>
        <Link className="btn mr-auto" href={link}>
          مشاهده
          <ArrowUpLeftIcon className="icon" />
        </Link>
      </div>
    </div>
  )
}

export default Project
