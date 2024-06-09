import Link from "next/link"
import { HashtagIcon } from "@heroicons/react/24/outline"
import cn from "@/lib/cn"

type TagT = {
  className?: string
  name: string
}

const Tag = ({ className, name }: TagT) => {
  return (
    <Link className={cn("btn rounded-full max-sm:btn-sm max-sm:text-sm", className)} href={`/articles?tag=${name}`}>
      <span>{name}</span>
      <HashtagIcon className="icon-xs sm:icon-sm" />
    </Link>
  )
}

export default Tag
