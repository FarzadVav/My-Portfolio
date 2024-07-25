"use client"

import { navigationShare } from "@/utils/navigationShare"
import { ClipboardDocumentIcon, ShareIcon } from "@heroicons/react/24/outline"

type ArticleShareSectionT = {
  title: string
  text: string
}

const ArticleShareSection = ({ title, text }: ArticleShareSectionT) => {
  return (
    <div className="row border-t border-light w-full flex-wrap-reverse gap-3 pt-3 mt-3">
      <button
        className="btn btn-ghost"
        onClick={() => {
          navigationShare({
            title,
            text,
            url: location.href,
          })
        }}
      >
        <span>اشتراک گذاری</span>
        <ShareIcon className="icon mr-1" />
      </button>
      <div className="row mr-auto max-md:w-full" dir="ltr">
        <button className="btn btn-ghost btn-circle mr-3" aria-label="copy url">
          <ClipboardDocumentIcon className="icon" />
        </button>
        <p className="overflow-x-auto md:max-w-96 max-md:flex-1">{location.href}</p>
      </div>
    </div>
  )
}

export default ArticleShareSection
