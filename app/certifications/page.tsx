import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Aarti Itikirala | Certifications",
  description: "Certifications earned by Aarti Itikirala",
}

type Cert = {
  title: string
  provider: string
  issued: string
  href: string
  imgSrc: string
  imgAlt: string
  blurb: string
  tags: string[]
}

export default function CertificationsPage() {
  const certs: Cert[] = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      provider: "Amazon Web Services",
      issued: "Aug 2024",
      href: "https://www.credly.com/badges/38efde8c-4e2a-436d-8003-de2bb80d7c96",
      imgSrc: "/aws_solarch.png",
      imgAlt: "AWS Solutions Architect badge",
      blurb:
        "Designing scalable, highly available architectures on AWS with best-practice cost, security, and reliability.",
      tags: ["Cloud Architecture", "AWS", "Infrastructure"],
    },
    {
      title: "AWS Machine Learning Engineer – Associate",
      provider: "Amazon Web Services",
      issued: "May 2025",
      href: "https://www.credly.com/badges/6c3e625b-5e9a-4896-a201-53fd209436b8",
      imgSrc: "/machlearning.png",
      imgAlt: "AWS ML Engineer badge",
      blurb:
        "End-to-end ML on AWS: data prep, training, deployment, and MLOps using managed services.",
      tags: ["SageMaker", "Bedrock", "Redshift"],
    },
    {
      title: "Oracle Java SE 11 Developer",
      provider: "Oracle",
      issued: "May 2021",
      href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C2595ADA331C266FA05DC0ABFB072307347496F7124E23235875D76E31046BE1",
      imgSrc: "/oracle.png",
      imgAlt: "Oracle Java SE 11 badge",
      blurb:
        "Core Java proficiency with OOP foundations: encapsulation, inheritance, polymorphism, abstraction.",
      tags: ["Java", "Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Certifications</h1>

      {/* stack all cards in 1 column */}
      <div className="grid gap-6">
          {certs.map((c) => (
            <CertCard key={c.title} cert={c} />
          ))}
        </div>
    </div>
  )
}

function CertCard({ cert }: { cert: Cert }) {
  return (
    <div className="rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-md transition-all border border-border/60">
      <div className="p-6 flex items-start gap-6">
        {/* bigger badge */}
        <div className="relative flex-shrink-0 w-32 h-32 md:w-40 md:h-40">
          <Image src={cert.imgSrc} alt={cert.imgAlt} fill className="object-contain" />
        </div>

        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <h2 className="text-2xl font-semibold leading-snug">{cert.title}</h2>
              <p className="text-muted-foreground">{cert.provider}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Badge className="whitespace-nowrap">Issued: {cert.issued}</Badge>
              <Link
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent/60 focus-visible:outline-none"
                aria-label="Open credential"
                title="Open credential"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">{cert.blurb}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {cert.tags.map((t) => (
              <Badge key={t} variant="outline">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
