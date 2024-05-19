import Link from "next/link"
import { FolderIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

import cn from "@/lib/cn"

type ArticleT = {
  className?: string
  picture: string
  category: string
  title: string
  date: Date
}

const Article = ({ className, picture, category, title, date }: ArticleT) => {
  return (
    <article
      className={cn(
        "center bg-neutral text-neutral-content w-56 h-96 flex-col p-3 rounded-box",
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
      <div className="row w-full text-sm justify-center mt-3">
        <Link className="link-hover" href={""}>
          {category}
        </Link>
        <FolderIcon className="icon-sm mr-3" />
      </div>
      <Link
        className="link-hover font-base-bold text-primary w-full max-h-[52px] block leading-relaxed text-center mt-auto overflow-hidden"
        href={""}
      >
        چگونه آبجکا ها را deep merg کنیم؟
      </Link>
      <div className="row border-t border-solid border-neutral-content/5 w-full text-sm justify-between px-1 pt-3 mt-auto">
        <span className="inline-block">{new Date(date).toLocaleDateString("fa-ir")}</span>
        <Link className="link-hover" href={""}>
          مشاهده
        </Link>
      </div>
    </article>
  )
}

export default Article
