"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function SubtleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, systemTheme } = useTheme()
  const effectiveTheme = theme === "system" ? systemTheme : theme

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!

    // ---------- Core Tunables ----------
    const BASE_COUNT = 90
    const SPEED = 0.12
    const FRICTION = 0.96
    const LINK_RADIUS = 140
    const ORBIT_RADIUS = 180
    const ORBIT_STRENGTH = 0.035
    const ATTRACT = 0.006
    const SIZE_MIN = 1.4
    const SIZE_MAX = 2.6
    const MAX_NEIGHBORS = 3
    // -----------------------------------

    // Theme-aware visibility + colors
    const isDark = effectiveTheme === "dark"

    // Tailwind purple-600 (#9333EA) EXACT
    const PURPLE600 = { r: 147, g: 51,  b: 234 } // light mode
    const GRAY200   = { r: 229, g: 231, b: 235 } // dark mode subtle

    // Make light mode stronger (not faint), dark mode subtle
    const LINE_WIDTH  = isDark ? 1.25 : 1.6
    const ALPHA_MULT  = isDark ? 0.95  : 1.35
    const DOT_ALPHA   = isDark ? 0.45  : 0.85
    const SPOKE_ALPHA = isDark ? 0.22  : 0.32

    const rgba = (c: {r:number;g:number;b:number}, a:number) =>
      `rgba(${c.r}, ${c.g}, ${c.b}, ${a})`

    const LINE_COLOR = (a: number) =>
      rgba(isDark ? GRAY200 : PURPLE600, a)

    const DOT_COLOR = (a: number) =>
      rgba(isDark ? GRAY200 : PURPLE600, a)

    // Hi-DPI sizing
    const resize = () => {
      const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2))
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }
    resize()

    class P {
      x: number; y: number; vx: number; vy: number; r: number
      constructor() {
        this.x = Math.random() * innerWidth
        this.y = Math.random() * innerHeight
        const a = Math.random() * Math.PI * 2
        this.vx = Math.cos(a) * SPEED
        this.vy = Math.sin(a) * SPEED
        this.r = SIZE_MIN + Math.random() * (SIZE_MAX - SIZE_MIN)
      }
      step(mx: number, my: number, inside: boolean, orbitBoost: number) {
        if (inside) {
          const dx = mx - this.x
          const dy = my - this.y
          const d = Math.hypot(dx, dy)
          if (d < ORBIT_RADIUS && d > 0.001) {
            const tx = -dy / d
            const ty = dx / d
            const falloff = 1 - d / ORBIT_RADIUS
            const spin = ORBIT_STRENGTH * (falloff ** 1.2) * orbitBoost
            this.vx += tx * spin
            this.vy += ty * spin
            const pull = ATTRACT * (falloff ** 1.1)
            this.vx += (dx / d) * pull
            this.vy += (dy / d) * pull
          }
        }
        this.vx *= FRICTION
        this.vy *= FRICTION
        this.x += this.vx
        this.y += this.vy
        if (this.x < -this.r) this.x = innerWidth + this.r
        if (this.x > innerWidth + this.r) this.x = -this.r
        if (this.y < -this.r) this.y = innerHeight + this.r
        if (this.y > innerHeight + this.r) this.y = -this.r
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = DOT_COLOR(DOT_ALPHA)
        ctx.fill()
      }
    }

    const areaCount = Math.round(Math.min(140, Math.max(60, (innerWidth * innerHeight) / 20000)))
    const COUNT = Math.round((BASE_COUNT + areaCount) / 2)
    let pts: P[] = Array.from({ length: COUNT }, () => new P())

    const mouse = { x: innerWidth / 2, y: innerHeight / 2, inside: false }
    let lastX = mouse.x, lastY = mouse.y, lastT = performance.now()
    let cursorSpeed = 0
    const onMove = (e: MouseEvent) => {
      const t = performance.now()
      const dt = Math.max(1, t - lastT)
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      cursorSpeed = Math.hypot(dx, dy) / dt
      lastX = e.clientX; lastY = e.clientY; lastT = t
      mouse.x = e.clientX; mouse.y = e.clientY; mouse.inside = true
    }
    const onLeave = () => { mouse.inside = false }
    const onResize = () => { resize(); pts = Array.from({ length: COUNT }, () => new P()) }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseout", onLeave)
    window.addEventListener("resize", onResize)

    let raf = 0
    const tick = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight)

      const orbitBoost = Math.min(3, 1 + cursorSpeed * 20)

      for (const p of pts) p.step(mouse.x, mouse.y, mouse.inside, orbitBoost)

      for (let i = 0; i < pts.length; i++) {
        const a = pts[i]
        const dax = a.x - mouse.x
        const day = a.y - mouse.y
        const da = Math.hypot(dax, day)
        if (da > ORBIT_RADIUS) continue

        let neighbors = 0
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < LINK_RADIUS) {
            const db = Math.hypot(b.x - mouse.x, b.y - mouse.y)
            const cursorFactor = 1 - Math.min(da, db) / ORBIT_RADIUS
            const segFactor = 1 - d / LINK_RADIUS
            // stronger in light mode (clamped to 1)
            const alphaRaw = (cursorFactor ** 1.1) * (segFactor ** 0.9) * ALPHA_MULT
            const alpha = Math.min(1, Math.max(0, alphaRaw))
            if (alpha > 0.02) {
              ctx.strokeStyle = LINE_COLOR(alpha)
              ctx.lineWidth = LINE_WIDTH
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.stroke()
              neighbors++
              if (neighbors >= MAX_NEIGHBORS) break
            }
          }
        }
      }

      if (mouse.inside) {
        for (const p of pts) {
          const dx = mouse.x - p.x, dy = mouse.y - p.y
          const d = Math.hypot(dx, dy)
          if (d < ORBIT_RADIUS * 0.8) {
            const alpha = Math.min(1, Math.max(0,
              (1 - d / (ORBIT_RADIUS * 0.8)) * SPOKE_ALPHA
            ))
            if (alpha > 0.02) {
              ctx.strokeStyle = LINE_COLOR(alpha)
              ctx.lineWidth = LINE_WIDTH
              ctx.beginPath()
              ctx.moveTo(mouse.x, mouse.y)
              ctx.lineTo(p.x, p.y)
              ctx.stroke()
            }
          }
        }
      }

      for (const p of pts) p.draw()

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseout", onLeave)
      window.removeEventListener("resize", onResize)
    }
  }, [effectiveTheme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-screen h-screen pointer-events-none"
      aria-hidden="true"
    />
  )
}
