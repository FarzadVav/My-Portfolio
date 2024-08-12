import Image from "next/image"
import Link from "next/link"
import { HTMLAttributes } from "react"
import {
  ArrowTopRightOnSquareIcon,
  DocumentDuplicateIcon,
  HashtagIcon,
} from "@heroicons/react/24/outline"

import cn from "@/utils/cn"
import { ArticlesCategoriesT } from "@/types/datas.types"

type ArticleCategoryT = HTMLAttributes<HTMLElement> & ArticlesCategoriesT

const ArticleCategory = ({ className, id, name, logo, articles, tags }: ArticleCategoryT) => {
  return (
    <article className={cn("rounded-box", className)}>
      <div className="bg-base-300 w-full h-24 pt-4 rounded-t-box relative">
        {/* rounded absolute element */}
        <div className="bg-base-200 w-1/2 h-4 absolute top-0 left-0 rounded-t-box sm:w-1/3"></div>
        {/* rounded absolute element */}
        <div className="bg-base-200 w-full h-20 px-6 rounded-tr-box relative">
          <Cards logo={logo} />
        </div>
      </div>

      <div className="bg-base-300 w-full flex flex-col p-6 rounded-b-box relative">
        <Link
          className="link-hover row w-full justify-between h-[58.5px]"
          href={"/articles?category=" + id}
        >
          <p className="font-bold text-lg leading-relaxed line-clamp-2 sm:text-xl">{name}</p>
          <ArrowTopRightOnSquareIcon className="icon min-w-max mr-1.5" />
        </Link>

        <div className="row w-full mt-6">
          <p className="font-bold row leading-relaxed">
            <DocumentDuplicateIcon className="icon" />
            <span className="mr-1.5">{articles.length}</span>
          </p>
          <p className="font-bold row leading-relaxed mr-3">
            <HashtagIcon className="icon" />
            <span className="mr-1.5">{tags.length}</span>
          </p>
        </div>
      </div>
    </article>
  )
}

const Cards = ({ logo }: { logo: string }) => {
  return (
    <>
      <div className="bg-base-100 shadow-xl shadow-base-300 w-1/3 h-16 p-3 rounded-t-box -rotate-6 absolute -bottom-2.5 left-6">
        <span className="bg-base-content/10 block h-2 rounded-full"></span>
        <span className="bg-base-content/10 block h-2 mt-1 rounded-full"></span>
        <span className="bg-base-content/10 block h-2 mt-1 rounded-full"></span>
        <span className="bg-base-content/10 block h-2 mt-1 rounded-full"></span>
      </div>

      <div className="bg-base-100 shadow-xl shadow-base-300 w-1/3 h-12 p-3 rounded-t-box absolute left-1/2 bottom-0 -translate-x-1/2">
        <span className="bg-base-content/10 block w-1/3 h-2 rounded-full"></span>
        <span className="bg-base-content/10 block w-full h-1 mt-2 rounded-full"></span>
        <span className="bg-base-content/10 block w-full h-1 mt-1 rounded-full"></span>
      </div>

      <div className="bg-base-100 shadow-xl shadow-base-300 w-1/3 min-w-[100px] h-16 p-3 rounded-t-box absolute bottom-0 right-6">
        <div className="row">
          <Image
            className="size-7 rounded-full"
            src={logo}
            width={28}
            height={28}
            alt={"لوگوی دسته بندی"}
          />
          <div className="w-1/2 mr-auto">
            <span className="bg-base-content/10 block w-full h-2 rounded-full"></span>
            <span className="bg-base-content/10 block w-3/4 h-2 mr-auto mt-1 rounded-full"></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleCategory
