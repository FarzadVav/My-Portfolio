import Image from "next/image"
import Link from "next/link"

import { ArrowLongLeftIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline"

type ArticleCategoryT = {
  className?: string
  category: string
  picture: string
  articleCount: number
  link: string
}

const ArticleCategory = ({
  className,
  category,
  picture,
  articleCount,
  link,
}: ArticleCategoryT) => {
  return (
    <article className={`bg-neutral w-96 h-40 flex flex-col p-6 rounded-box ${className}`}>
      <div className="w-full flex items-start">
        <Link
          className="link-hover font-base-bold h-[65px] text-xl leading-relaxed ml-3 overflow-hidden"
          href={link}
        >
          {category}
        </Link>
        <Image
          className="w-20 h-20 mr-auto rounded-box"
          src={picture}
          height={80}
          width={80}
          alt=""
        />
      </div>
      <div className="row gap-6 mt-auto">
        <span className="row gap-3 text-sm">
          <DocumentDuplicateIcon className="icon" />
          بیش از {articleCount} مقاله
        </span>
        <Link className="link-hover row text-primary gap-3" href={link}>
          مشاهده
          <ArrowLongLeftIcon className="icon" />
        </Link>
      </div>
    </article>
  )
}

export default ArticleCategory
