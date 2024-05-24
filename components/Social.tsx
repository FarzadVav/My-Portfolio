import Image from "next/image"
import { ArrowUpLeftIcon, EllipsisHorizontalIcon, ShareIcon } from "@heroicons/react/24/outline"
import cn from "@/lib/cn"

type SocialT = {
  className?: string
  title: string
  count: number
  logo: string
  benefits: string[]
  link: string
}

const Social = ({ className, title, count, logo, benefits, link }: SocialT) => {
  return (
    <div
      className={cn(
        "glass w-1/3 h-[325px] flex flex-col p-6 rounded-box group-data-[theme='light']/html:bg-neutral group-data-[theme='light']/html:text-neutral-content",
        className
      )}
    >
      <div className="row w-full">
        <span className="title-lg">{title}</span>
        <div className="indicator w-24 h-16 mr-auto" dir="ltr">
          <span className="indicator-item badge badge-error shadow-xl shadow-base-100/50 group-data-[theme='light']/html:shadow-neutral/50">
            {count} +
          </span>
          <Image
            className="ring-8 ring-neutral/15 w-16 h-full rounded-full"
            src={logo}
            height={64}
            width={64}
            alt={title}
          />
        </div>
      </div>
      <ul className="w-full mt-auto">
        {benefits.map((item) => (
          <li className="w-full flex mt-3 first-of-type:mt-0">
            <span className="ring-1 ring-neutral-content inline-block w-1.5 h-1.5 ml-3 rounded-full translate-y-3"></span>
            <p className="leading-relaxed">{item}</p>
          </li>
        ))}
      </ul>
      <div className="row w-full mt-auto">
        <a className="btn" href={link} target="_blank">
          <span>مشاهده صفحه</span>
          <ArrowUpLeftIcon className="icon" />
        </a>
        <button className="btn btn-ghost btn-circle mr-auto">
          <ShareIcon className="icon" />
        </button>
        <button className="btn btn-ghost btn-circle mr-1.5">
          <EllipsisHorizontalIcon className="icon-lg" />
        </button>
      </div>
    </div>
  )
}

export default Social
