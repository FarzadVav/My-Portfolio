"use client"

import { HTMLAttributes } from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from "@uidotdev/usehooks"

type HomeCommentAnimationT = HTMLAttributes<HTMLDivElement> & {
  index: number
}

const HomeCommentAnimation = ({ index, className, children }: HomeCommentAnimationT) => {
  const isXLDevice = useMediaQuery("(min-width: 1280px)")
  const isMDDevice = useMediaQuery("(min-width: 768px) and (max-width: 1280px)")
  const isSmallDevice = useMediaQuery("(max-width: 768px)")

  if (isSmallDevice) {
    return <div className={className}>{children}</div>
  }

  let currentDelay = 0
  if (isXLDevice) {
    switch (index) {
      case 0:
      case 1:
      case 3: {
        currentDelay = 0.1
        break
      }

      default: {
        currentDelay = 0.2
        break
      }
    }
  }
  if (isMDDevice) {
    switch (index) {
      case 0:
      case 2: {
        currentDelay = 0.1
        break
      }

      default: {
        currentDelay = 0.2
        break
      }
    }
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: currentDelay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default HomeCommentAnimation
