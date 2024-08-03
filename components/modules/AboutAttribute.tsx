"use client"

import { motion } from "framer-motion"

import { AttributesT } from "@/types/datas.types"
import SafeInnerHtml from "../SafeInnerHtml"

type AboutAttributesT = AttributesT & {
  index: number
}

const AboutAttribute = ({ index, svg, name }: AboutAttributesT) => {
  return (
    <motion.div
      initial={{ x: "25%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="center w-full h-full border-l border-light"
    >
      <SafeInnerHtml html={svg} />
      <p className="font-base-bold mr-4 text-lg max-sm:text-sm">{name}</p>
    </motion.div>
  )
}

export default AboutAttribute
