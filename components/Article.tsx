import Link from "next/link"
import Image from "next/image"
import { HTMLAttributes } from "react"
import { FolderIcon, StarIcon } from "@heroicons/react/24/solid"
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline"

import cn from "@/utils/cn"
import { ArticlesT } from "@/types/datas.types"
import { v4 } from "uuid"

type ArticleT = ArticlesT & HTMLAttributes<HTMLElement>

const Article = ({
  className,
  picture,
  category,
  name,
  score,
  draft,
  updatedAt,
  comments,
}: ArticleT) => {
  return (
    <article className={cn("bg-base-200 w-full p-3 rounded-box group", className)}>
      <div className="bg-base-100 center w-full rounded-box relative overflow-hidden">
        <Image
          className={`w-full aspect-square ${!draft ? "blur-sm" : ""}`}
          src={picture}
          width={256}
          height={256}
          alt={name}
        />
        {!draft ? (
          <p className="bg-base-300/50 px-5 py-2 rounded-box absolute -rotate-12">
            بزودی منتشر می‌شود
          </p>
        ) : null}
        {draft ? (
          <div
            className="row bg-base-300/50 absolute bottom-3 px-3 py-1 rounded-box sm:transition-all sm:translate-y-full sm:scale-0 sm:origin-bottom sm:opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
            dir="ltr"
          >
            {Array.from(Array(score > 5 ? 5 : score)).map(() => (
              <StarIcon key={v4()} className="icon-xs lg:icon-sm" />
            ))}
            {score < 5
              ? Array.from(Array(5 - score)).map(() => (
                  <StarIcon key={v4()} className="icon-xs opacity-25 lg:icon-sm" />
                ))
              : null}
          </div>
        ) : null}
      </div>
      <div className="center w-full h-6 mt-4">
        <Link className="link-hover" href={draft ? "articles?category=" + category : ""}>
          {category.name}
        </Link>
        <FolderIcon className="icon mr-3" />
      </div>
      <div className="center w-full h-[65px] mt-1">
        <Link
          className="link-hover font-base-bold text-lg text-primary text-center leading-relaxed line-clamp-2"
          href={draft ? "/articles/" + name : ""}
        >
          {name}
        </Link>
      </div>
      <div className="row border-t border-light w-full h-[34px] text-sm px-1 pt-3 mt-3">
        <span className="inline-block">{new Date(updatedAt).toLocaleDateString("fa-ir")}</span>
        <p className="row mr-auto">
          <span>{comments.length}</span>
          <ChatBubbleOvalLeftIcon className="icon-sm mr-1.5" />
        </p>
      </div>
    </article>
  )
}

export default Article
