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
    <div className={cn("bg-neutral/25 w-full p-6 rounded-box overflow-hidden", className)}>
      <div className="w-full flex">
        <div>
          <span className="font-base-bold text-xl">{username}</span>
          <p className="row gap-2 mt-4">
            <StarIcon className="icon-sm fill-warning" />
            <span>{score}</span>
          </p>
        </div>
        <div className="center bg-neutral w-16 h-16 mr-auto rounded-full relative">
          <Image
            className="blur-xl opacity-10 min-w-64 h-64 rounded-full absolute"
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
      <p className="text-justify leading-relaxed mt-6">{text}</p>
      <div className="row border-t border-solid border-neutral/60 w-full pt-3 mt-6">
        <div className="row">
          <button className="btn btn-ghost btn-circle" aria-label="like">
            <HandThumbUpIcon className="icon" />
          </button>
          <button className="btn btn-ghost btn-circle" aria-label="dislike">
            <HandThumbDownIcon className="icon" />
          </button>
        </div>
        <Link className="link-hover mr-auto hover:text-primary" href={link}>
          مشاهده مقاله
        </Link>
      </div>
    </div>
  )
}

export default Comment
