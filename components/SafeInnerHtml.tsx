"use client"

import { HTMLAttributes } from "react"
import DOMPurify from "dompurify"
import { useIsClient } from "@uidotdev/usehooks"

type SafeInnerHtmlT = HTMLAttributes<HTMLDivElement> & {
  html: string
}

const SafeInnerHtml = ({ html, children, ...props }: SafeInnerHtmlT) => {
  const isClient = useIsClient()

  return isClient ? (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify?.sanitize(html) }} {...props}>
      {children}
    </div>
  ) : null
}

export default SafeInnerHtml
