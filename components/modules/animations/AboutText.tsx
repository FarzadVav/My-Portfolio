"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

type AboutTextT = {
  text: string
}

const AboutText = ({ text }: AboutTextT) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <p className="text-xl leading-relaxed text-center mt-6 lg:px-20" ref={ref}>
      {text.split(" ").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block mx-0.5 first:mr-0 last:ml-0"
          style={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50,
            x: isInView ? 0 : 25,
            transition: "0.2s",
            transitionDelay: `${i * 0.025}s`,
          }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  )
}

export default AboutText
