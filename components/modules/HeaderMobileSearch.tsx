"use client"

import { useState } from "react"
import { createPortal } from "react-dom"
import { CheckIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"

import { useIsClient } from "@uidotdev/usehooks"

const HeaderMobileSearch = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const isClient = useIsClient()

  return (
    <>
      <button
        className="btn btn-lg btn-circle btn-ghost mr-1.5 lg:hidden"
        onClick={() => setShowMobileSearch((prev) => !prev)}
      >
        {showMobileSearch ? (
          <XMarkIcon className="icon-lg" />
        ) : (
          <MagnifyingGlassIcon className="icon-lg" />
        )}
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
                    <CheckIcon className="icon-sm" />
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
