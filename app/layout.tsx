import type React from "react"
import type { Metadata } from "next"
import { Prompt } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/lib/auth-context"
import AppLayout from "@/components/app-layout"

const prompt = Prompt({ subsets: ["thai", "latin"], weight: ["300", "400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "ระบบ HRM | บริหารทรัพยากรบุคคล",
  description: "ระบบบริหารทรัพยากรบุคคลที่ทันสมัย",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={prompt.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <AppLayout>{children}</AppLayout>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
