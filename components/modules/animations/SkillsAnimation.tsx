"use client"

import React, { HTMLAttributes } from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from "@uidotdev/usehooks"

type SkillsAnimationT = HTMLAttributes<HTMLDivElement> & {
  index: number
}

const SkillsAnimation = ({ index, className, children }: SkillsAnimationT) => {
  const isMDDevice = useMediaQuery("(min-width: 768px)")

  if (!isMDDevice) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ y: "75%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true, margin: "200px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default SkillsAnimation
