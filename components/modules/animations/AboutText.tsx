"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useMediaQuery } from "@uidotdev/usehooks"

type AboutTextT = {
  text: string
}

const AboutText = ({ text }: AboutTextT) => {
  const isSmallDevice = useMediaQuery("(max-width: 1024px)")
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { once: true })

  if (isSmallDevice) {
    return <p className="leading-relaxed text-center sm:text-lg sm:leading-loose">{text}</p>
  }

  return (
    <p className="text-center text-xl leading-loose px-20 mt-6" ref={ref}>
      {text.split(" ").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block mx-0.5 first:mr-0 last:ml-0"
          style={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
            x: isInView ? 0 : 10,
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
