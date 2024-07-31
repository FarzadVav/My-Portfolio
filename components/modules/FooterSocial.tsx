"use client"

import Image from "next/image"
import { v4 } from "uuid"
import { EllipsisHorizontalIcon, ShareIcon, UserPlusIcon } from "@heroicons/react/24/outline"

import { SocialsT } from "@/types/datas.types"
import { navigationShare } from "@/utils/navigationShare"

const FooterSocial = ({ name, link, logo, descriptions, quickAccessLinks }: SocialsT) => {
  return (
    <div className="bg-base-200 w-full flex flex-col p-6 rounded-box sm:group-data-[theme='dark']/html:glass lg:slide-w-1/3">
      <div className="row w-full">
        <h6 className="title-lg lg:title-base">{name}</h6>
        <div className="indicator w-24 h-16 mr-auto" dir="ltr">
          <span className="indicator-item badge badge-error shadow-xl shadow-base-100">
            99 +
          </span>
          <Image
            className="ring-8 ring-neutral/15 w-16 h-full rounded-full"
            src={logo || ""}
            height={64}
            width={64}
            alt={name}
          />
        </div>
      </div>
      <div className="w-full h-[102px] flex flex-col justify-center mt-3">
        <ul className="w-full overflow-y-auto">
          {descriptions.map((item) => (
            <li className="w-full flex mt-3 first-of-type:mt-0" key={v4()}>
              <span className="ring-1 ring-base-content inline-block w-1.5 min-w-1.5 h-1.5 mr-1.5 rounded-full translate-y-2"></span>
              <p className="leading-relaxed mr-3">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="row w-full mt-6">
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
        <div className="dropdown dropdown-top dropdown-end mr-1.5">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <EllipsisHorizontalIcon tabIndex={0} className="icon-lg" />
          </div>
          {quickAccessLinks.length ? (
            <ul tabIndex={0} className="dropdown-content bg-base-100">
              {quickAccessLinks.map((quickLink) => (
                <li key={v4()}>
                  <a href={quickLink.link} target="_blank">
                    {quickLink.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default FooterSocial
