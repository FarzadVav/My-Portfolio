import Image from "next/image"
import Link from "next/link"
import {
  DocumentDuplicateIcon,
  EllipsisHorizontalIcon,
  HashtagIcon,
} from "@heroicons/react/24/outline"

import cn from "@/lib/cn"

type ArticleCategoryT = {
  className?: string
  category: string
  picture: string
  articleCount: number
  tagsCount: number
  link: string
}

const ArticleCategory = ({
  className,
  category,
  picture,
  articleCount,
  tagsCount,
  link,
}: ArticleCategoryT) => {
  return (
    <article className={cn("ring-base-300 w-56 rounded-box", className)}>
      <div className="bg-base-300 w-full h-24 rounded-t-box relative">
        {/* rounded absolute element */}
        <div className="bg-base-200 w-1/3 h-4 absolute top-0 left-0 rounded-t-box"></div>
        {/* rounded absolute element */}
        <div className="bg-base-200 w-full h-20 flex flex-row-reverse items-end justify-center px-6 rounded-tr-box relative translate-y-4">
          <div className="bg-neutral shadow-xl shadow-base-200 w-1/3 h-16 p-3 rounded-t-box -rotate-6 translate-x-9 translate-y-2">
            <span className="bg-neutral-content/10 block w-flul h-2 rounded-full"></span>
            <span className="bg-neutral-content/10 block w-flul h-2 mt-1 rounded-full"></span>
            <span className="bg-neutral-content/10 block w-flul h-2 mt-1 rounded-full"></span>
            <span className="bg-neutral-content/10 block w-flul h-2 mt-1 rounded-full"></span>
          </div>
          <div className="bg-neutral shadow-xl shadow-base-200 w-1/3 h-12 p-3 rounded-t-box translate-x-0">
            <span className="bg-neutral-content/10 block w-1/3 h-2 rounded-full"></span>
            <span className="bg-neutral-content/10 block w-full h-1 mt-2 rounded-full"></span>
            <span className="bg-neutral-content/10 block w-full h-1 mt-1 rounded-full"></span>
          </div>
          <div className="bg-neutral shadow-xl shadow-base-200 w-1/3 min-w-[100px] h-16 p-3 rounded-t-box -translate-x-6">
            <div className="row">
              <Image
                className="size-7 rounded-full"
                src={picture}
                width={28}
                height={28}
                alt={category}
              />
              <div className="w-1/2 mr-auto">
                <span className="bg-neutral-content/10 block w-full h-2 rounded-full"></span>
                <span className="bg-neutral-content/10 block w-3/4 h-2 mr-auto mt-1 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-base-300 w-full flex flex-col p-6 rounded-b-box relative">
        <div className="w-full flex">
          <Link
            className="link-hover font-base-bold content-title-lg h-[65px] leading-relaxed ml-3 overflow-hidden"
            href={link}
          >
            {category}
          </Link>
          <div className="dropdown dropdown-top dropdown-end mr-auto">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <EllipsisHorizontalIcon className="icon-lg" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-200 shadow-xl w-max p-3 rounded-box z-10"
            >
              <li>
                <a>مشاهده مقالات مرتبط</a>
              </li>
              <li>
                <a>مشاهده مقالات غیر مرتبط</a>
              </li>
              <li>
                <a>هشتگ های مرتبط</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row w-full mt-3">
          <p className="font-base-bold row leading-relaxed">
            <DocumentDuplicateIcon className="icon" />
            <span className="mr-1.5">{articleCount}</span>
          </p>
          <p className="font-base-bold row leading-relaxed mr-3">
            <HashtagIcon className="icon" />
            <span className="mr-1.5">{tagsCount}</span>
          </p>
        </div>
      </div>
    </article>
  )
}

export default ArticleCategory
