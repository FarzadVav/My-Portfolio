"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpLeftIcon,
  CheckIcon,
  EllipsisHorizontalIcon,
  InformationCircleIcon,
  ShareIcon,
} from "@heroicons/react/24/outline"

import { ProjectsT } from "@/types/datas.types"
import cn from "@/lib/cn"
import { navigationShare, showModal } from "@/utils/functions"
import Modal from "./Modal"

type ProjectT = ProjectsT & {
  className?: string
}

const Project = ({ className, id, name, logo, description, link, skills, features }: ProjectT) => {
  const modalId = id || ""

  return (
    <>
      <div className={cn("w-project-box bg-base-200 flex flex-col p-6 rounded-box", className)}>
        <div className="w-full h-24 flex">
          <div className="w-full flex flex-col md:w-[calc(100%-6rem)]">
            <div className="row w-full">
              <Image
                className="size-9 rounded-full sm:size-12 md:hidden"
                src={logo}
                height={48}
                width={48}
                alt=""
              />
              <h6 className="font-base-bold row content-title-xl w-full max-h-[96px] flex leading-relaxed ml-3 overflow-hidden">
                <span className="bg-base-content size-3 min-w-3 rounded-full max-md:hidden"></span>
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
              <span className="bg-gradient-to-r from-base-200 to-transparent to-90% w-24 h-[27.97px] absolute left-0"></span>
            </div>
          </div>
          <Image
            className="w-24 h-full mr-auto rounded-full max-md:hidden"
            src={logo}
            height={96}
            width={96}
            alt=""
          />
        </div>
        <div className="row w-full h-[182px] mt-3 overflow-hidden sm:h-[104px] md:h-[78px] lg:h-[104px] xl:h-[78px]">
          <p className="content-text w-full max-h-full text-justify relative">
            {description.slice(0, 230)}
            {(description.length || 0) >= 230 ? (
              <>
                <span className="inline-block">...</span>
                <button
                  className="btn btn-xs btn-link text-base-content inline-block"
                  onClick={() => showModal(modalId)}
                >
                  دیدن کامل
                </button>
              </>
            ) : null}
          </p>
        </div>{" "}
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
          <button className="btn btn-ghost btn-circle mr-1.5" onClick={() => showModal(modalId)}>
            <EllipsisHorizontalIcon className="icon-lg" />
          </button>
        </div>
      </div>

      <Modal id={modalId}>
        <h6 className="font-base-bold content-title-lg row">
          <InformationCircleIcon className="icon-lg" />
          <span className="mr-3">{name}</span>
        </h6>
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
        <span className="font-base-bold block mt-3">قابلیت های پروژه</span>
        <ul className="w-full mt-1.5">
          {features.map((item) => (
            <li className="flex">
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
