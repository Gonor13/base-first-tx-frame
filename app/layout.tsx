import type { Metadata } from "next"
import { Inter } from "next/font/google"
// Убрал import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Base First TX Frame",
  description: "Find your first Base transaction",
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
