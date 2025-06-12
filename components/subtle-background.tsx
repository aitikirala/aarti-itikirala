"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export default function SubtleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, systemTheme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false)

  // Determine the effective theme (accounting for 'system' setting)
  const effectiveTheme = theme === "system" ? systemTheme : theme

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Mouse event handlers - use window instead of canvas for better tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
      setIsMouseInCanvas(true)
    }

    const handleMouseLeave = () => {
      setIsMouseInCanvas(false)
    }

    // Use window for mouse tracking instead of canvas
    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Touch event handler for mobile
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMousePosition({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        })
        setIsMouseInCanvas(true)

        // Reset after a short delay when touch ends
        setTimeout(() => {
          setIsMouseInCanvas(false)
        }, 3000)
      }
    }

    window.addEventListener("touchstart", handleTouch)
    window.addEventListener("touchmove", handleTouch)

    // Electric purple colors
    const darkModeParticleColor = "rgba(191, 64, 255, 0.7)" // Bright electric purple for dark mode
    const lightModeParticleColor = "rgba(138, 43, 226, 0.5)" // Slightly darker electric purple for light mode

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      baseSize: number
      speedX: number
      speedY: number
      opacity: number
      baseOpacity: number
      originalX: number
      originalY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.originalX = this.x
        this.originalY = this.y
        this.baseSize = Math.random() * 2 + 0.5
        this.size = this.baseSize
        this.speedX = Math.random() * 0.4 - 0.2
        this.speedY = Math.random() * 0.4 - 0.2
        this.baseOpacity = Math.random() * 0.5 + 0.1
        this.opacity = this.baseOpacity
      }

      update(mouseX: number, mouseY: number, isMouseIn: boolean) {
        // Normal movement
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0

        // Update original position for slow drift
        this.originalX += this.speedX * 0.1
        this.originalY += this.speedY * 0.1

        // React to mouse if it's in the canvas
        if (isMouseIn) {
          const dx = mouseX - this.x
          const dy = mouseY - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 200 // Increased interaction distance

          if (distance < maxDistance) {
            // Calculate force (closer = stronger)
            const force = (1 - distance / maxDistance) * 1.2 // Increased force for more noticeable effect

            // Move particles away from cursor
            this.x -= (dx / distance) * force
            this.y -= (dy / distance) * force

            // Increase size and opacity when near cursor
            this.size = this.baseSize + (1 - distance / maxDistance) * 3
            this.opacity = this.baseOpacity + (1 - distance / maxDistance) * 0.5
          } else {
            // Gradually return to original path when far from cursor
            const returnSpeed = 0.05
            this.x += (this.originalX - this.x) * returnSpeed
            this.y += (this.originalY - this.y) * returnSpeed

            // Reset size and opacity when far from cursor
            this.size = this.baseSize
            this.opacity = this.baseOpacity
          }
        } else {
          // Gradually return to original path when mouse is not in canvas
          const returnSpeed = 0.02
          this.x += (this.originalX - this.x) * returnSpeed
          this.y += (this.originalY - this.y) * returnSpeed

          // Reset size and opacity when mouse is not in canvas
          this.size = this.baseSize
          this.opacity = this.baseOpacity
        }
      }

      draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)

        // Use electric purple colors
        ctx.fillStyle = isDark ? darkModeParticleColor : lightModeParticleColor
        ctx.fill()
      }
    }

    // Create particles
    const particleCount = Math.min(window.innerWidth / 8, 120) // Increased particle count
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation function
    const animate = () => {
      // Clear canvas with a semi-transparent background to create trail effect
      ctx.fillStyle = effectiveTheme === "dark" ? "rgba(10, 10, 20, 0.2)" : "rgba(245, 245, 250, 0.2)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(mousePosition.x, mousePosition.y, isMouseInCanvas)
        particle.draw(ctx, effectiveTheme === "dark")
      })

      // Draw connecting lines between nearby particles
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Base connection distance
          let connectionDistance = 100

          // Extend connection distance near cursor
          if (isMouseInCanvas) {
            const midX = (a.x + b.x) / 2
            const midY = (a.y + b.y) / 2
            const distToCursor = Math.sqrt(Math.pow(midX - mousePosition.x, 2) + Math.pow(midY - mousePosition.y, 2))

            if (distToCursor < 200) {
              connectionDistance = 150 + (1 - distToCursor / 200) * 50
            }
          }

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)

            const opacity = (1 - distance / connectionDistance) * 0.2

            // Enhance opacity for connections near cursor
            let enhancedOpacity = opacity
            if (isMouseInCanvas) {
              const midX = (a.x + b.x) / 2
              const midY = (a.y + b.y) / 2
              const distToCursor = Math.sqrt(Math.pow(midX - mousePosition.x, 2) + Math.pow(midY - mousePosition.y, 2))

              if (distToCursor < 200) {
                enhancedOpacity = opacity * (1 + (1 - distToCursor / 200) * 1.5)
              }
            }

            // Use electric purple colors for connections
            if (effectiveTheme === "dark") {
              ctx.strokeStyle = `rgba(191, 64, 255, ${enhancedOpacity})` // Bright electric purple for dark mode
            } else {
              ctx.strokeStyle = `rgba(138, 43, 226, ${enhancedOpacity})` // Slightly darker electric purple for light mode
            }

            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      // Draw cursor effect when mouse is in canvas
      if (isMouseInCanvas) {
        ctx.beginPath()
        ctx.arc(mousePosition.x, mousePosition.y, 5, 0, Math.PI * 2)
        ctx.fillStyle = effectiveTheme === "dark" ? "rgba(191, 64, 255, 0.2)" : "rgba(138, 43, 226, 0.2)"
        ctx.fill()

        // Outer ring
        ctx.beginPath()
        ctx.arc(mousePosition.x, mousePosition.y, 200, 0, Math.PI * 2)
        ctx.strokeStyle = effectiveTheme === "dark" ? "rgba(191, 64, 255, 0.1)" : "rgba(138, 43, 226, 0.1)"
        ctx.lineWidth = 1
        ctx.stroke()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("touchstart", handleTouch)
      window.removeEventListener("touchmove", handleTouch)
    }
  }, [effectiveTheme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" aria-hidden="true" />
}
