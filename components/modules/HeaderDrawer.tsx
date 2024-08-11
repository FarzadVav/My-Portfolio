"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect } from "react"
import useSWR from "swr"
import { v4 } from "uuid"
import {
  ArrowUpLeftIcon,
  Bars3Icon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

import { fetcher } from "@/utils/fetcher"
import { GeneralInfoT, PagesT, SocialsT } from "@/types/datas.types"
import ThemeToggle from "../ThemeToggle"

type HeaderDrawerT = {
  generalInfo: GeneralInfoT | undefined
  socials: SocialsT[] | undefined
}

const HeaderDrawer = ({ generalInfo, socials }: HeaderDrawerT) => {
  const pathname = usePathname()
  const { data: pages } = useSWR("pages", () => fetcher<PagesT[]>("/api/pages"))

  useEffect(() => {
    const input = document.querySelector("#header_drawer") as HTMLInputElement
    input.checked && input.click()
  }, [pathname])

  return (
    <button className="drawer drawer-end w-max md:hidden">
      <input id="header_drawer" type="checkbox" className="drawer-toggle" />
      <label htmlFor="header_drawer" className="btn btn-lg btn-circle btn-ghost drawer-button">
        <Bars3Icon className="icon-lg" />
      </label>
      <div className="drawer-side z-50">
        <label
          htmlFor="header_drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu text-base-content bg-base-200 w-1/2 min-w-72 min-h-full py-3">
          <li className="row w-full flex-row justify-end">
            <ThemeToggle />
            <label className="btn btn-ghost btn-circle mr-3" htmlFor="header_drawer">
              <XMarkIcon className="icon" />
            </label>
          </li>
          <li className="mt-6">
            <Link
              className={`btn btn-ghost ${pathname.endsWith("/") ? "btn-active" : ""} w-full`}
              href={"/"}
            >
              صفحه اصلی
            </Link>
          </li>
          {pages?.data?.map((page) => (
            <li key={v4()} className="mt-3">
              <Link
                className={`btn btn-ghost indicator ${
                  pathname.endsWith(page.href) ? "btn-active" : ""
                } w-full ${page.active ? "" : "saturate-0 opacity-90 pointer-events-none"}`}
                href={page.active ? page.href : "/"}
              >
                {page.active ? null : (
                  <span className="indicator-item badge badge-sm badge-secondary !translate-x-3">
                    بزودی
                  </span>
                )}
                <span>{page.name}</span>
              </Link>
            </li>
          ))}

          <div className="w-full row flex-wrap gap-3 mt-auto">
            {socials?.map((social) => (
              <li key={social.id}>
                <a className="btn btn-sm btn-primary" href={social.link} target="_blank">
                  <span>{social.name}</span>
                  <ArrowUpLeftIcon className="icon-sm" />
                </a>
              </li>
            ))}
            <li>
              <a className="btn btn-sm btn-primary">
                <span>{generalInfo?.email}</span>
                <EnvelopeIcon className="icon-sm" />
              </a>
            </li>
            <li>
              <a className="btn btn-sm btn-primary">
                <span>{generalInfo?.phone}</span>
                <PhoneIcon className="icon-sm" />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </button>
  )
}

export default HeaderDrawer
