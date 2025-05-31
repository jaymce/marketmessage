import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "marketmessage.io | Strategic Messaging for Tech Startups",
  description: "Helping tech startups craft compelling messaging that resonates with customers and investors",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="flex min-h-screen flex-col bg-gray-950">
            <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
              <div className="container flex h-16 items-center">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="md:hidden border-gray-800 bg-gray-900 hover:bg-gray-800"
                        >
                          <Menu className="h-5 w-5 text-textgray-light" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="bg-gray-950 border-r border-gray-800">
                        <div className="mb-4 font-bold text-xl text-textgray-light">marketmessage.io</div>
                        <nav className="grid gap-6 text-lg font-medium">
                          <Link href="/" className="text-textgray-muted hover:text-textgray-light transition-colors">
                            Home
                          </Link>
                          <Link
                            href="/services"
                            className="text-textgray-muted hover:text-textgray-light transition-colors"
                          >
                            Services
                          </Link>
                          <Link
                            href="/about"
                            className="text-textgray-muted hover:text-textgray-light transition-colors"
                          >
                            About
                          </Link>
                        </nav>
                      </SheetContent>
                    </Sheet>
                    <Link
                      href="/"
                      className="hidden md:block font-bold text-xl text-textgray-light hover:text-textgray-muted transition-colors"
                    >
                      marketmessage.io
                    </Link>
                    <Link href="/" className="text-xl font-bold md:hidden text-textgray-light">
                      marketmessage.io
                    </Link>
                  </div>
                  <div className="hidden md:flex items-center gap-8">
                    <nav className="flex gap-8 text-sm font-medium">
                      <Link href="/" className="text-textgray-muted hover:text-textgray-light transition-colors">
                        Home
                      </Link>
                      <Link
                        href="/services"
                        className="text-textgray-muted hover:text-textgray-light transition-colors"
                      >
                        Services
                      </Link>
                      <Link href="/about" className="text-textgray-muted hover:text-textgray-light transition-colors">
                        About
                      </Link>
                    </nav>
                    <Link href="/contact">
                      <Button className="bg-terminal-dim hover:bg-terminal-muted text-black hover:text-textgray-light">
                        Get in Touch
                      </Button>
                    </Link>
                  </div>
                  <div className="md:hidden">
                    <Link href="/contact">
                      <Button className="bg-terminal-dim hover:bg-terminal-muted text-black hover:text-textgray-light">
                        Get in Touch
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t border-gray-800 py-6 md:py-8 bg-gray-950">
              <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="text-center md:text-left">
                  <p className="text-sm text-textgray-dim">
                    &copy; {new Date().getFullYear()} marketmessage.io. All rights reserved.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end space-x-4">
                  <Link href="#" className="text-sm text-textgray-dim hover:text-textgray-light">
                    Terms
                  </Link>
                  <Link href="#" className="text-sm text-textgray-dim hover:text-textgray-light">
                    Privacy
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
