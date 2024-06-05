"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import { v4 } from "uuid"
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { Bars3Icon, MoonIcon, ShareIcon, SunIcon } from "@heroicons/react/24/outline"

const links = [
  { href: "/articles", text: "مقالات" },
  { href: "/podcast", text: "پادکست" },
  { href: "/about", text: "درباره من" },
]

const Header = () => {
  const pathname = usePathname()
  const [theme, setTheme] = useState<"dark" | "light" | undefined>(undefined)

  useEffect(() => {
    themeToggleHandler(localStorage.getItem("theme") || "dark")
  }, [])

  const themeToggleHandler = (currentTheme: string) => {
    setTheme(currentTheme as typeof theme)
    localStorage.setItem("theme", currentTheme)
    document.querySelector("html")?.setAttribute("data-theme", currentTheme)
  }

  return (
    <header className="bg-base-100 border-b border-light w-full relative z-40">
      <div className="container row h-24">
        <nav className="row w-full h-full max-md:hidden">
          <Link className="center h-full" href={"/"}>
            <button className="btn btn-lg btn-circle btn-ghost">
              <HomeIcon className="icon-lg" />
            </button>
          </Link>
          <div className="row h-full gap-6 mr-6">
            {links.map((link) => (
              <Link
                key={v4()}
                className={`${
                  pathname.endsWith(link.href) ? "text-primary" : ""
                } py-1 px-3 transition-colors relative hover:text-primary group-data-[theme='dark']/html:font-base-bold`}
                href={link.href}
              >
                {link.text}
              </Link>
            ))}
            <Link
              className={`indicator ${
                pathname.endsWith("/contact") ? "text-primary" : ""
              } py-1 px-3 transition-colors relative hover:text-primary group-data-[theme='dark']/html:font-base-bold`}
              href={"/contact"}
            >
              <span className="indicator-item badge badge-sm badge-secondary -translate-y-1">
                6
              </span>
              <span>ارتباط با من</span>
            </Link>
          </div>
        </nav>

        <button className="btn btn-lg btn-circle btn-ghost md:hidden">
          <Bars3Icon className="icon-lg" />
        </button>


        <label className="input lg:input-md input-bordered row gap-3 mr-auto rounded-full max-xl:hidden">
          <MagnifyingGlassIcon className="icon" />
          <input type="text" className="w-56" placeholder="جستجو" />
          <div className="row gap-1">
            <kbd className="kbd kbd-sm">k</kbd>+<kbd className="kbd kbd-sm">ctrl</kbd>
          </div>
        </label>
        <button className="btn btn-lg btn-circle btn-ghost mr-auto xl:hidden">
          <MagnifyingGlassIcon className="icon-lg" />
        </button>
        <div className="dropdown mr-1.5 xl:mr-6" dir="ltr">
          <div tabIndex={0} role="button" className="btn btn-lg btn-ghost btn-circle">
            <ShareIcon tabIndex={0} className="icon-lg" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-300 shadow-xl p-3 rounded-box z-10"
          >
            <li>
              <a>Linkedin</a>
            </li>
            <li>
              <a>Telegram</a>
            </li>
            <li>
              <a>Github</a>
            </li>
            <li>
              <a>farzad.vav.work@gmail.com</a>
            </li>
            <li>
              <a>09389461065</a>
            </li>
          </ul>
        </div>
        <label className="btn btn-lg btn-ghost btn-circle swap swap-rotate mr-1.5">
          {theme ? (
            <input
              type="checkbox"
              className="theme-controller"
              defaultChecked={theme === "light"}
              onChange={(e) => themeToggleHandler(e.target.checked ? "light" : "dark")}
            />
          ) : null}
          <SunIcon className="swap-off icon-lg" />
          <MoonIcon className="swap-on icon-lg" />
        </label>
      </div>
    </header>
  )
}

export default Header
