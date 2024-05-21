"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const HeroProfile = () => {
  return (
    <motion.div
      className="center bg-neutral mask mask-squircle size-full"
      initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
    >
      <Image
        className="bg-base-100 mask mask-squircle relative z-10"
        width={240}
        height={240}
        src={"/images/profile.jpg"}
        alt=""
      />
    </motion.div>
  )
}

export default HeroProfile
