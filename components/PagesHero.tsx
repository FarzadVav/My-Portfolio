"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDownLeftIcon } from "@heroicons/react/24/outline"
import { v4 } from "uuid"

import cn from "@/lib/cn"

type PagesHeroT = {
  className?: string
  picture: string
  title: string
  text: string
  links: { name: string; href: string }[]
}

const PagesHero = ({ className, picture, title, text, links }: PagesHeroT) => {
  return (
    <div className={cn("w-full my-element", className)}>
      <div className="center max-w-[65%] mx-auto">
        <motion.div
          className="size-40 min-w-40 rounded-full"
          initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
        >
          <Image src={picture} width={160} height={160} alt={title} />
        </motion.div>
        <motion.div className="mr-9" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="title-base">{title}</h1>
          <p className="text-base-content/75 leading-relaxed mt-2.5">{text}</p>
          <div className="row justify-end gap-6 mt-4">
            {links.map((link) => (
              <a key={v4()} className="link-hover row" href={link.href}>
                <span>{link.name}</span>
                <ArrowDownLeftIcon className="icon-sm mr-2" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PagesHero
