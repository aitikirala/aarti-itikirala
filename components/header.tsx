"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home } from "lucide-react"

const navItems = [
  { name: "Certifications", path: "/certifications" },
  { name: "Work", path: "/work" },
  { name: "Education", path: "/education" },
  { name: "Projects", path: "/projects" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="transition-colors text-foreground flex items-center gap-1">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>

          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={cn(
                "transition-colors text-foreground relative group inline-flex items-center",
                pathname === path ? "text-badge font-semibold dark:text-white" : undefined
              )}
            >
              {name}
              <span
                className={cn(
                  "absolute left-0 -bottom-1 h-[2px] bg-current transition-all duration-200",
                  pathname === path ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}

          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
