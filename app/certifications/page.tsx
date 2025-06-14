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
              src="/aws_solarch.png"
              alt="AWS Certified Solutions Architect Badge"
              width={400}
              height={400}
              className="object-contain p-6"
            />

          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">AWS Certified Solutions Architect - Associate</h2>
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
            <p className="text-sm text-muted-foreground">Issued: August 2024</p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
          <div className="aspect-square relative bg-muted flex items-center justify-center">
            <Image
              src="/oracle.png"
              alt="Oracle Java SE 11 Developer Badge"
              width={400}
              height={400}
              className="object-contain p-6"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">Oracle Java SE 11 Developer</h2>
            </div>
            <p className="text-muted-foreground mb-4">Oracle</p>
            <p className="mb-4">
              Proficient in core Java programming with a strong understanding of object-oriented principles including encapsulation, inheritance, polymorphism, and abstraction.

            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Java</Badge>
              <Badge variant="outline">Encapsulation</Badge>
              <Badge variant="outline">Inheritance</Badge>
              <Badge variant="outline">Polymorphism</Badge>
              <Badge variant="outline">Abstraction</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Issued: May 2021</p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
          <div className="aspect-square relative bg-muted flex items-center justify-center">
            <Image
              src="/machlearning.png"
              alt="AWS Certified Solutions Architect Badge"
              width={400}
              height={400}
              className="object-contain p-6"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">AWS Machine Learning Engineer - Associate</h2>
            </div>
            <p className="text-muted-foreground mb-4">Amazon Web Services</p>
            <p className="mb-4">
              Comprehensive knowledge of machine learning concepts and the ability to design, implement, and deploy scalable AI/ML solutions using AWS services.

            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Sagemaker</Badge>
              <Badge variant="outline">Bedrock</Badge>
              <Badge variant="outline">RedShift</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Issued: May 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}
