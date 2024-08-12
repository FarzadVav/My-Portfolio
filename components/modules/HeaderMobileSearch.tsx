"use client"

import { useState } from "react"
import { createPortal } from "react-dom"
import { ArrowUpLeftIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"

import { useIsClient } from "@uidotdev/usehooks"

const HeaderMobileSearch = () => {
  const isClient = useIsClient()
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  return (
    <>
      <button
        className="btn btn-circle btn-ghost swap swap-rotate mr-auto md:mr-1.5 lg:hidden"
        onClick={() => setShowMobileSearch((prev) => !prev)}
      >
        <input type="checkbox" checked={showMobileSearch} />
        <XMarkIcon className="swap-on icon" />
        <MagnifyingGlassIcon className="swap-off icon" />
      </button>
      {isClient
        ? createPortal(
            <>
              <div
                className={`bg-base-100 shadow-2xl border-b border-light w-screen px-3 py-6 fixed top-24 left-0 z-30 transition-all lg:hidden ${
                  showMobileSearch ? "" : "opacity-0 invisible -translate-y-full"
                }`}
              >
                <label className="input input-bordered row w-full gap-3 pl-2 rounded-full relative group">
                  <input type="text" className="flex-1" placeholder="بگرد و پیدا کن..." />
                  <button className="btn btn-sm btn-circle btn-primary">
                    <ArrowUpLeftIcon className="icon-sm" />
                  </button>
                </label>
              </div>
            </>,
            document.body
          )
        : null}
    </>
  )
}

export default HeaderMobileSearch
