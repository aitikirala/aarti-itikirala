"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme
    setTheme(currentTheme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  // Determine which icon to show based on current theme
  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
