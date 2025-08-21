"use client"

import Link from "next/link"
import { Github, Linkedin, FileText } from "lucide-react"
import { useState } from "react"
import ResumeViewer from "./resume-viewer"

export default function Footer() {
  const [showResume, setShowResume] = useState(false)

  return (
    <>
      <footer className="bg-transparent">
        <div className="w-full px-4 sm:px-6 md:px-8 flex h-16 items-center justify-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} By Aarti Itikirala
          </p>
          <Link
            href="https://github.com/aitikirala"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/aarti-itikirala/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <button
            onClick={() => setShowResume(true)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            aria-label="View Resume"
          >
            <FileText className="h-5 w-5" />
            <span className="text-sm">Resume</span>
          </button>
        </div>
      </footer>
      {showResume && <ResumeViewer onClose={() => setShowResume(false)} />}
    </>
  )
}
