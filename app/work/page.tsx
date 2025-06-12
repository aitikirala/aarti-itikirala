import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Aarti Itikirala | Work Experience",
  description: "Professional work experience of Aarti Itikirala",
}

export default function WorkPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
      <div className="grid gap-6">
        <div className="border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <h2 className="text-2xl font-semibold">Senior Software Engineer</h2>
              <Badge className="w-fit">January 2021 - Present</Badge>
            </div>
            <p className="text-xl text-muted-foreground mb-4">Tech Innovations Inc.</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Led the development of a microservices architecture that improved system scalability by 40%</li>
              <li>Implemented CI/CD pipelines that reduced deployment time by 60%</li>
              <li>Mentored junior developers and conducted code reviews to maintain code quality</li>
              <li>Collaborated with product managers to define technical requirements and timelines</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline">Microservices</Badge>
              <Badge variant="outline">CI/CD</Badge>
              <Badge variant="outline">Team Leadership</Badge>
              <Badge variant="outline">System Architecture</Badge>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <h2 className="text-2xl font-semibold">Software Engineer</h2>
              <Badge className="w-fit">June 2018 - December 2020</Badge>
            </div>
            <p className="text-xl text-muted-foreground mb-4">Digital Solutions Corp</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Developed and maintained RESTful APIs using Node.js and Express</li>
              <li>Created responsive web applications using React and Redux</li>
              <li>Optimized database queries that improved application performance by 30%</li>
              <li>Participated in agile development processes including daily stand-ups and sprint planning</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline">Node.js</Badge>
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">RESTful APIs</Badge>
              <Badge variant="outline">Agile</Badge>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <h2 className="text-2xl font-semibold">Junior Developer</h2>
              <Badge className="w-fit">August 2016 - May 2018</Badge>
            </div>
            <p className="text-xl text-muted-foreground mb-4">WebTech Startups</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Built and maintained client websites using HTML, CSS, and JavaScript</li>
              <li>Implemented responsive designs and ensured cross-browser compatibility</li>
              <li>Assisted senior developers with debugging and testing</li>
              <li>Collaborated with designers to implement UI/UX improvements</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline">HTML/CSS</Badge>
              <Badge variant="outline">JavaScript</Badge>
              <Badge variant="outline">Responsive Design</Badge>
              <Badge variant="outline">UI/UX</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
