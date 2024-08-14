"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import useSWR from "swr"
import { HomeIcon } from "@heroicons/react/24/solid"

import { PagesT } from "@/types/datas.types"
import { fetcher } from "@/utils/fetcher"
import useLoading from "@/hooks/store/useLoading"

const HeaderNav = () => {
  const { data: pages, isLoading } = useSWR("pages", () => fetcher<PagesT[]>("/api/pages"))
  const { startLoading } = useLoading()
  const pathname = usePathname()

  return (
    <nav className="row w-full max-md:hidden">
      <Link className="center h-full" href={"/"}>
        <button className="btn btn-circle btn-ghost">
          <HomeIcon className="icon" />
        </button>
      </Link>
      <div className="row h-full gap-6 mr-3">
        {isLoading ? (
          <>
            <div className="skeleton w-20 h-6 rounded-btn"></div>
            <div className="skeleton w-20 h-6 rounded-btn"></div>
            <div className="skeleton w-20 h-6 rounded-btn"></div>
            <div className="skeleton w-20 h-6 rounded-btn"></div>
          </>
        ) : null}
        {pages?.data?.map((page) => (
          <Link
            key={page.id}
            className={`font-bold indicator ${
              pathname.endsWith(page.href) ? "text-primary" : ""
            } py-1 px-3 ${
              page.active
                ? "transition-colors relative hover:text-primary"
                : "saturate-0 opacity-90 pointer-events-none"
            }`}
            href={page.active ? page.href : "/"}
            onClick={() => startLoading()}
          >
            {page.active ? null : (
              <span className="indicator-item badge badge-sm badge-secondary">بزودی</span>
            )}
            <span>{page.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default HeaderNav
