"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { name: "Certifications", path: "/certifications" },
  { name: "Work", path: "/work" },
  { name: "Education", path: "/education" },
  { name: "Projects", path: "/projects" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full bg-transparent backdrop-blur-sm">
      <div className="w-full px-4 md:px-12 lg:px-20 xl:px-32 2xl:px-48 flex h-16 items-center justify-between">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Aarti Itikirala</span>
          </Link>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.path ? "text-foreground font-medium" : "text-foreground/60",
              )}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
