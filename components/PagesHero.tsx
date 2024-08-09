"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { HTMLAttributes } from "react"
import useSWR from "swr"
import { motion } from "framer-motion"
import { v4 } from "uuid"
import { ArrowDownLeftIcon } from "@heroicons/react/24/outline"

import { fetcher } from "@/utils/fetcher"
import { PagesT } from "@/types/datas.types"
import cn from "@/utils/cn"
import Modal from "./Modal"
import { showModal } from "@/utils/showModals"

const PagesHero = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const pathname = usePathname()
  const splitedPathname = pathname.split("/")
  const currentPageName = splitedPathname[splitedPathname.length - 1]
  const { data: page, isLoading } = useSWR(`pages/${currentPageName}`, () =>
    fetcher<PagesT>(`/api/pages?href=${currentPageName}`)
  )
  const moodalId = "page-hero_modal"

  return (
    <>
      <div className={cn("w-full my-element", className)} {...props}>
        <div className="container center mx-auto max-md:flex-col lg:max-w-4xl">
          {isLoading ? (
            <div className="skeleton size-[184px]"></div>
          ) : (
            <motion.div
              className="size-[184px] rounded-box"
              initial={{ opacity: 0, scale: 0.25, y: 25, rotate: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            >
              <Image
                className="bg-base-200 rounded-box"
                src={page?.data?.picture || ""}
                width={184}
                height={184}
                alt={page?.data?.name || ""}
                priority
              />
            </motion.div>
          )}

          {isLoading ? (
            <div className="w-full h-[190.4px] md:h-[178.4px] lg:h-[184px] flex flex-col justify-between py-3 md:w-[calc(100%-184px)] md:pr-9">
              <div className="skeleton w-1/2 h-6 max-md:mx-auto max-md:mt-3"></div>
              <div className="skeleton w-full h-2"></div>
              <div className="skeleton w-full h-2"></div>
              <div className="skeleton w-full h-2"></div>
              <div className="skeleton w-full h-2"></div>
              <div className="row w-full">
                <div className="skeleton w-1/3 h-2"></div>
                <div className="skeleton w-1/2 h-2 mr-auto"></div>
              </div>
            </div>
          ) : (
            <motion.div
              className="w-full md:w-[calc(100%-184px)] md:pr-9"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 }}
            >
              <h1 className="font-title text-3xl max-md:center max-md:mt-3">{page?.data?.title}</h1>
              <p className="w-full h-[78px] text-justify leading-relaxed line-clamp-3 mt-3">
                {page?.data?.description}
              </p>
              <div className="row w-full gap-x-6 pb-1.5 mt-4 overflow-x-auto">
                <button
                  className="btn btn-sm min-w-max max-w-max flex-1 ml-auto"
                  onClick={() => showModal(moodalId)}
                >
                  دیدن کامل
                </button>
                {page?.data?.sections.map((section) => (
                  <Link
                    key={v4()}
                    className="link-hover row min-w-max max-w-max flex-1"
                    href={"#" + section.href}
                  >
                    <span>{section.name}</span>
                    <ArrowDownLeftIcon className="icon-sm mr-2" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <Modal id={moodalId} title={page?.data?.title || ""}>
        <p className="text-justify leading-relaxed mt-3">{page?.data?.description}</p>
      </Modal>
    </>
  )
}

export default PagesHero
