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
            <span className="text-4xl text-muted-foreground">Project Image</span>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">AI-Powered Task Manager</h2>
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
              A task management application that uses AI to prioritize tasks, suggest optimal scheduling, and provide
              productivity insights.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">React</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">Node.js</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">TensorFlow.js</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">MongoDB</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden bg-card">
          <div className="bg-muted aspect-video flex items-center justify-center">
            <span className="text-4xl text-muted-foreground">Project Image</span>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">E-Commerce Analytics Dashboard</h2>
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
              A comprehensive analytics dashboard for e-commerce businesses that visualizes sales data, customer
              behavior, and inventory management.
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
            <span className="text-4xl text-muted-foreground">Project Image</span>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">Health Monitoring IoT System</h2>
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
              An IoT-based health monitoring system that collects vital signs data from wearable devices and provides
              real-time health insights.
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
            <span className="text-4xl text-muted-foreground">Project Image</span>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">Augmented Reality Navigation App</h2>
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
              A mobile application that uses augmented reality to provide real-time navigation guidance in indoor
              environments like shopping malls and airports.
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
