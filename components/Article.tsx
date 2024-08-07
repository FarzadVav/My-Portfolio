import Link from "next/link"
import Image from "next/image"
import { FolderIcon, StarIcon } from "@heroicons/react/24/solid"
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline"

import cn from "@/utils/cn"
import { ArticlesT } from "@/types/datas.types"
import { HTMLAttributes } from "react"

type ArticleT = ArticlesT & HTMLAttributes<HTMLElement>

const Article = ({ className, picture, category, name, updatedAt, comments }: ArticleT) => {
  const score = 4

  return (
    <article className={cn("center bg-base-200 flex-col text-sm p-3 rounded-box", className)}>
      <Image
        className="bg-base-100 w-full rounded-box"
        src={picture}
        width={256}
        height={256}
        alt={name}
      />
      <div className="center w-full mt-3">
        <Link className="link-hover" href={"articles?category=" + category}>
          {category.name}
        </Link>
        <FolderIcon className="icon-sm mr-3" />
      </div>
      <Link
        className="link-hover font-base-bold content-title center text-primary w-full h-[65px] leading-relaxed text-center mt-3 overflow-hidden"
        href={"/articles/" + name}
      >
        {name}
      </Link>
      <div className="row border-t border-light w-full px-1 pt-3 mt-3">
        <span className="inline-block">{new Date(updatedAt).toLocaleDateString("fa-ir")}</span>
        <p className="row mr-auto">
          <span>{comments.length}</span>
          <ChatBubbleOvalLeftIcon className="icon-sm mr-1.5" />
        </p>
        <p className="row mr-3">
          <span>{score}</span>
          <StarIcon className="icon-sm mr-1.5" />
        </p>
      </div>
    </article>
  )
}

export default Article
