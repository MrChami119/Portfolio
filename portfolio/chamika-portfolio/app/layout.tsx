import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import MouseFollower from "@/components/mouse-follower"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Chamika Gunarathne | Software Engineer",
  description:
    "Portfolio website of Chamika Gunarathne, Undergraduate at University of Ruhuna and Aspiring Software Engineer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <MouseFollower />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
