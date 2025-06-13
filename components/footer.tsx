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
        <div className="w-full px-4 md:px-12 lg:px-20 xl:px-32 2xl:px-48 flex flex-col items-center justify-between gap-4 py-6 md:flex-row">

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
            <button
              onClick={() => setShowResume(true)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              aria-label="View Resume"
            >
              <FileText className="h-5 w-5" />
              <span className="text-sm">Resume</span>
            </button>
          </div>
        </div>
      </footer>
      {showResume && <ResumeViewer onClose={() => setShowResume(false)} />}
    </>
  )
}
