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
              <h2 className="text-3xl font-semibold">Bachelor in Computer Science</h2>
              <Badge className="w-fit text-base px-3 py-1">2020 - 2024</Badge>
            </div>
            <p className="text-2xl text-muted-foreground mb-6">University of Maryland - College Park</p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <p className="text-xl mb-2">
                  <strong>GPA:</strong> 3.9/4.0
                </p>
                <p className="text-xl mb-6">
                  <strong>Specialization:</strong> Artificial Intelligence and Machine Learning
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-3">Key Courses:</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-sm">
                      Advanced Algorithms
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Machine Learning
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Natural Language Processing
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Computer Vision
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Distributed Systems
                    </Badge>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Achievements:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Graduate Research Assistant in the AI Lab</li>
                  <li>Published paper on "Neural Networks for Image Recognition" at ICML 2016</li>
                  <li>Recipient of the Computer Science Department Excellence Award</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">Activities:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-sm">
                    AI Research Group
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Graduate Student Association
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Hackathon Mentor
                  </Badge>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Thesis:</h3>
              <p className="italic">"Advancements in Convolutional Neural Networks for Real-time Object Detection"</p>
              <p className="mt-2">
                Developed a novel approach to optimize CNN architectures for real-time object detection on
                resource-constrained devices, achieving a 35% improvement in inference speed while maintaining accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

