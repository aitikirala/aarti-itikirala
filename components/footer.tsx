import Link from "next/link"
import { Github, Linkedin, FileText } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-transparent backdrop-blur-sm">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">@Aarti Itikirala</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <FileText className="h-5 w-5" />
            <span className="sr-only">Resume</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
