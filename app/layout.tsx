import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Geist, Instrument_Serif } from "next/font/google"
import "./globals.css"

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "M. Fadhil Anhar | Portofolio",
  description: "Portofolio pribadi M. Fadhil Anhar—mahasiswa Sistem Informasi yang merancang antarmuka dan membangun pengalaman web.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
