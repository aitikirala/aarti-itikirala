import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aarti Itikirala | Home",
  description: "Personal website of Aarti Itikirala",
}

export default function Home() {
  return (
    <div className="relative min-h-[100dvh]">
      {/* Full-width fixed wrapper guarantees true horizontal centering */}
      <div className="fixed inset-x-0 top-1/2 -translate-y-1/2 flex justify-center px-4">
        <h1 className="text-center text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter animate-fade-in text-primary dark:text-white">
          Aarti Itikirala
        </h1>
      </div>

      {/* spacer so nothing sits under the fixed footer */}
      <div className="h-16" />
    </div>
  )
}