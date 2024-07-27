"use client"

import { HTMLAttributes } from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from "@uidotdev/usehooks"

type HomeArticleAnimationT = HTMLAttributes<HTMLDivElement> & {
  index: number
}

const HomeArticleAnimation = ({ index, className, children }: HomeArticleAnimationT) => {
  const isXLDevice = useMediaQuery("(min-width: 1280px)")
  
  if (!isXLDevice) {
    return <div className={className}>{children}</div>
  }

  const itemHasAnimation = [1, 3, 6, 8].includes(index)
  const itemHasDelay = [3, 6].includes(index)
  return (
    <motion.div
      initial={{ y: itemHasAnimation ? 250 : 0 }}
      whileInView={{ y: itemHasAnimation ? 100 : 0 }}
      transition={{ delay: itemHasDelay ? 0.1 : 0 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default HomeArticleAnimation
