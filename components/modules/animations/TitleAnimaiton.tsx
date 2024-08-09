"use client"

import { MotionProps, motion } from "framer-motion"

import cn from "@/utils/cn"

type TitleAnimaitonT = React.HTMLAttributes<HTMLDivElement> & MotionProps

const TitleAnimaiton: React.FC<TitleAnimaitonT> = ({ className, children, ...props }) => {
  return (
    <div className={cn("font-title center w-full gap-12 text-5xl relative", className)} {...props}>
      <motion.div
        className="bg-gradient-to-l from-transparent to-base-content/50 h-1 flex-1 rounded-full origin-right max-md:hidden"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 1 }}
      ></motion.div>
      {children}
      <motion.div
        dir="ltr"
        className="bg-gradient-to-r from-transparent to-base-content/50 h-1 flex-1 rounded-full origin-left max-md:hidden"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 1 }}
      ></motion.div>
    </div>
  )
}

export default TitleAnimaiton
