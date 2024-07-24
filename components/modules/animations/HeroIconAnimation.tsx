"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useMediaQuery } from "@uidotdev/usehooks"

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
  const isSmallDevice = useMediaQuery("(max-width: 1024px)")
  const currentSize = isSmallDevice ? size - 20 : size
  const sideIsLeft = side === "LEFT"

  let currentDelay = 0
  switch (index) {
    case 1:
    case 4: {
      currentDelay = 0.2
      break
    }

    case 2:
    case 5: {
      currentDelay = 0.3
      break
    }

    default: {
      currentDelay = 0.1
      break
    }
  }

  return (
    <motion.div className={cn("rounded-full absolute", className)} whileHover="groupHover">
      <motion.div
        style={{
          width: currentSize,
          height: currentSize,
          filter: "blur(2px)",
          opacity: 0.5,
          perspective: 800,
          rotateY: 25,
          rotateX: sideIsLeft ? 10 : -10,
        }}
        variants={{
          groupHover: {
            filter: "",
            opacity: 1,
            scale: 1.1,
            rotateY: -10,
            y: -20,
          },
        }}
      >
        <motion.div
          initial={{ scale: 0, x: sideIsLeft ? "50vw" : "-50vw" }}
          animate={{ scale: 1, x: 0, transition: { delay: currentDelay } }}
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
    </motion.div>
  )
}

export default HeroIconAnimation
