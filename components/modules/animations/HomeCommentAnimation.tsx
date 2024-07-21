"use client"

import { HTMLAttributes } from "react"
import { motion } from "framer-motion"

type HomeCommentAnimationT = HTMLAttributes<HTMLDivElement> & {
  index: number
}

const HomeCommentAnimation = ({ index, className, children }: HomeCommentAnimationT) => {
  let currentDelay = 0
  switch (index) {
    case 1:
    case 3:
    case 6: {
      currentDelay = 0.1
      break
    }

    case 4: {
      currentDelay = 0.2
      break
    }

    default: {
      currentDelay = 0
      break
    }
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: currentDelay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default HomeCommentAnimation
