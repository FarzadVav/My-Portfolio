import Link from "next/link"
import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/24/solid"
import cn from "@/lib/cn"
import Image from "next/image"

type CommentT = {
  className?: string
  username: string
  picture: string
  score: number
  text: string
  link: string
}

const Comment = ({ className, username, picture, score, text, link }: CommentT) => {
  return (
    <div
      className={cn(
        "bg-base-200/75 w-full h-80 flex flex-col p-6 rounded-box overflow-hidden",
        className
      )}
    >
      <div className="w-full flex">
        <div>
          <span className="font-base-bold text-xl">{username}</span>
          <p className="row gap-2 mt-4">
            <StarIcon className="icon-sm fill-warning" />
            <span>{score}</span>
          </p>
        </div>
        <div className="center w-16 h-16 mr-auto rounded-full relative">
          <Image
            className="blur-xl opacity-10 min-w-64 h-64 rounded-full absolute group-data-[theme='light']/html:opacity-15"
            src={picture}
            height={256}
            width={256}
            alt={"نظر" + username}
          />
          <Image
            className="w-full h-full rounded-full absolute"
            src={picture}
            height={64}
            width={64}
            alt={"نظر" + username}
          />
        </div>
      </div>
      <p className="max-h-[90px] text-justify leading-relaxed mt-auto pb-3 overflow-hidden">
        {text}
      </p>
      <div className="row border-t border-light w-full pt-3 mt-auto">
        <Link className="link-hover transition-colors hover:text-primary" href={link}>
          بررسی مقاله
        </Link>
        <button className="btn btn-ghost btn-circle mr-auto" aria-label="like">
          <HandThumbUpIcon className="icon" />
        </button>
        <button className="btn btn-ghost btn-circle mr-1.5" aria-label="dislike">
          <HandThumbDownIcon className="icon" />
        </button>
      </div>
    </div>
  )
}

export default Comment
