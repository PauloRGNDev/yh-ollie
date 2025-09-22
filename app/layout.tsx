import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "YHollie - Criação de Sites Profissionais",
  description:
    "Sites modernos, rápidos e otimizados para SEO. A YHollie cria páginas que atraem clientes e destacam seu negócio online.",
  keywords: "criação de sites, desenvolvimento web, SEO, sites profissionais, YHollie",
  authors: [{ name: "YHollie" }],
  creator: "YHollie",
  publisher: "YHollie",
  openGraph: {
    title: "YHollie - Criação de Sites Profissionais",
    description:
      "Sites modernos, rápidos e otimizados para SEO. A YHollie cria páginas que atraem clientes e destacam seu negócio online.",
    url: "https://yhollie.com",
    siteName: "YHollie",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YHollie - Criação de Sites Profissionais",
    description: "Sites modernos, rápidos e otimizados para SEO.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
