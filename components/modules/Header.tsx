"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import useSWR from "swr"
import { v4 } from "uuid"
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { Bars3Icon, ShareIcon, XMarkIcon } from "@heroicons/react/24/outline"

import { fetcher } from "@/utils/functions"
import { GeneralInfoT, SocialsT } from "@/types/datas.types"
import { HEADER_LINKS } from "@/utils/initialData"
import HeaderSearch from "./HeaderSearch"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
  const pathname = usePathname()
  const { data: generalInfo } = useSWR("generalInfo", () =>
    fetcher<GeneralInfoT>("/api/generalInfo")
  )
  const { data: socials } = useSWR("socials", () => fetcher<SocialsT[]>("/api/socials"))

  return (
    <header className="bg-base-100 border-b border-light w-full sticky top-0 z-40">
      <div className="container row h-24">
        <nav className="row w-full h-full max-md:hidden">
          <Link className="center h-full" href={"/"}>
            <button className="btn btn-lg btn-circle btn-ghost">
              <HomeIcon className="icon-lg" />
            </button>
          </Link>
          <div className="row h-full gap-3 mr-3 max-lg:gap-6 max-lg:mr-6 xl:gap-6 xl:mr-6">
            {HEADER_LINKS.map((link) => (
              <Link
                key={v4()}
                className={`indicator ${
                  pathname.endsWith(link.href) ? "text-primary" : ""
                } py-1 px-3 ${
                  link.active
                    ? "transition-colors relative hover:text-primary group-data-[theme='dark']/html:font-base-bold"
                    : "saturate-0 opacity-90 pointer-events-none"
                }`}
                href={link.active ? link.href : ""}
              >
                {link.indicator}
                <span>{link.text}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* mobile drawer */}
        <button className="drawer drawer-end w-max md:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <label htmlFor="my-drawer" className="btn btn-lg btn-circle btn-ghost drawer-button">
            <Bars3Icon className="icon-lg" />
          </label>
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul
              className="menu text-base-content bg-base-200 w-80 min-h-full py-3 px-9"
              onClick={(event) => {
                const elem = event.target as HTMLElement
                elem.nodeName === "A" &&
                  (document.querySelector(".drawer-overlay") as HTMLLinkElement).click()
              }}
            >
              <li className="row w-full flex-row justify-end">
                <ThemeToggle />
                <label className="btn btn-lg btn-ghost btn-circle" htmlFor="my-drawer">
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
        {/* mobile drawer */}

        {/* search */}
        <div className="max-lg:hidden">
          <HeaderSearch />
        </div>
        {/* search */}

        {/* social dropdown */}
        <div className="dropdown mr-auto lg:mr-1.5 xl:mr-6" dir="ltr">
          <div tabIndex={0} role="button" className="btn btn-lg btn-ghost btn-circle">
            <ShareIcon tabIndex={0} className="icon-lg" />
          </div>
          {socials?.length && generalInfo ? (
            <ul tabIndex={0} className="dropdown-content bg-base-300">
              {socials.map((social) => (
                <li key={social.id} dir="rtl">
                  <a href={social.link} target="_blank">
                    {social.name}
                  </a>
                </li>
              ))}
              <li className="border-t border-light pt-2 mt-2">
                <a>{generalInfo.email}</a>
              </li>
              <li>
                <a>{generalInfo.phone}</a>
              </li>
            </ul>
          ) : null}
        </div>
        {/* social dropdown */}

        {/* theme toggle */}
        <ThemeToggle className="mr-1.5 max-md:hidden" />
        {/* theme toggle */}

        {/* mobile search */}
        <div className="lg:hidden">
          <input id="header_mobile-search-toggle" type="checkbox" className="hidden peer" />
          <label
            className="btn btn-lg btn-circle btn-ghost group peer-checked:hidden"
            htmlFor="header_mobile-search-toggle"
          >
            <MagnifyingGlassIcon className="icon-lg" />
          </label>
          <label
            className="btn btn-lg btn-circle btn-ghost hidden group peer-checked:inline-flex"
            htmlFor="header_mobile-search-toggle"
          >
            <XMarkIcon className="icon-lg" />
          </label>
          <div className="bg-gradient-to-b from-base-100 from-25% to-transparent opacity-0 invisible w-screen h-[calc(100vh-97px)] p-3 fixed top-[97px] left-0 z-40 translate-y-12 transition-all peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-0">
            <HeaderSearch />
          </div>
        </div>
        {/* mobile search */}
      </div>
    </header>
  )
}

export default Header
