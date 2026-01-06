"use client"

import { Linkedin, Github, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import ResumeViewer from "@/components/ResumeViewer"

export function Footer() {
  const [showResume, setShowResume] = useState(false)

  return (
    <>
      <footer className="fixed bottom-0 left-0 right-0 z-50 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/90">©2025 Madhavi Itikirala</p>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/madhavi-itikirala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/mitikirala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              <Button
                onClick={() => setShowResume(true)}
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
              >
                <FileText className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {showResume && <ResumeViewer onClose={() => setShowResume(false)} />}
    </>
  )
}
