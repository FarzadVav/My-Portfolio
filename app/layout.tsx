import type { Metadata } from "next"
import { Toaster } from "react-hot-toast"

import Header from "@/components/modules/Header"
import Footer from "@/components/modules/Footer"
import LoadingProvider from "@/components/LoadingProvider"
import "./globals.scss"

export const metadata: Metadata = {
  title: "Farzad web",
  description: "آموزش و خدومات برنامه نویسی وب و نرم‌افزار",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="group/html" lang="fa" dir="rtl">
      <body>
        <LoadingProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </LoadingProvider>
      </body>
    </html>
  )
}

export const revalidate = 86_400 // 1 Day
