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

const Project = ({ className, id, name, logo, description, link, skills, features }: ProjectT) => {
  const modalId = "id-" + id

  return (
    <>
      <div
        className={cn(
          "h-[410px] bg-base-200 flex flex-col p-6 rounded-box sm:h-[332px] md:h-[306px] lg:h-[332px] max-lg:slide-box-w lg:box-w-1/2 xl:h-[306px]",
          className
        )}
      >
        <div className="row w-full">
          <Image className="size-20 rounded-full" src={logo} height={80} width={80} alt={name} />
          <div className="w-[calc(100%-5rem)] flex flex-col justify-evenly h-20 pr-6">
            <h6 className="font-base-bold text-xl leading-relaxed sm:text-2xl">{name}</h6>
            <div className="row w-full gap-2 overflow-hidden relative">
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
        <p className="content-text w-full text-justify line-clamp-3 mt-3">{description}</p>
        <div className="row w-full mt-6">
          <Link className="btn btn-primary" href={link}>
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
      </Modal>
    </>
  )
}

export default Project
