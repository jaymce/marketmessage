import { cn } from "@/lib/utils"

interface StaticDotGraphicProps {
  className?: string
}

export function StaticDotGraphic({ className }: StaticDotGraphicProps) {
  return (
    <div className={cn("relative w-full h-full bg-gray-950", className)}>
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(15,1fr)]">
        {Array.from({ length: 300 }).map((_, i) => {
          const size = Math.random() > 0.8 ? "large" : Math.random() > 0.5 ? "medium" : "small"
          const opacity = Math.random() > 0.7 ? "high" : Math.random() > 0.4 ? "medium" : "low"

          const sizeClasses = {
            small: "w-1 h-1",
            medium: "w-1.5 h-1.5",
            large: "w-2 h-2",
          }

          const opacityClasses = {
            low: "bg-terminal-dim/20",
            medium: "bg-terminal-dim/40",
            high: "bg-terminal-dim/60",
          }

          return (
            <div
              key={i}
              className="flex items-center justify-center"
              style={{
                gridColumn: `${Math.floor(Math.random() * 20) + 1} / span 1`,
                gridRow: `${Math.floor(Math.random() * 15) + 1} / span 1`,
              }}
            >
              <div className={cn("rounded-full", sizeClasses[size], opacityClasses[opacity])} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
