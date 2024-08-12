"use client"

import { MotionProps, motion } from "framer-motion"

import cn from "@/utils/cn"

type TitleT = React.HTMLAttributes<HTMLDivElement> & MotionProps

const Title: React.FC<TitleT> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "font-title center w-full gap-3 text-2xl relative md:gap-6 md:text-3xl lg:gap-9 lg:text-4xl 2xl:text-5xl",
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

export default Title
