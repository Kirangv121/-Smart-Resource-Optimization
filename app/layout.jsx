import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Smart Construction Dashboard",
  description: "High-performance dashboard for construction project management",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" storageKey="construction-dashboard-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'