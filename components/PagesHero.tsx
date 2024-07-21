"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { HTMLAttributes } from "react"
import useSWR from "swr"
import { motion } from "framer-motion"
import { v4 } from "uuid"
import { ArrowDownLeftIcon, InformationCircleIcon } from "@heroicons/react/24/outline"

import cn from "@/lib/cn"
import { fetcher } from "@/utils/functions"
import { LinksT } from "@/types/datas.types"

const PagesHero = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const pathname = usePathname()
  const splitedPathname = pathname.split("/")
  const currentPageName = splitedPathname[splitedPathname.length - 1]
  const { data: page, isLoading } = useSWR(`links/${currentPageName}`, () =>
    fetcher<LinksT>(`/api/pages?name=${currentPageName}`)
  )

  const showModal = () => {
    const modal = document.querySelector("#page-hero_modal") as HTMLDialogElement
    modal.showModal()
  }

  return (
    <>
      <div className={cn("w-full my-element", className)} {...props}>
        <div className="container center mx-auto max-md:flex-col lg:max-w-4xl">
          {isLoading ? (
            <div className="skeleton bg-base-300 size-40 min-w-40 rounded-full"></div>
          ) : (
            <motion.div
              className="size-40 min-w-40 rounded-full"
              initial={{ opacity: 0, scale: 0.25, y: 25, rotate: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            >
              <Image
                className="rounded-box"
                src="/images/smart-cv.png"
                width={160}
                height={160}
                alt={page?.title || ""}
              />
            </motion.div>
          )}
          {isLoading ? (
            <div className="w-full h-[254.4px] flex flex-col justify-between sm:h-[202.4px] md:h-[190.4px] md:w-[calc(100%-10rem)] md:mr-9 max-md:items-center lg:h-[166px] xl:h-[170px]">
              <div className="skeleton bg-base-300 w-1/2 h-7 rounded-md max-md:mt-3"></div>
              <div className="skeleton bg-base-300 w-full h-2 rounded-md"></div>
              <div className="skeleton bg-base-300 w-full h-2 rounded-md"></div>
              <div className="skeleton bg-base-300 w-full h-2 rounded-md"></div>
              <div className="skeleton bg-base-300 w-full h-2 rounded-md"></div>
              <div className="skeleton bg-base-300 w-full h-2 rounded-md"></div>
              <div className="skeleton bg-base-300 w-full h-2 rounded-md"></div>
              <div className="skeleton bg-base-300 w-full h-2 rounded-md sm:hidden"></div>
              <div className="skeleton bg-base-300 w-full h-2 rounded-md sm:hidden"></div>
              <div className="skeleton bg-base-300 w-1/2 lg:w-1/3 h-2 rounded-md md:mr-auto"></div>
            </div>
          ) : (
            <motion.div
              className="w-full md:w-[calc(100%-10rem)] md:mr-9"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 }}
            >
              <h1 className="title-base max-md:center max-md:mt-3">{page?.title}</h1>
              <div className="row w-full h-[156px] sm:h-[104px] mt-3 overflow-hidden lg:h-[78px]">
                <p className="content-text w-full max-h-full text-justify relative">
                  {page?.description.slice(0, 275)}
                  {(page?.description.length || 0) >= 275 ? (
                    <>
                      <span className="inline-block">...</span>
                      <button
                        className="btn btn-xs btn-link text-base-content inline-block"
                        onClick={showModal}
                      >
                        دیدن کامل
                      </button>
                    </>
                  ) : null}
                </p>
              </div>
              <div className="row flex-wrap justify-end gap-x-6 gap-y-3 mt-4 max-md:justify-center">
                {page?.sections.map((section) => (
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

      <dialog id="page-hero_modal" className="modal">
        <div className="modal-box">
          <h6 className="font-base-bold content-title row">
            <InformationCircleIcon className="icon" />
            <span className="mr-2">سلام دنیا</span>
          </h6>
          <p className="text-justify mt-3">{page?.description}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="cursor-zoom-out" />
        </form>
      </dialog>
    </>
  )
}

export default PagesHero
