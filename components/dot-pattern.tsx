"use client"

import { useState, useEffect } from "react"
import { DotGraphic } from "./dot-graphic"
import { StaticDotGraphic } from "./static-dot-graphic"

interface DotPatternProps {
  width: number
  height: number
  className?: string
}

export function DotPattern({ width, height, className }: DotPatternProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div style={{ width, height }} className={className}>
        <StaticDotGraphic />
      </div>
    )
  }

  return <DotGraphic width={width} height={height} className={className} />
}
