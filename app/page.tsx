import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aarti Itikirala | Home",
  description: "Personal website of Aarti Itikirala",
}

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter animate-fade-in">Aarti Itikirala</h1>
      </div>
    </div>
  )
}
