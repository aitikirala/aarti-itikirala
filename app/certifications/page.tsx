import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Aarti Itikirala | Certifications",
  description: "Certifications earned by Aarti Itikirala",
}

export default function CertificationsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Certifications</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
          <div className="aspect-square relative bg-muted flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="AWS Certified Solutions Architect Badge"
              width={300}
              height={300}
              className="object-contain p-6"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">AWS Certified Solutions Architect</h2>
            </div>
            <p className="text-muted-foreground mb-4">Amazon Web Services</p>
            <p className="mb-4">
              Comprehensive understanding of AWS architecture best practices and the ability to design scalable, highly
              available systems on AWS.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Cloud Architecture</Badge>
              <Badge variant="outline">AWS</Badge>
              <Badge variant="outline">Infrastructure</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Issued: January 2023</p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
          <div className="aspect-square relative bg-muted flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Microsoft Azure Developer Associate Badge"
              width={300}
              height={300}
              className="object-contain p-6"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">Microsoft Certified: Azure Developer Associate</h2>
            </div>
            <p className="text-muted-foreground mb-4">Microsoft</p>
            <p className="mb-4">
              Proficiency in developing solutions that run on Azure, including design, build, test, and maintenance of
              cloud applications.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Azure</Badge>
              <Badge variant="outline">Cloud Development</Badge>
              <Badge variant="outline">Microsoft</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Issued: March 2022</p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
          <div className="aspect-square relative bg-muted flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Google Professional Data Engineer Badge"
              width={300}
              height={300}
              className="object-contain p-6"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">Google Professional Data Engineer</h2>
            </div>
            <p className="text-muted-foreground mb-4">Google Cloud</p>
            <p className="mb-4">
              Expertise in designing and building data processing systems, creating machine learning models, and
              enabling data-driven decision making.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Data Engineering</Badge>
              <Badge variant="outline">Google Cloud</Badge>
              <Badge variant="outline">Machine Learning</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Issued: September 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}
