"use client"

import Image from "next/image"
import { motion } from "framer-motion"


import cn from "@/lib/cn"

type HeroIconsT = {
  className?: string
  imageClassName?: string
  src: string
  size: number
  side: "LEFT" | "RIGHT"
}

const HeroIcons = ({ className, imageClassName, src, size, side }: HeroIconsT) => {
  return (
    <motion.div
      className={cn("rounded-full absolute", className)}
      style={{
        width: size,
        height: size,
        opacity: 0.5,
        filter: "blur(2px)",
        perspective: 800,
        rotateY: 25,
        rotateX: side === "LEFT" ? 10 : -10,
      }}
      initial={{ opacity: 0, scale: 0, x: side === "LEFT" ? "50vw" : "-50vw" }}
      animate={{ opacity: 0.5, scale: 0.9, x: 0 }}
      whileHover={{
        opacity: 1,
        filter: "",
        rotateY: -10,
        scale: 1,
        y: -20,
      }}
    >
      <Image
        className={`rounded-full ${imageClassName}`}
        width={size}
        height={size}
        src={src}
        alt="hero-section icon"
      />
    </motion.div>
  )
}

export default HeroIcons
