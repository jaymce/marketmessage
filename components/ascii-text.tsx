"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AsciiTextProps {
  text: string
  className?: string
  variant?: "bold" | "regular" | "slim"
  animate?: boolean
}

export function AsciiText({ text, className, variant = "regular", animate = false }: AsciiTextProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Don't render ASCII on server to avoid hydration issues
  if (!isClient) {
    return <span className={className}>{text}</span>
  }

  const fontStyles = {
    bold: "font-mono text-lg md:text-xl lg:text-2xl font-bold tracking-tight leading-none",
    regular: "font-mono text-base md:text-lg font-medium tracking-tight leading-none",
    slim: "font-mono text-sm md:text-base font-normal tracking-tight leading-none",
  }

  return (
    <pre className={cn(fontStyles[variant], animate && "animate-pulse", className)} aria-label={text}>
      {text}
    </pre>
  )
}
