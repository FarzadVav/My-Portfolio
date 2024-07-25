"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import useSWR from "swr"
import { HomeIcon } from "@heroicons/react/24/solid"

import { PagesT } from "@/types/datas.types"
import { fetcher } from "@/utils/functions"

const HeaderNav = () => {
  const pathname = usePathname()
  const { data: pages, isLoading } = useSWR("pages", () => fetcher<PagesT[]>("/api/pages"))
  console.log(pages)

  return (
    <nav className="row w-full max-md:hidden">
      <Link className="center h-full" href={"/"}>
        <button className="btn btn-lg btn-circle btn-ghost">
          <HomeIcon className="icon-lg" />
        </button>
      </Link>
      <div className="row h-full gap-3 mr-3 max-lg:gap-6 max-lg:mr-6 xl:gap-6 xl:mr-6">
        {isLoading ? (
          <>
            <div className="skeleton bg-base-300 w-20 h-6 rounded-btn"></div>
            <div className="skeleton bg-base-300 w-16 h-6 rounded-btn"></div>
            <div className="skeleton bg-base-300 w-20 h-6 rounded-btn"></div>
            <div className="skeleton bg-base-300 w-20 h-6 rounded-btn"></div>
          </>
        ) : null}
        {pages?.map((page) => (
          <Link
            key={page.id}
            className={`font-base-bold indicator ${
              pathname.endsWith(page.href) ? "text-primary" : ""
            } py-1 px-3 ${
              page.active
                ? "transition-colors relative hover:text-primary"
                : "saturate-0 opacity-90 pointer-events-none"
            }`}
            href={page.active ? page.href : ""}
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
