import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alex Chen - AI Agent Engineer | Professional Portfolio",
  description: "Alex Chen, AI Agent Engineer with 5+ years of experience building intelligent systems. Specializing in multi-agent systems, conversational AI, and machine learning solutions.",
  keywords: ["AI Engineer", "Machine Learning", "AI Agents", "LangChain", "OpenAI", "Software Development"],
  authors: [{ name: "Alex Chen" }],
  openGraph: {
    title: "Alex Chen - AI Agent Engineer",
    description: "Professional AI Engineer building next-generation intelligent systems and autonomous agents.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen - AI Agent Engineer",
    description: "Professional AI Engineer building next-generation intelligent systems and autonomous agents.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}