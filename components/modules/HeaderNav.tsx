"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { v4 } from "uuid"
import { HomeIcon } from "@heroicons/react/24/solid"

import { HEADER_LINKS } from "@/utils/initialData"

const HeaderNav = () => {
  const pathname = usePathname()

  return (
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
            className={`indicator ${pathname.endsWith(link.href) ? "text-primary" : ""} py-1 px-3 ${
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
  )
}

export default HeaderNav
