"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import cn from "@/lib/cn"

type HeroIconAnimationT = {
  className?: string
  imageClassName?: string
  index: number
  src: string
  size: number
  side: "LEFT" | "RIGHT"
}

const HeroIconAnimation = ({
  className,
  imageClassName,
  index,
  src,
  size,
  side,
}: HeroIconAnimationT) => {
  const sideIsLeft = side === "LEFT"

  let currentDelay = 0
  switch (index) {
    case 1:
    case 4: {
      currentDelay = 0.1
      break
    }

    case 2:
    case 5: {
      currentDelay = 0.2
      break
    }

    default: {
      currentDelay = 0
      break
    }
  }

  return (
    <motion.div className={cn("rounded-full absolute", className)} whileHover="groupHover">
      <motion.div
        style={{
          width: size,
          height: size,
          opacity: 0.5,
          filter: "blur(2px)",
          perspective: 800,
          rotateY: 25,
          rotateX: sideIsLeft ? 10 : -10,
        }}
        initial={{ opacity: 0, scale: 0, x: sideIsLeft ? "50vw" : "-50vw" }}
        animate={{ opacity: 0.5, scale: 0.9, x: 0, transition: { delay: currentDelay } }}
        variants={{
          groupHover: {
            opacity: 1,
            filter: "",
            rotateY: -10,
            scale: 1,
            y: -20,
          },
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
    </motion.div>
  )
}

export default HeroIconAnimation
