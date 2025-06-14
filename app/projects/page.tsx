import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

export const metadata: Metadata = {
  title: "Aarti Itikirala | Projects",
  description: "Projects developed by Aarti Itikirala",
}

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="border rounded-lg overflow-hidden bg-card">
          <div className="bg-muted aspect-video flex items-center justify-center">
  <img
    src="/images/photo-blog.png"
    alt="Photo Blog"
    className="object-cover w-full h-full"
  />
</div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">Aarti's Photo Blog</h2>
              <div className="flex gap-2">
                <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://project-demo.com" className="text-muted-foreground hover:text-foreground">
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">Live Demo</span>
                </Link>
              </div>
            </div>
            <p className="mb-4">
              A creative space to grow my passion for photography and share the stories behind my travels.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">Next.js</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">EXIF</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">Blob Storage</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden bg-card">
          <div className="bg-muted aspect-video flex items-center justify-center">
            <img
    src="/images/palette-pin.png"
    alt="Palette Pin"
    className="object-cover w-full h-full"
  />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">PalettePin</h2>
              <div className="flex gap-2">
                <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://project-demo.com" className="text-muted-foreground hover:text-foreground">
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">Live Demo</span>
                </Link>
              </div>
            </div>
            <p className="mb-4">
              A visual inspiration application that extracts harmonious color palettes from any image to guide fashion and interior design choices.

            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">Vue.js</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">Express</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">D3.js</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">PostgreSQL</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden bg-card">
          <div className="bg-muted aspect-video flex items-center justify-center">
            <img
    src="/images/campusconnector2.png"
    alt="Campus Connector"
    className="object-cover w-full h-full"
  />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">Campus Connector</h2>
              <div className="flex gap-2">
                <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://project-demo.com" className="text-muted-foreground hover:text-foreground">
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">Live Demo</span>
                </Link>
              </div>
            </div>
            <p className="mb-4">
              A campus-focused service marketplace app that connects UMD students with local student-run businesses for walkable, on-demand services.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">Arduino</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">Python</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">MQTT</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">AWS IoT</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden bg-card">
          <div className="bg-muted aspect-video flex items-center justify-center">
            <img
    src="/images/wingman.png"
    alt="Wingman"
    className="object-cover w-full h-full"
  />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">Wingman</h2>
              <div className="flex gap-2">
                <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://project-demo.com" className="text-muted-foreground hover:text-foreground">
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">Live Demo</span>
                </Link>
              </div>
            </div>
            <p className="mb-4">
              A mobile application that uses AI to generate personalized trip itineraries based on location, vibe, nearby attractions, weather, and time.

            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">React Native</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">ARKit</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">ARCore</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

