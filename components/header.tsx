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
     <div className="w-full px-4 sm:px-6 md:px-8 flex h-16 items-center justify-between">



        <div className="flex">
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
    "transition-colors text-white hover:text-white",
    pathname === item.path ? "text-[#c9a2ff] font-semibold" : ""
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
