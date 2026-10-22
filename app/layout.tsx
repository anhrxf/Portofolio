import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Geist, Instrument_Serif } from "next/font/google"
import Script from "next/script"
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
    <html lang="id" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body>
        <Script id="portfolio-theme-init" strategy="beforeInteractive">
          {`try { var theme = localStorage.getItem("portfolio-theme"); document.documentElement.dataset.theme = theme === "light" ? "light" : "dark"; } catch (error) { console.error("Gagal memuat preferensi tema.", error); }`}
        </Script>
        {children}
      </body>
    </html>
  )
}
