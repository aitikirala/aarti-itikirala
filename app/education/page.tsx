import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Aarti Itikirala | Education",
  description: "Educational background of Aarti Itikirala",
}

export default function EducationPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Education</h1>
      <div className="grid gap-6">
        <div className="border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-6">
              <h2 className="text-3xl font-semibold">Bachelor of Science in Computer Science</h2>
              <Badge className="w-fit text-base px-3 py-1">2020 - 2024</Badge>
            </div>
            <p className="text-2xl text-muted-foreground mb-6">University of Maryland - College Park</p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <p className="text-xl mb-6">
                  <strong>Minor:</strong> Statistics
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-3">Key Courses:</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-sm">
                      Object Oriented Programming (Java)
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Advanced Data Structures in Java
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Functional Programming (Rust, OCaml, Ruby)
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Advanced Linear Algebra
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Discrete Structures
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Computer System Organization (C/C++)
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Practical Tools for Data Science (SQL, Python)
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      App Development (Kotlin, Swift)
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Compilers (C, Racket)
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Algorithms
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Database Design
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Human-Computer Interaction
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Network Security (C)
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Applied Probability and Statistics
                    </Badge>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Highlights:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Honors Student</li>
                  <li>Association for Women in Computing Board Member</li>
                  <li>Recipient of the OMSE Academic Excellence Award</li>
                  <li>Women's Club Ultimate Frisbee Player </li>
                </ul>

                <h3 className="text-xl font-medium mb-3">Activities:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-sm">
                    Association for Women in Computing
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    I4C
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Ultimate Frisbee
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Honors Humanities
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    International Economics and Finance Society
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    WMUC Radio
                  </Badge>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Capstone & Apprenticeship</h3>
              <p className="italic">"Interdisciplinary Innovation and Practical Experience in Software Design"</p>
              <p className="mt-2">
                Completed a capstone project through the Honors Humanities program, integrating design thinking with technology and social impact. Simultaneously undertook an intensive apprenticeship, gaining hands-on experience in collaborative software development and client communication.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
