"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AsciiTerminalProps {
  lines: string[]
  className?: string
  typingSpeed?: number
  blinkCursor?: boolean
}

export function AsciiTerminal({ lines, className, typingSpeed = 50, blinkCursor = true }: AsciiTerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentLine >= lines.length) {
      setIsTyping(false)
      return
    }

    if (currentChar < lines[currentLine].length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev]
          if (newLines.length <= currentLine) {
            newLines.push("")
          }
          newLines[currentLine] = lines[currentLine].substring(0, currentChar + 1)
          return newLines
        })
        setCurrentChar(currentChar + 1)
      }, typingSpeed)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1)
        setCurrentChar(0)
      }, typingSpeed * 5)
      return () => clearTimeout(timer)
    }
  }, [currentLine, currentChar, lines, typingSpeed])

  return (
    <div
      className={cn(
        "bg-black text-textgray-light p-4 rounded-lg shadow-lg font-mono text-sm overflow-hidden",
        className,
      )}
    >
      <div className="flex items-center gap-1 mb-2 border-b border-gray-800 pb-1">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
        <span className="ml-2 text-xs text-textgray-muted">marketmessage.io - terminal</span>
      </div>
      <pre className="whitespace-pre-wrap">
        {displayedLines.map((line, i) => (
          <div key={i}>
            {i === currentLine && isTyping ? (
              <>
                <span className="text-textgray-light">$ {line}</span>
                <span className={cn("bg-terminal-green text-black", blinkCursor && "animate-pulse")}>▌</span>
              </>
            ) : (
              <span className="text-textgray-light">$ {line}</span>
            )}
          </div>
        ))}
        {!isTyping && blinkCursor && (
          <div>
            <span className="text-textgray-light">$ </span>
            <span className="bg-terminal-green text-black animate-pulse">▌</span>
          </div>
        )}
      </pre>
    </div>
  )
}
