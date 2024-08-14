"use client"

import Link from "next/link"
import React, { HTMLAttributes } from "react"
import { LinkIcon } from "@heroicons/react/24/outline"

import cn from "@/utils/cn"
import useLoading from "@/hooks/store/useLoading"

type AttachedLinkT = HTMLAttributes<HTMLDivElement> & {
  href: `/${string}`
}

const AttachedLink = ({ className, children, href, ...props }: AttachedLinkT) => {
  const { startLoading } = useLoading()

  return (
    <div className={cn("center w-full", className)} {...props}>
      <Link
        className="link-hover row text-primary text-lg"
        href={href}
        onClick={() => startLoading(href)}
      >
        <LinkIcon className="icon" />
        <span className="mr-2">{children}</span>
      </Link>
    </div>
  )
}

export default AttachedLink
