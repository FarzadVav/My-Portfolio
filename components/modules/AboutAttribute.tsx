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
      initial={{ x: "25%", opacity: 0, scale: 0.9 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2 }}
      className="attribute"
    >
      <SafeInnerHtml html={svg} />
      <p className="font-base-bold mr-4 text-lg max-sm:text-sm">{name}</p>
    </motion.div>
  )
}

export default AboutAttribute
