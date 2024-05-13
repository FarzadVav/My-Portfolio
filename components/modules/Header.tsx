"use client"

import Link from "next/link"
import { HomeIcon, LinkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { MoonIcon, ShareIcon, SunIcon } from "@heroicons/react/24/outline"

const links = [
  { href: "/", text: "مقالات" },
  { href: "/", text: "پادکست" },
  { href: "/", text: "درباره من" },
  { href: "/", text: "ارتباط با من" },
]

const Header = () => {
  return (
    <header className="border-b border-solid border-neutral w-full z-40">
      <nav className="container row h-20">
        <Link className="center h-full" href={"/"}>
          <button className="btn btn-circle btn-ghost">
            <HomeIcon className="icon" />
          </button>
        </Link>
        <div className="row h-full gap-3 mr-3">
          {links.map((link) => (
            <Link href={link.href}>
              <button className="btn btn-sm btn-ghost rounded-full">{link.text}</button>
            </Link>
          ))}
        </div>
        <label className="input input-sm input-bordered row gap-3 mr-auto rounded-full">
          <MagnifyingGlassIcon className="icon-sm" />
          <input type="text" className="w-36" placeholder="جستجو" />
        </label>
        <button className="btn btn-ghost mr-3 rounded-none relative group hover:bg-transparent">
          <ShareIcon tabIndex={0} className="icon" />
          <div className="p-1 absolute left-0 top-11 opacity-0 invisible transition-colors group-hover:opacity-100 group-hover:visible z-10">
            <ul className="row shadow bg-base-200 gap-3 py-3 px-6 rounded-box">
              <li>
                <Link href={""}>LinkedIn</Link>
              </li>
              <li>
                <Link href={""}>Instagram</Link>
              </li>
              <li>
                <Link href={""}>Telegram</Link>
              </li>
              <li>
                <Link href={""}>Github</Link>
              </li>
              <li>
                <Link href={""}>Email</Link>
              </li>
              <li>
                <Link href={""}>Phone</Link>
              </li>
            </ul>
          </div>
        </button>
        <label className="swap swap-rotate btn btn-ghost btn-circle mr-3">
          <input type="checkbox" className="theme-controller" value="synthwave" />
          <SunIcon className="swap-off icon" />
          <MoonIcon className="swap-on icon" />
        </label>
      </nav>
    </header>
  )
}

export default Header
