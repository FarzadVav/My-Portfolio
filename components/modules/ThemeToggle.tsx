import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"

import cn from "@/lib/cn"

const ThemeToggle = ({ className }: { className?: string }) => {
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
    <label className={cn("btn btn-lg btn-ghost btn-circle swap swap-rotate", className)}>
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
  )
}

export default ThemeToggle
