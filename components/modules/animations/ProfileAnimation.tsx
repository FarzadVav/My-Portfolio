"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type ProfileAnimationT = {
  src: string
}

const ProfileAnimation = ({ src }: ProfileAnimationT) => {
  return (
    <motion.div
      className="center mask mask-squircle"
      initial={{ opacity: 0, scale: 0.5, y: 10, rotate: 25 }}
      animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
    >
      <Image
        className="bg-base-100 mask mask-squircle relative z-10"
        width={256}
        height={256}
        src={src || ""}
        alt="فرزاد وحدتی نژاد"
      />
    </motion.div>
  )
}

export default ProfileAnimation
