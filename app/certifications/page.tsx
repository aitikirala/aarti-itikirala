import type { Metadata } from "next"
import CertificationsSpotlight from "./certifications-spotlight"

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
  <div className="relative min-h-screen">
    {/* Centered overlay (accounts for header + footer) */}
    <div className="fixed inset-0 flex items-center justify-center pt-16 pb-16">
      <div className="container">
        <CertificationsSpotlight certs={certs} />
      </div>
    </div>
  </div>
)
}