"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { HTMLAttributes } from "react"
import useSWR from "swr"
import { motion } from "framer-motion"
import { v4 } from "uuid"
import { ArrowDownLeftIcon } from "@heroicons/react/24/outline"

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

  return (
    <div className={cn("w-full my-element", className)} {...props}>
      <div className="container center mx-auto max-md:flex-col lg:max-w-4xl">
        {isLoading ? (
          <div className="skeleton bg-base-300 size-40 min-w-40 rounded-full"></div>
        ) : (
          <motion.div
            className="size-40 min-w-40 rounded-full"
            initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
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
          <div className="w-full flex-col items-center md:w-[calc(100%-10rem)] md:mr-9 max-md:flex">
            <div className="skeleton bg-base-300 w-1/2 h-[34.4px] rounded-md md:w-1/3 max-md:mt-3 lg:h-[36px] xl:h-[40px]"></div>
            <div className="w-full h-[156px] flex flex-col justify-evenly mt-3 sm:h-[104px] lg:h-[78px]">
              <div className="skeleton bg-base-300 w-full h-2 rounded-md"></div>
              <div className="skeleton bg-base-300 w-full h-2 rounded-md"></div>
              <div className="skeleton bg-base-300 w-full h-2 rounded-md"></div>
              <div className="skeleton bg-base-300 w-full h-2 rounded-md md:hidden"></div>
              <div className="skeleton bg-base-300 w-full h-2 rounded-md sm:hidden"></div>
              <div className="skeleton bg-base-300 w-full h-2 rounded-md sm:hidden"></div>
              <div className="skeleton bg-base-300 w-1/2 h-2 rounded-md"></div>
            </div>
            <div className="row w-full h-[24px] justify-end gap-2 mt-4 max-md:justify-center">
              <div className="skeleton bg-base-300 w-24 h-full rounded-md"></div>
              <div className="skeleton bg-base-300 w-24 h-full rounded-md"></div>
              <div className="skeleton bg-base-300 w-24 h-full rounded-md"></div>
            </div>
          </div>
        ) : (
          <motion.div
            className="w-full md:w-[calc(100%-10rem)] md:mr-9"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="title-base max-md:center max-md:mt-3">{page?.title}</h1>
            <div className="row w-full h-[156px] sm:h-[104px] mt-3 overflow-hidden lg:h-[78px]">
              <p className="content-text w-full max-h-full text-justify relative">
                {page?.description.slice(0, 275)}
                {(page?.description.length || 0) >= 275 ? (
                  <>
                    <span className="inline-block">...</span>
                    <button className="btn btn-xs btn-link text-base-content inline-block">
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
  )
}

export default PagesHero
