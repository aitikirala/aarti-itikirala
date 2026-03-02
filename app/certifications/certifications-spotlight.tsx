"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type Cert = {
  title: string
  issued: string
  href: string
  imgSrc: string
  imgAlt: string
}

export default function CertificationsSpotlight({ certs }: { certs: Cert[] }) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="relative mx-auto w-full max-w-6xl">
      {/* optional debug */}
      {/* <p className="mb-6 text-sm text-muted-foreground">Hover active: {active === null ? "none" : certs[active]?.title}</p> */}

      <div className="flex flex-row flex-nowrap justify-center gap-6 md:gap-10 lg:gap-12 w-full">
        {certs.map((c, i) => {
          const isActive = active === i
          const isDimmed = active !== null && !isActive

          return (
            <div
              key={c.title}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="relative flex flex-col items-center text-center shrink-0"
              style={{
                transition: "opacity 250ms ease, filter 250ms ease, transform 250ms ease",
                opacity: isDimmed ? 0.18 : 1,
                filter: isDimmed ? "grayscale(1) brightness(0.85)" : "none",
              }}
            >
              {/* SPOTLIGHT (guaranteed visible) */}
              <div
                aria-hidden
                className="pointer-events-none absolute rounded-full"
                style={{
                  inset: "-4.5rem",
                  zIndex: -1,
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 250ms ease",
                  background:
                    "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.26), rgba(255,255,255,0) 62%)",
                  filter: "blur(22px)",
                }}
              />

              <Link
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open credential: ${c.title}`}
                className="block"
                style={{
                  transition: "transform 250ms ease, filter 250ms ease",
                  transform: isActive ? "translateY(-10px) scale(1.12)" : "translateY(0) scale(1)",
                  filter: isActive ? "drop-shadow(0 18px 35px rgba(0,0,0,0.28))" : "none",
                }}
              >
                <Image
                  src={c.imgSrc}
                  alt={c.imgAlt}
                  width={320}
                  height={320}
                  className="object-contain w-56 h-56 md:w-80 md:h-80"
                  priority
                />
              </Link>

              <div aria-hidden className="h-6 md:h-8" />
              <p className="text-sm text-muted-foreground tracking-tight">
                Issued: {c.issued}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}