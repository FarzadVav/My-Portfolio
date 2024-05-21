"use client"

import { motion } from "framer-motion"

import { PropsWithChildren } from "react"
import Image from "next/image"

type HeroIconsT = PropsWithChildren & {
  className?: string
  src: string
  size: number
  side: "LEFT" | "RIGHT"
  y: number
  x: number
}

const HeroIcons = ({ className, src, size, side, y, x }: HeroIconsT) => {
  return (
    <motion.div
      className="rounded-full absolute bottom-0"
      style={{
        width: size,
        height: size,
        opacity: 0.5,
        filter: "blur(2px)",
        perspective: 800,
        rotateY: 25,
        rotateX: side === "LEFT" ? 10 : -10,
        scale: 0.9,
      }}
      initial={{ opacity: 0, y: 0, x: 0 }}
      animate={{ opacity: 0.5, y, x }}
      whileHover={{
        opacity: 1,
        filter: "",
        rotateY: -10,
        scale: 1,
        y: y - 15,
      }}
    >
      <Image
        className={`rounded-full ${className}`}
        width={size}
        height={size}
        src={src}
        alt="hero-section icon"
      />
    </motion.div>
  )
}

export default HeroIcons
