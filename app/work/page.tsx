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
              <li>
                Owned the end-to-end development of an AI-powered internal developer assistant that automates engineering workflows through natural language interactions.
              </li>
              <li>
                Designed and implemented 5 AI agents using Python, prompt engineering, MCP integrations, and enterprise API orchestration.
              </li>
              <li>
                Built agentic workflows to automate end-to-end testing, validate API behavior, and streamline access to internal developer tools.
              </li>
              <li>
                Created evaluation frameworks using Bruno to test agent behavior, API routing, and LLM-to-tool interactions for production readiness.
              </li>
              <li>
                Partnered with engineering leadership to deliver AI demos, technical documentation, and enablement sessions for 15+ engineers.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline">Python</Badge>
              <Badge variant="outline">AI Agents</Badge>
              <Badge variant="outline">LLMs</Badge>
              <Badge variant="outline">MCP</Badge>
              <Badge variant="outline">Prompt Engineering</Badge>
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">APIs</Badge>
              <Badge variant="outline">Bruno</Badge>
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
                Built a cross-cloud, event-driven AI pipeline integrating AWS S3, SQS, Lambda, GCP Cloud Storage, Vertex AI, Bedrock agents, and Gemini models.
              </li>
              <li>
                Developed a full-stack Synthetic Data Generator using Python and Next.js, enabling teams to generate ML/OCR test data without manual scripts.
              </li>
              <li>
                Engineered 6+ production AWS Lambda functions for distributed data processing, reducing workflow latency and manual intervention by 76%.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline">AWS Lambda</Badge>
              <Badge variant="outline">S3</Badge>
              <Badge variant="outline">SQS</Badge>
              <Badge variant="outline">GCP</Badge>
              <Badge variant="outline">Vertex AI</Badge>
              <Badge variant="outline">Bedrock</Badge>
              <Badge variant="outline">Gemini</Badge>
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
              Built custom AWS AppFlow and Lambda-based integrations for GitHub and Workday, automating enterprise data synchronization and workflow management.
            </li>
            <li>
              Collaborated with cross-functional engineering teams to design secure, scalable connector workflows for enterprise application integrations.
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="outline">AWS Lambda</Badge>
            <Badge variant="outline">AWS AppFlow</Badge>
            <Badge variant="outline">GitHub</Badge>
            <Badge variant="outline">Workday</Badge>
            <Badge variant="outline">Enterprise Integrations</Badge>
            <Badge variant="outline">APIs</Badge>
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