"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export default function SubtleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, systemTheme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false)

  const effectiveTheme = theme === "system" ? systemTheme : theme

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor(canvasWidth: number, canvasHeight: number, isDark: boolean) {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.size = Math.random() * 4 + 2
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        const hue = 275 + (Math.random() * 20 - 10)
        const saturation = 100
        const lightness = isDark ? 75 : 60
        this.color = `hsl(${hue}, ${saturation}%, ${lightness}%)`
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > canvasWidth) this.speedX *= -1
        if (this.y < 0 || this.y > canvasHeight) this.speedY *= -1
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    const particles: Particle[] = []
    const isDark = effectiveTheme === "dark"

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()

    const particleCount = 60
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio, isDark))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)

      particles.forEach((p) => {
        p.update(canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)
        p.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [effectiveTheme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen -z-10"
      style={{ width: "100vw", height: "100vh" }}
      aria-hidden="true"
    />
  )
}
