"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home } from "lucide-react"  // ✅ import home icon

const navItems = [
  { name: "Certifications", path: "/certifications" },
  { name: "Work",           path: "/work"           },
  { name: "Education",      path: "/education"      },
  { name: "Projects",       path: "/projects"       },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-6 text-sm">
         <Link
  href="/"
  className="transition-colors text-foreground hover:text-primary flex items-center gap-1"
>
  <Home className="h-4 w-4" />   {/* ✅ smaller, matches moon */}
  <span className="sr-only">Home</span>
</Link>


          {/* Other nav items */}
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={cn(
                "transition-colors text-foreground hover:text-primary",
                pathname === path && "text-primary font-semibold"
              )}
            >
              {name}
            </Link>
          ))}

          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
