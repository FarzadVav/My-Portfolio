"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect } from "react"
import { v4 } from "uuid"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

import ThemeToggle from "../ThemeToggle"
import { HEADER_LINKS } from "@/utils/initialData"

const HeaderDrawer = () => {
  const pathname = usePathname()

  useEffect(() => {
    const input = document.querySelector("#header_drawer") as HTMLInputElement
    input.click()
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
        <ul className="menu text-base-content bg-base-200 w-80 min-h-full py-3 px-9">
          <li className="row w-full flex-row justify-end">
            <ThemeToggle />
            <label className="btn btn-lg btn-ghost btn-circle" htmlFor="header_drawer">
              <XMarkIcon className="icon-lg" />
            </label>
          </li>
          <li className="w-full mt-6">
            <Link
              className={`btn btn-ghost ${pathname.endsWith("/") ? "btn-active" : ""} w-full`}
              href={"/"}
            >
              صفحه اصلی
            </Link>
          </li>
          {HEADER_LINKS.map((link) => (
            <li key={v4()} className="w-full mt-3">
              <Link
                className={`btn btn-ghost indicator ${
                  pathname.endsWith(link.href) ? "btn-active" : ""
                } w-full ${link.active ? "" : "saturate-0 opacity-90 pointer-events-none"}`}
                href={link.active ? link.href : ""}
              >
                {link.indicator}
                <span>{link.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </button>
  )
}

export default HeaderDrawer
