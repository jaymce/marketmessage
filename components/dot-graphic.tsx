"use client"

import { useEffect, useRef } from "react"

interface DotGraphicProps {
  width: number
  height: number
  className?: string
}

export function DotGraphic({ width, height, className }: DotGraphicProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Set background
    ctx.fillStyle = "#111111"
    ctx.fillRect(0, 0, width, height)

    // Draw dots in a grid pattern with some randomness
    const dotSize = 2
    const spacing = 20
    const rows = Math.floor(height / spacing)
    const cols = Math.floor(width / spacing)

    // Create a wave pattern
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * spacing + Math.random() * spacing * 0.3
        const y = row * spacing + Math.random() * spacing * 0.3

        // Calculate distance from center for color variation
        const centerX = width / 2
        const centerY = height / 2
        const distanceFromCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
        const maxDistance = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2))
        const normalizedDistance = distanceFromCenter / maxDistance

        // Pulse effect based on position
        const pulse = Math.sin((x + y) / 30) * 0.5 + 0.5

        // Size variation
        const sizeVariation = Math.max(0.5, pulse * 2.5)

        // Color based on distance from center and pulse
        const green = Math.floor(74 + normalizedDistance * 100 * pulse)
        const alpha = 0.3 + (1 - normalizedDistance) * 0.7

        ctx.beginPath()
        ctx.arc(x, y, dotSize * sizeVariation, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(30, ${green}, 50, ${alpha})`
        ctx.fill()

        // Draw connecting lines to nearby dots with low opacity
        if (col > 0 && row > 0 && Math.random() > 0.7) {
          const prevX = (col - 1) * spacing + Math.random() * spacing * 0.3
          const prevY = (row - 1) * spacing + Math.random() * spacing * 0.3

          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(prevX, prevY)
          ctx.strokeStyle = `rgba(30, ${green}, 50, 0.1)`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }
  }, [width, height])

  return <canvas ref={canvasRef} style={{ width, height }} className={className} />
}
