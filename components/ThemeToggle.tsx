"use client"

import { HTMLAttributes, useLayoutEffect, useState } from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"

import cn from "@/utils/cn"

const ThemeToggle = ({ className, ...props }: HTMLAttributes<HTMLLabelElement>) => {
  const [theme, setTheme] = useState<"dark" | "light" | undefined>(undefined)

  useLayoutEffect(() => {
    themeToggleHandler(localStorage.getItem("theme") || "dark")
  }, [])

  const themeToggleHandler = (currentTheme: string) => {
    setTheme(currentTheme as typeof theme)
    localStorage.setItem("theme", currentTheme)
    document.querySelector("html")?.setAttribute("data-theme", currentTheme)
  }

  return (
    <label className={cn("btn btn-ghost btn-circle swap swap-rotate", className)} {...props}>
      {theme ? (
        <input
          type="checkbox"
          className="theme-controller"
          defaultChecked={theme === "light"}
          onChange={(e) => themeToggleHandler(e.target.checked ? "light" : "dark")}
        />
      ) : null}
      <SunIcon className="swap-off icon" />
      <MoonIcon className="swap-on icon" />
    </label>
  )
}

export default ThemeToggle
