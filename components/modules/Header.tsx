"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { v4 } from "uuid"
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { MoonIcon, ShareIcon, SunIcon } from "@heroicons/react/24/outline"

const links = [
  { href: "/", text: "مقالات" },
  { href: "/", text: "پادکست" },
  { href: "/", text: "درباره من" },
  { href: "/", text: "ارتباط با من" },
]

const Header = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    themeToggleHandler((localStorage.getItem("theme") as typeof theme | "") || "dark")
  }, [])

  const themeToggleHandler = (currentTheme: typeof theme) => {
    setTheme(currentTheme)
    localStorage.setItem("theme", currentTheme)
    document.querySelector("html")?.setAttribute("data-theme", currentTheme)
  }

  return (
    <header className="bg-base-100 border-b border-light w-full relative z-40">
      <nav className="container row h-24">
        <Link className="center h-full" href={"/"}>
          <button className="btn btn-lg btn-circle btn-ghost">
            <HomeIcon className="icon-lg" />
          </button>
        </Link>
        <div className="row h-full gap-3 mr-3">
          {links.map((link) => (
            <Link
              key={v4()}
              className="py-1 px-3 mr-3 transition-colors hover:text-primary group-data-[theme='dark']/html:font-base-bold"
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <label className="input lg:input-md input-bordered row gap-3 mr-auto rounded-full">
          <MagnifyingGlassIcon className="icon" />
          <input type="text" className="w-56" placeholder="جستجو" />
        </label>

        <div className="dropdown mr-6" dir="ltr">
          <div tabIndex={0} role="button" className="btn btn-lg btn-ghost btn-circle">
            <ShareIcon tabIndex={0} className="icon-lg" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-300 shadow p-2 rounded-box z-10"
          >
            <li>
              <a>Linkedin</a>
            </li>
            <li>
              <a>Instagram</a>
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
          <input
            type="checkbox"
            className="theme-controller"
            defaultChecked={localStorage.getItem("theme") === "light"}
            onChange={(e) => themeToggleHandler(e.target.checked ? "light" : "dark")}
          />
          <SunIcon className="swap-off icon-lg" />
          <MoonIcon className="swap-on icon-lg" />
        </label>
      </nav>
    </header>
  )
}

export default Header
