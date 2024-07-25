"use client"

import { HTMLAttributes, ReactNode, useState } from "react"
import { v4 } from "uuid"
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline"

type PageinationT = HTMLAttributes<HTMLDivElement> & {
  data: ReactNode[]
  pageCount: number
}

const Pageination = ({ data, pageCount, ...props }: PageinationT) => {
  const [page, setPage] = useState(1)
  const lastIndex = page * pageCount
  const firstIndex = lastIndex - pageCount
  const dataCountToDisplay = Math.ceil(data.length / pageCount)

  return (
    <>
      <div {...props}>{data.slice(firstIndex, lastIndex).map((item) => item)}</div>
      {dataCountToDisplay > 1 ? (
        <div className="join w-full justify-center mt-6">
          <button
            className="join-item btn"
            onClick={() => page > 1 && setPage((prev) => prev - 1)}
            disabled={page === 1}
          >
            <ChevronDoubleRightIcon className="icon-sm" />
          </button>
          {Array.from({ length: dataCountToDisplay }, (_, i) => i + 1).map((count) => (
            <button
              key={v4()}
              className={`join-item btn ${page === count ? "btn-active" : ""}`}
              onClick={() => page !== count && setPage(count)}
            >
              {count}
            </button>
          ))}
          <button
            className="join-item btn"
            onClick={() => page < dataCountToDisplay && setPage((prev) => prev + 1)}
            disabled={page === dataCountToDisplay}
          >
            <ChevronDoubleLeftIcon className="icon-sm" />
          </button>
        </div>
      ) : null}
    </>
  )
}

export default Pageination
