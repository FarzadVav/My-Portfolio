"use client"

import { MotionProps, motion } from "framer-motion"

import cn from "@/utils/cn"

type TitleAnimaitonT = React.HTMLAttributes<HTMLDivElement> & MotionProps

const TitleAnimaiton: React.FC<TitleAnimaitonT> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "font-title center w-full gap-6 md:gap-9 text-3xl md:text-4xl relative lg:gap-12 lg:text-5xl",
        className
      )}
      {...props}
    >
      <motion.div
        className="bg-gradient-to-l from-transparent to-base-content/50 h-1 flex-1 rounded-full origin-right"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 1 }}
      ></motion.div>
      {children}
      <motion.div
        dir="ltr"
        className="bg-gradient-to-r from-transparent to-base-content/50 h-1 flex-1 rounded-full origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 1 }}
      ></motion.div>
    </div>
  )
}

export default TitleAnimaiton
