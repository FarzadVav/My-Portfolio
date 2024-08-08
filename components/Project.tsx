"use client"

import Image from "next/image"
import Link from "next/link"
import { v4 } from "uuid"
import {
  ArrowUpLeftIcon,
  CheckIcon,
  EllipsisHorizontalIcon,
  ShareIcon,
} from "@heroicons/react/24/outline"

import { ProjectsT } from "@/types/datas.types"
import cn from "@/utils/cn"
import Modal from "./Modal"
import { showModal } from "@/utils/showModals"
import { navigationShare } from "@/utils/navigationShare"

type ProjectT = ProjectsT & {
  className?: string
}

const Project = ({
  className,
  id,
  name,
  logo,
  description,
  link,
  github,
  skills,
  features,
}: ProjectT) => {
  const modalId = "id-" + id

  return (
    <>
      <div
        className={cn(
          "bg-base-200 flex flex-col p-6 rounded-box max-lg:slide-box-w lg:box-w-1/2",
          className
        )}
      >
        <div className="row w-full max-sm:flex-col">
          <Image className="size-20 rounded-full" src={logo} height={80} width={80} alt={name} />
          <div className="w-full flex flex-col sm:justify-evenly sm:h-20 sm:w-[calc(100%-5rem)] sm:pr-6 max-sm:items-center max-sm:mt-3">
            <h6 className="font-base-bold text-xl leading-relaxed sm:text-2xl">{name}</h6>
            <div className="row w-full gap-2 overflow-hidden relative max-sm:mt-3">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  style={{ backgroundColor: `${skill.hex}15`, color: skill.hex }}
                  className="flex-1 min-w-max max-w-max text-sm py-1 px-2 rounded-full"
                >
                  {skill.name}
                </span>
              ))}
              <span className="bg-gradient-to-r from-base-200 to-transparent to-90% w-1/3 h-full absolute left-0"></span>
            </div>
          </div>
        </div>

        <p className="content-text w-full h-[78px] text-justify line-clamp-3 mt-3">{description}</p>

        <div className="row w-full mt-6">
          <Link className="btn btn-primary" href={link || github}>
            <span>مشاهده</span>
            <ArrowUpLeftIcon className="icon" />
          </Link>

          <button
            className="btn btn-ghost btn-circle mr-auto"
            onClick={() => {
              navigationShare({
                title: name,
                text: description,
                url: link || github,
              })
            }}
          >
            <ShareIcon className="icon" />
          </button>
          <button className="btn btn-ghost btn-circle mr-1.5" onClick={() => showModal(modalId)}>
            <EllipsisHorizontalIcon className="icon-lg" />
          </button>
        </div>
      </div>

      <Modal id={modalId} title={name}>
        <div className="row w-full flex-wrap gap-2 mt-4">
          {skills.map((skill) => (
            <span
              key={skill.id}
              style={{ backgroundColor: `${skill.hex}15`, color: skill.hex }}
              className="flex-1 min-w-max max-w-max text-sm py-1 px-2 rounded-full"
            >
              {skill.name}
            </span>
          ))}
        </div>
        <ul className="w-full mt-6">
          {features.map((item) => (
            <li className="flex" key={v4()}>
              <CheckIcon className="icon-sm min-w-min" />
              <span className="mr-2">{item}</span>
            </li>
          ))}
        </ul>
        <p className="border-t border-light text-justify pt-3 mt-3">{description}</p>
        <div className="row w-full mt-6">
          <a
            className={`btn btn-primary flex-1 min-w-max ${
              link ? "" : "opacity-25 pointer-events-none cursor-not-allowed"
            }`}
            href={link || ""}
          >
            <span>مشاهده آنلاین</span>
            <ArrowUpLeftIcon className="icon" />
          </a>
          <a className="btn btn-outline flex-1 min-w-max mr-3">
            <span>گیت هاب</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
        </div>
      </Modal>
    </>
  )
}

export default Project
