"use client"

import { motion } from "framer-motion"
import { ArrowUpIcon } from "@heroicons/react/24/outline"

const ScrollUp = () => {
  return (
    <motion.button
      initial={{ scale: 0, y: 50 }}
      whileInView={{ scale: 1, y: 0 }}
      viewport={{ once: true }}
      className="btn btn-circle"
      onClick={() => window.scrollTo(0, 0)}
    >
      <ArrowUpIcon className="icon" />
    </motion.button>
  )
}

export default ScrollUp
