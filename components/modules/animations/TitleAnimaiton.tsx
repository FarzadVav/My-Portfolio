"use client"

import { MotionProps, motion } from "framer-motion"

import cn from "@/lib/cn"

type TitleAnimaitonT = React.HTMLAttributes<HTMLDivElement> & MotionProps

const TitleAnimaiton: React.FC<TitleAnimaitonT> = ({ className, children, ...props }) => {
  return (
    <div className={cn("row w-full relative", className)} {...props}>
      <motion.div
        className="h-1 bg-gradient-to-r from-transparent to-base-content/15 flex-1 rounded-full origin-left max-sm:hidden"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1, transition: { duration: 0.4, delay: 0.25 } }}
      ></motion.div>
      <div className="sm:min-w-max sm:max-w-max sm:flex-1 max-sm:w-full max-sm:[&>*]:justify-center">{children}</div>
      <motion.div
        className="h-1 bg-gradient-to-l from-transparent to-base-content/15 flex-1 rounded-full origin-right max-sm:hidden"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1, transition: { duration: 0.4, delay: 0.25 } }}
      ></motion.div>
    </div>
  )
}

export default TitleAnimaiton
