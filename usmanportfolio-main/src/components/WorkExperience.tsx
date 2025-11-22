import { Briefcase, Globe, Code, TrendingUp, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    company: "iVisionGate",
    role: "Web Developer & No-Code CMS Specialist",
    location: "Onsite",
    dates: "Sep 2025 – Present",
    summary: [
      "Developed enterprise fintech apps for major clients, including HBL (Habib Bank).",
      "Contributed to SwifPack, a logistics platform with real-time tracking, courier workflows, and dashboards.",
      "Built scalable backend systems, improved performance by 30%, and enhanced overall security.",
      "Supported React dashboards, role-based authentication, and AWS deployments.",
      "Delivered no-code CMS solutions using Bubble.io, Shopify, and Webflow for internal tools and prototypes.",
      "Automated systems using REST APIs, webhooks, and integrations to reduce manual work.",
      "Collaborated with senior engineers to optimize performance, scalability, and development processes."
    ]
  },
  {
    icon: <Layers className="h-6 w-6 text-accent" />,
    company: "Eagle Scout",
    role: "Bubble Developer",
    location: "Remote",
    dates: "Jan 2024 – Present",
    summary: [
      "Developed Bubble.io applications with responsive UI and optimized workflows.",
      "Built dashboards, forms, and role-based systems using Bubble's database and logic engine.",
      "Integrated REST APIs, authentication, and third-party plugins for extended functionality.",
      "Improved app performance and UX with clean workflows and reusable components.",
      "Collaborated with clients to translate their business needs into scalable Bubble features."
    ]
  },
  {
    icon: <Briefcase className="h-6 w-6 text-secondary" />,
    company: "Freelance",
    role: "CMS & E-Commerce Developer",
    location: "Remote",
    dates: "May 2023 – Present",
    summary: [
      "Delivered Shopify and WordPress e-commerce stores for Dawood Super Store, RHS Wellness, Libaas by RM, and others.",
      "Built Bubble.io tools for workflow automation and internal dashboarding.",
      "Automated operations using Make.com and Zapier, reducing manual tasks by 40%.",
      "Implemented SEO strategies to improve organic ranking and visibility."
    ]
  }
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient-primary">Work Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's a summary of my professional journey and the impactful work I've done.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/20">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <span className="text-sm text-muted-foreground">{exp.dates}</span>
                  </div>
                  <p className="text-primary font-medium mb-3">{exp.role}</p>

                  <ul className="space-y-2 mt-4">
                    {exp.summary.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            className="hero-button"
            size="lg"
            asChild
          >
            <a href="https://docs.google.com/document/d/16UjVpveS0x3j9AfnSakfU2l2kjfoMC8t7d_sHEuZLg8/edit?tab=t.0#heading=h.8dw6554pc91r" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
