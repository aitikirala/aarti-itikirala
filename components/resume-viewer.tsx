"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface ResumeViewerProps {
  onClose: () => void
}

export default function ResumeViewer({ onClose }: ResumeViewerProps) {
  // Handle escape key to close the viewer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    // Prevent scrolling of the body when modal is open
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl h-[85vh] bg-card rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Resume</h2>
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download
              className="text-sm text-primary hover:underline"
              aria-label="Download resume"
            >
              Download PDF
            </a>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-muted transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="h-[calc(85vh-64px)] w-full bg-muted">
          {/* PDF Viewer */}
          <object data="/resume.pdf" type="application/pdf" className="w-full h-full">
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <p className="mb-4">Unable to display PDF file.</p>
              <a
                href="/resume.pdf"
                download
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Download Instead
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  )
}
