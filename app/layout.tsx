import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SubtleBackground from "@/components/subtle-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aarti Itikirala",
  description: "Personal website of Aarti Itikirala",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className="h-full bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative min-h-[100dvh] grid grid-rows-[auto,1fr,auto]">
            <SubtleBackground />
            <Header />
            <main className="min-h-0">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}