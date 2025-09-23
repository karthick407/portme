import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Karthik | Professional Portfolio",
  description: "Web Developer, Designer & Tech Enthusiast - Building the future one line of code at a time",
  generator: "v0.app",
  keywords: ["web developer", "portfolio", "react", "next.js", "javascript", "frontend"],
  authors: [{ name: "Karthik" }],
  openGraph: {
    title: "Karthik | Professional Portfolio",
    description: "Web Developer, Designer & Tech Enthusiast",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
