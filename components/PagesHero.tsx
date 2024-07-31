"use client"

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
            <div className="skeleton size-40 min-w-40"></div>
          ) : (
            <motion.div
              className="size-40 min-w-40 rounded-box"
              initial={{ opacity: 0, scale: 0.25, y: 25, rotate: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            >
              <Image
                className="bg-base-200 rounded-box"
                src={page?.data?.picture || ""}
                width={160}
                height={160}
                alt={page?.data?.name || ""}
                priority
              />
            </motion.div>
          )}
          {isLoading ? (
            <div className="w-full h-[254.4px] flex flex-col justify-between sm:h-[202.4px] md:h-[190.4px] md:w-[calc(100%-10rem)] md:mr-9 max-md:items-center lg:h-[166px] xl:h-[170px]">
              <div className="skeleton w-1/2 h-7 max-md:mt-3"></div>
              <div className="skeleton w-full h-2"></div>
              <div className="skeleton w-full h-2"></div>
              <div className="skeleton w-full h-2"></div>
              <div className="skeleton w-full h-2"></div>
              <div className="skeleton w-full h-2"></div>
              <div className="skeleton w-full h-2"></div>
              <div className="skeleton w-full h-2 sm:hidden"></div>
              <div className="skeleton w-full h-2 sm:hidden"></div>
              <div className="skeleton w-1/2 lg:w-1/3 h-2 md:mr-auto"></div>
            </div>
          ) : (
            <motion.div
              className="w-full md:w-[calc(100%-10rem)] md:mr-9"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 }}
            >
              <h1 className="title-base max-md:center max-md:mt-3">{page?.data?.title}</h1>
              <div className="row w-full h-[156px] mt-3 overflow-hidden sm:h-[104px] lg:h-[78px]">
                <p className="content-text w-full max-h-full text-justify relative">
                  {page?.data?.description.slice(0, 275)}
                  {(page?.data?.description.length || 0) >= 275 ? (
                    <>
                      <span className="inline-block">...</span>
                      <button
                        className="btn btn-xs btn-link text-base-content inline-block"
                        onClick={() => showModal(moodalId)}
                      >
                        دیدن کامل
                      </button>
                    </>
                  ) : null}
                </p>
              </div>
              <div className="row flex-wrap justify-end gap-x-6 gap-y-3 mt-4 max-md:justify-center">
                {page?.data?.sections.map((section) => (
                  <a key={v4()} className="link-hover row" href={"#" + section.href}>
                    <span>{section.name}</span>
                    <ArrowDownLeftIcon className="icon-sm mr-2" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <Modal id={moodalId} title={page?.data?.title || ""}>
        <p className="text-justify mt-3">{page?.data?.description}</p>
      </Modal>
    </>
  )
}

export default PagesHero
