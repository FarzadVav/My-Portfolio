"use client"

import { HTMLAttributes } from "react"
import { motion } from "framer-motion"

type HomeArticleAnimationT = HTMLAttributes<HTMLDivElement> & {
  index: number
}

const HomeArticleAnimation = ({ index, className, children }: HomeArticleAnimationT) => {
  const itemHasAnimation = [1, 3, 6, 8].includes(index)

  return (
    <motion.div
      initial={{ y: itemHasAnimation ? 200 : 0 }}
      whileInView={{ y: itemHasAnimation ? 100 : 0 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default HomeArticleAnimation
