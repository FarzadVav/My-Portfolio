"use client"

import { useEffect } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const HeaderSerch = () => {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.code === "KeyK") {
        event.preventDefault()
        const elem = document.querySelector("#header_search-label") as HTMLLabelElement
        elem.click()
      }
    }
    window.addEventListener("keydown", handler)

    return () => window.removeEventListener("keydown", handler)
  })

  return (
    <div className="max-lg:hidden">
      <label
        className="input input-bordered row gap-3 mr-auto rounded-full relative group"
        id="header_search-label"
      >
        <MagnifyingGlassIcon className="icon" />
        <input type="text" className="w-48 xl:w-60" placeholder="جستجو" />
        <div className="row gap-1">
          <kbd className="kbd kbd-sm">k</kbd>+<kbd className="kbd kbd-sm">ctrl</kbd>
        </div>
      </label>
    </div>
  )
}

export default HeaderSerch
