"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { HTMLAttributes } from "react"
import useSWR from "swr"
import { v4 } from "uuid"
import { motion } from "framer-motion"
import { ArrowDownLeftIcon } from "@heroicons/react/24/outline"

import cn from "@/lib/cn"
import { fetcher } from "@/utils/functions"
import { LinksT } from "@/types/datas.types"

const PagesHero = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const pathname = usePathname()
  const splitedPathname = pathname.split("/")
  const currentPageName = splitedPathname[splitedPathname.length - 1]
  const { data: page } = useSWR(`links/${currentPageName}`, () =>
    fetcher<LinksT>(`/api/pages?name=${currentPageName}`)
  )

  return (
    <div className={cn("w-full my-element", className)} {...props}>
      <div className="container center mx-auto max-sm:flex-col lg:max-w-4xl">
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
        <motion.div
          className="sm:mr-9"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="title-base max-sm:center max-sm:mt-6">{page?.title}</h1>
          <p className="content-text text-base-content/75 mt-2.5 sm:hidden max-sm:text-center md:block">
            {page?.description}
          </p>
          <div className="row flex-wrap justify-end gap-x-6 gap-y-3 mt-4 max-sm:justify-center">
            {page?.sections.map((section) => (
              <a key={v4()} className="link-hover row" href={"#" + section.href}>
                <span>{section.name}</span>
                <ArrowDownLeftIcon className="icon-sm mr-2" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PagesHero
