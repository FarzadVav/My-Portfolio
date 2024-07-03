"use client"

import Image from "next/image"
import { ArrowUpLeftIcon, EllipsisHorizontalIcon, ShareIcon } from "@heroicons/react/24/outline"

import cn from "@/lib/cn"
import { navigationShare } from "@/utils/functions"
import { SocialsT } from "@/types/datas.types"

type CurrentSocialT = SocialsT & {
  className?: string
  count: number
}

const Social = ({
  className,
  name,
  link,
  logo,
  descriptions,
  quickAccessLinks,
  count,
}: CurrentSocialT) => {
  return (
    <div
      className={cn(
        "glass flex flex-col p-6 rounded-box group-data-[theme='light']/html:bg-neutral group-data-[theme='light']/html:text-neutral-content",
        className
      )}
    >
      <div className="row w-full">
        <h6 className="title-lg lg:title-base">{name}</h6>
        <div className="indicator w-24 h-16 mr-auto" dir="ltr">
          <span className="indicator-item badge badge-error shadow-xl shadow-base-100/50 group-data-[theme='light']/html:shadow-neutral/50">
            {count} +
          </span>
          <Image
            className="ring-8 ring-neutral/15 w-16 h-full rounded-full"
            src={logo}
            height={64}
            width={64}
            alt={name}
          />
        </div>
      </div>
      <ul className="w-full h-[102px] flex flex-col justify-center mt-3 overflow-y-auto">
        {descriptions.map((item) => (
          <li className="w-full flex mt-3 first-of-type:mt-0">
            <span className="ring-1 ring-neutral-content inline-block w-1.5 h-1.5 ml-3 mr-[1px] rounded-full translate-y-3"></span>
            <p className="leading-relaxed">{item}</p>
          </li>
        ))}
      </ul>
      <div className="row w-full mt-6">
        <a className="btn" href={link} target="_blank">
          <span>مشاهده صفحه</span>
          <ArrowUpLeftIcon className="icon" />
        </a>
        <button
          className="btn btn-ghost btn-circle mr-auto"
          onClick={() => {
            navigationShare({
              title: name,
              text: descriptions.join(" - "),
              url: link,
            })
          }}
        >
          <ShareIcon className="icon" />
        </button>
        <div className="dropdown dropdown-top dropdown-end mr-1.5">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <EllipsisHorizontalIcon tabIndex={0} className="icon-lg" />
          </div>
          <ul tabIndex={0} className="dropdown-content bg-base-100 text-base-content">
            {quickAccessLinks.map((quickLink) => (
              <li>
                <a href={quickLink.link} target="_blank">
                  {quickLink.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Social
