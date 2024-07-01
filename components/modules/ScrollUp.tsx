"use client"

import { ArrowUpIcon } from "@heroicons/react/24/outline"

const ScrollUp = () => {
  return (
    <button className="btn btn-circle" onClick={() => window.scrollTo(0, 0)}>
      <ArrowUpIcon className="icon" />
    </button>
  )
}

export default ScrollUp
