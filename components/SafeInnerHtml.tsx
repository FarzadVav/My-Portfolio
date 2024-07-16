"use client"

import { HTMLAttributes } from "react"
import DOMPurify from "dompurify"

type SafeInnerHtmlT = HTMLAttributes<HTMLDivElement> & {
  html: string
}

const SafeInnerHtml = ({ html, children, ...props }: SafeInnerHtmlT) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} {...props}>
      {children}
    </div>
  )
}

export default SafeInnerHtml
