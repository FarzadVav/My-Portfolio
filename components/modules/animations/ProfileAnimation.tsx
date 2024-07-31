"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type ProfileAnimationT = {
  src: string
}

const ProfileAnimation = ({ src }: ProfileAnimationT) => {
  return (
    <motion.div
      className="center size-64 relative"
      initial={{ opacity: 0, scale: 0.5, y: 10, rotate: 25 }}
      animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
    >
      <div className="blured-box"></div>
      <div className="blured-box"></div>

      <div className="mask mask-squircle center bg-base-300 size-full">
        <Image
          className="mask mask-squircle relative z-10"
          width={246}
          height={246}
          src={src || ""}
          alt="فرزاد وحدتی نژاد"
        />
      </div>
    </motion.div>
  )
}

export default ProfileAnimation
