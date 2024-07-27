"use client"

import React, { HTMLAttributes } from "react"
import { motion } from "framer-motion"

type AttributesAnimationT = HTMLAttributes<HTMLDivElement> & {
  index: number
}

const AttributesAnimation = ({ index, className, children }: AttributesAnimationT) => {
  return (
    <motion.div
      initial={{ x: "25%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AttributesAnimation
