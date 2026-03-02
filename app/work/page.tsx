import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/timeline";

export const metadata: Metadata = {
  title: "Aarti Itikirala | Work Experience",
  description: "Professional work experience of Aarti Itikirala",
};

export default function WorkPage() {
  const data = [
    {
      date: "January 2026 - Present",
      content: (
        <div className="grid gap-6 mb-8">
          <div className="rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-md transition-all border border-border/60">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <h2 className="text-2xl font-semibold">Software Engineer II</h2>
              </div>
              <p className="text-xl text-muted-foreground mb-4">JPMorgan Chase</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Building production-ready full-stack features with Next.js and React.</li>
                <li>Implementing backend services and APIs to support financial workflows.</li>
                <li>Collaborating with cross-functional teams to deliver scalable solutions.</li>
                <li>
                  Utilized the Model Context Protocol (MCP) and built AI-driven
                  solutions to detect and remediate security vulnerabilities.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">APIs</Badge>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      date: "June 2024 - January 2026",
      content: (
        <div className="grid gap-6 mb-8">
          <div className="rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-md transition-all border border-border/60">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <h2 className="text-2xl font-semibold">Software Engineer</h2>
              </div>
              <p className="text-xl text-muted-foreground mb-4">
                Accenture Federal Services
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  Created, tested, and deployed a financial management tool using Microsoft Azure Functions,
                  streamlining reporting workflows across internal teams
                </li>
                <li>
                  Redesigned a manual Python script into a full-stack Synthetic Data Generator web app using Next.js,
                  enabling non-technical users to autonomously generate test data for GCP and OCR systems; improved team
                  productivity by eliminating 100% of manual test data creation
                </li>
                <li>
                  Engineered and launched 6+ AWS Lambda functions that automated key data movement tasks using S3 and SQS,
                  reducing workflow latency and manual intervention by 76%
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">Microsoft Azure Tools</Badge>
                <Badge variant="outline">GCP Tools</Badge>
                <Badge variant="outline">Google Gemini LLM Development</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">Python</Badge>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      date: "July 2022 - May 2024",
      content: (
        <div className="grid gap-6 mb-8">
          <div className="rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-md transition-all border border-border/60">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <h2 className="text-2xl font-semibold">Software Engineer Intern</h2>
              </div>
              <p className="text-xl text-muted-foreground mb-4">People Tech Group</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  Leveraged AWS Lambda and App Flow to design and implement a custom Github connector, enabling seamless
                  integration and automation of code repository workflows.
                </li>
                <li>Collaborated with cross-functional teams to ensure security, scalability, and efficiency.</li>
                <li>
                  Created a tailored Workday connector using AWS Lambda and App Flow, facilitating real-time data
                  synchronization and automation between HR systems and internal applications.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">AWS Lambda</Badge>
                <Badge variant="outline">AWS AppFlow</Badge>
                <Badge variant="outline">Version Control (Git)</Badge>
                <Badge variant="outline">Agile</Badge>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      date: "January 2021 - August 2024",
      content: (
        <div className="grid gap-6 mb-8">
          <div className="rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-md transition-all border border-border/60">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <h2 className="text-2xl font-semibold">Founder</h2>
              </div>
              <p className="text-xl text-muted-foreground mb-4">NextGen Tutoring</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  Built a website and Google Business page to establish an online presence, optimize client acquisition,
                  and streamline tutoring session management.
                </li>
                <li>Specialized focus in the following areas</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Object Oriented Programming</Badge>
                <Badge variant="outline">College Essay Writing</Badge>
                <Badge variant="outline">SAT/ACT</Badge>
                <Badge variant="outline">Calculus I-III</Badge>
                <Badge variant="outline">Data Structures</Badge>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container py-12 pl-4">
      <div className="-ml-4">
        <Timeline data={data} />
      </div>
    </div>
  );
}