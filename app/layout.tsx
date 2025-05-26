import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alan Rodriguez - AI Agent Engineer | Professional Portfolio",
  description: "Alan Rodriguez, AI Agentic Engineer focused on designing and deploying autonomous systems that reason, plan, and act toward complex goals. Specializing in multi-agent collaboration and human-AI alignment.",
  keywords: ["AI Engineer", "Machine Learning", "AI Agents", "LangChain", "OpenAI", "Software Development", "Autonomous Systems"],
  authors: [{ name: "Alan Rodriguez" }],
  openGraph: {
    title: "Alan Rodriguez - AI Agent Engineer",
    description: "AI Agentic Engineer building autonomous systems that reason, plan, and act toward complex goals.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alan Rodriguez - AI Agent Engineer",
    description: "AI Agentic Engineer building autonomous systems that reason, plan, and act toward complex goals.",
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