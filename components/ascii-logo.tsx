import { cn } from "@/lib/utils"

interface AsciiLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function AsciiLogo({ className, size = "md" }: AsciiLogoProps) {
  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  return (
    <pre
      className={cn("font-mono font-bold leading-none whitespace-pre", sizeClasses[size], className)}
      aria-label="marketmessage.io logo"
    >
      {`
 __  __   _   ___ _  _____ _____  __  __ _____ ___ ___ _   ___ ___   ___ ___  
|  \\/  | /_\\ | _ \\ |/ / __|_   _|/  \\|  \\_   _| __/ __/ | / __/ _ \\ |_ _/ _ \\ 
| |\\/| |/ _ \\|   / ' <| _|  | | | /\\ | |) | | | _|\\__ \\ |_| (_| (_) | | | (_) |
|_|  |_/_/ \\_\\_|_\\_|\\_\\___| |_| |_||_|___/|_| |___|___/____\\___\\___/ |___\\___/ 
`}
    </pre>
  )
}
