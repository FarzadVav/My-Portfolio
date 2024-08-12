"use client"

import Image from "next/image"
import { v4 } from "uuid"
import { ShareIcon, UserPlusIcon } from "@heroicons/react/24/outline"

import { SocialsT } from "@/types/datas.types"
import { navigationShare } from "@/utils/navigationShare"
import { SparklesIcon } from "@heroicons/react/24/solid"

const FooterSocial = ({ name, link, logo, descriptions }: SocialsT) => {
  return (
    <div className="bg-base-200 w-full flex flex-col p-6 rounded-box sm:group-data-[theme='dark']/html:glass lg:slide-w-1/3">
      <div className="row w-full">
        <h6 className="font-title text-2xl sm:text-3xl">{name}</h6>

        <div className="indicator w-24 h-16 mr-auto" dir="ltr">
          <span className="indicator-item badge badge-error shadow-xl shadow-base-100">99 +</span>
          <Image
            className="ring-8 ring-neutral/15 w-16 h-full rounded-full"
            src={logo || ""}
            height={64}
            width={64}
            alt={name}
          />
        </div>
      </div>

      <ul className="w-full my-6">
        {descriptions.map((item) => (
          <li className="w-full flex mt-3 first-of-type:mt-0" key={v4()}>
            <SparklesIcon className="icon-sm translate-y-1 sm:icon" />
            <p className="flex-1 line-clamp-2 leading-relaxed mr-3">{item}</p>
          </li>
        ))}
      </ul>

      <div className="row w-full mt-auto">
        <a className="btn btn-primary" href={link} target="_blank">
          <span>دنبال کردن</span>
          <UserPlusIcon className="icon" />
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
      </div>
    </div>
  )
}

export default FooterSocial
