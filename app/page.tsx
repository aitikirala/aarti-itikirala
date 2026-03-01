import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aarti Itikirala | Home",
  description: "Personal website of Aarti Itikirala",
}

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center px-4">
        <h1
  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter animate-fade-in
             text-primary dark:text-white"
>
  Aarti Itikirala
</h1>

      </div>
    </div>
  )
}
