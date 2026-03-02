import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Aarti Itikirala | Certifications",
  description: "Certifications earned by Aarti Itikirala",
}

type Cert = {
  title: string
  issued: string
  href: string
  imgSrc: string
  imgAlt: string
}

export default function CertificationsPage() {
  const certs: Cert[] = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issued: "Aug 2024",
      href: "https://www.credly.com/badges/38efde8c-4e2a-436d-8003-de2bb80d7c96",
      imgSrc: "/aws_solarch.png",
      imgAlt: "AWS Solutions Architect badge",
    },
    {
      title: "AWS Machine Learning Engineer – Associate",
      issued: "May 2025",
      href: "https://www.credly.com/badges/6c3e625b-5e9a-4896-a201-53fd209436b8",
      imgSrc: "/machlearning.png",
      imgAlt: "AWS ML Engineer badge",
    },
    {
      title: "Oracle Java SE 11 Developer",
      issued: "May 2021",
      href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C2595ADA331C266FA05DC0ABFB072307347496F7124E23235875D76E31046BE1",
      imgSrc: "/oracle.png",
      imgAlt: "Oracle Java SE 11 badge",
    },
  ]

  return (
  <div className="container relative min-h-screen py-12">
    <h1 className="text-4xl font-bold">Certifications</h1>

    {/* HARD SPACER: guaranteed visible space */}
    <div aria-hidden className="h-16 md:h-24" />

    <div className="flex flex-row flex-nowrap justify-center gap-12 md:gap-24 w-full">
      {certs.map((c) => (
  <div key={c.title} className="flex flex-col items-center text-center shrink-0">
  {/* Clickable badge */}
  <Link
    href={c.href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Open credential: ${c.title}`}
    className="group block shrink-0"
  >
    <Image
      src={c.imgSrc}
      alt={c.imgAlt}
      width={320}
      height={320}
      className="object-contain w-56 h-56 md:w-80 md:h-80 transition-transform duration-200 group-hover:scale-[1.02]"
      priority
    />
  </Link>

  {/* Spacer between badge and issued text */}
  <div aria-hidden className="h-6 md:h-8" />

  <p className="text-sm text-muted-foreground tracking-tight">
    Issued: {c.issued}
  </p>
</div>
))}
    </div>
  </div>
)
}