"use client"

import { HTMLAttributes } from "react"
import { motion } from "framer-motion"

type HomeCommentAnimationT = HTMLAttributes<HTMLDivElement> & {
  index: number
}

const HomeCommentAnimation = ({ index, className, children }: HomeCommentAnimationT) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default HomeCommentAnimation
