import { v4 } from "uuid"
import { ArrowUturnLeftIcon, HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/24/solid"

type ArticleCommentT = {
  username: string
  date: Date
  score: number
  text: string
  like: number
  dislike: number
}

const ArticleComment = ({ username, date, score, text, like, dislike }: ArticleCommentT) => {
  return (
    <div className="bg-base-300 w-full p-6 rounded-box">
      <div className="row w-full">
        <div className="bg-base-100 size-12 rounded-full"></div>
        <span className="font-base-bold text-xl mr-3">{username}</span>
        <span className="opacity-75 mx-3">-</span>
        <span className="italic">{new Date(date).toLocaleDateString("fa-ir")}</span>
        <div className="row pb-1 mr-auto">
          {score < 5
            ? Array.from(Array(5 - score)).map(() => (
                <StarIcon key={v4()} className="icon-sm opacity-25" />
              ))
            : null}
          {Array.from(Array(score > 5 ? 5 : score)).map(() => (
            <StarIcon key={v4()} className="icon-sm" />
          ))}
        </div>
      </div>
      <p className="w-full text-justify mt-3">{text}</p>
      {/* Replay */}
      <div className="w-full" id="replay">
        <div className="bg-base-100 w-full p-3 mt-6 rounded-box">
          <div className="row w-full">
            <div className="bg-base-300 size-12 rounded-full"></div>
            <span className="font-base-bold text-xl mr-3">{username}</span>
            <span className="opacity-75 mx-3">-</span>
            <span className="italic">{new Date(date).toLocaleDateString("fa-ir")}</span>
            <span className="opacity-50 italic mr-auto">در پاسخ به قبلی</span>
          </div>
          <p className="w-full text-justify mt-3">{text}</p>
          <div className="row border-t border-light w-full pt-6 mt-6">
            <button className="btn">
              <span>پاسخ</span>
              <ArrowUturnLeftIcon className="icon" />
            </button>
            <div className="row gap-1.5 text-sm mr-auto">
              <button className="btn btn-ghost btn-circle">
                <HandThumbUpIcon className="icon" />
              </button>
              <span>{like}</span>
              <button className="btn btn-ghost btn-circle mr-1.5">
                <HandThumbDownIcon className="icon" />
              </button>
              <span>{dislike}</span>
            </div>
          </div>
        </div>
        <div className="bg-base-100 w-full p-3 mt-6 rounded-box">
          <div className="row w-full">
            <div className="bg-base-300 size-12 rounded-full"></div>
            <span className="font-base-bold text-xl mr-3">{username}</span>
            <span className="opacity-75 mx-3">-</span>
            <span className="italic">{new Date(date).toLocaleDateString("fa-ir")}</span>
            <span className="opacity-50 italic mr-auto">در پاسخ به قبلی</span>
          </div>
          <p className="w-full text-justify mt-3">{text}</p>
          <div className="row border-t border-light w-full pt-6 mt-6">
            <button className="btn">
              <span>پاسخ</span>
              <ArrowUturnLeftIcon className="icon" />
            </button>
            <div className="row gap-1.5 text-sm mr-auto">
              <button className="btn btn-ghost btn-circle">
                <HandThumbUpIcon className="icon" />
              </button>
              <span>{like}</span>
              <button className="btn btn-ghost btn-circle mr-1.5">
                <HandThumbDownIcon className="icon" />
              </button>
              <span>{dislike}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Replay */}
      <div className="row border-t border-light w-full pt-6 mt-6">
        <button className="btn">
          <span>پاسخ</span>
          <ArrowUturnLeftIcon className="icon" />
        </button>
        <div className="row text-sm mr-auto">
          <button className="btn btn-ghost btn-circle">
            <HandThumbUpIcon className="icon" />
          </button>
          <span>{like}</span>
          <button className="btn btn-ghost btn-circle mr-1.5">
            <HandThumbDownIcon className="icon" />
          </button>
          <span>{dislike}</span>
        </div>
      </div>
    </div>
  )
}

export default ArticleComment
