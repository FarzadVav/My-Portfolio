import Link from "next/link"
import Image from "next/image"
import { FolderIcon, StarIcon } from "@heroicons/react/24/solid"
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline"

import cn from "@/lib/cn"

type ArticleT = {
  className?: string
  picture: string
  category: string
  title: string
  date: Date
  comments: number
  score: number
}

const Article = ({ className, picture, category, title, date, comments, score }: ArticleT) => {
  return (
    <article
      className={cn(
        "center bg-neutral text-neutral-content w-56 h-[400px] flex-col p-3 rounded-box 2xl:h-[450px] group-data-[theme='light']/html:bg-base-300 group-data-[theme='light']/html:text-base-content",
        className
      )}
    >
      <Image
        className="bg-base-100 w-full rounded-box"
        src={picture}
        width={250}
        height={250}
        alt={title}
      />
      <div className="center w-full text-sm mt-3">
        <Link className="link-hover" href={""}>
          {category}
        </Link>
        <FolderIcon className="icon-sm mr-3" />
      </div>
      <Link
        className="link-hover font-base-bold text-primary w-full max-h-[52px] block leading-relaxed text-center mt-auto overflow-hidden"
        href={""}
      >
        {title}
      </Link>
      <div className="row border-t border-solid border-neutral-content/5 w-full text-sm px-1 pt-3 mt-auto">
        <span className="inline-block">{new Date(date).toLocaleDateString("fa-ir")}</span>
        <p className="row text-sm mr-auto">
          <span>{comments}</span>
          <ChatBubbleOvalLeftIcon className="icon-sm mr-1.5" />
        </p>
        <p className="row text-sm mr-3">
          <span>{score}</span>
          <StarIcon className="icon-sm mr-1.5" />
        </p>
      </div>
    </article>
  )
}

export default Article
