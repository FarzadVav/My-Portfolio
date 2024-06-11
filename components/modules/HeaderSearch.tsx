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
    <label
      className="input input-bordered row gap-3 mr-auto rounded-full relative group"
      id="header_search-label"
    >
      <div className="manual-dropdown"></div>
      <MagnifyingGlassIcon className="icon" />
      <input
        id="header_search-input"
        type="text"
        className="w-56 max-lg:flex-1"
        placeholder="جستجو"
      />
      <div className="row gap-1 max-lg:hidden">
        <kbd className="kbd kbd-sm">k</kbd>+<kbd className="kbd kbd-sm">ctrl</kbd>
      </div>
    </label>
  )
}

export default HeaderSerch
