"use client"

import useLoading from "@/hooks/store/useLoading"
import Link from "next/link"

const ContactLink = () => {
  const { startLoading } = useLoading()

  return (
    <Link
      className="btn btn-ghost mr-3 rounded-full"
      href={"/contact"}
      onClick={() => startLoading("/contact")}
    >
      همکاری با من
    </Link>
  )
}

export default ContactLink
