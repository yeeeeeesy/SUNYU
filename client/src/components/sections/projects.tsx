import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Platform Economy Analysis",
      description: "Comprehensive analysis of gig worker economics using Python and MATLAB",
      technologies: ["Python", "MATLAB", "Data Analysis"]
    },
    {
      title: "Volunteer Management System",
      description: "University-wide platform for tracking and coordinating volunteer activities",
      technologies: ["Web Development", "Project Management", "Database Design"]
    },
    {
      title: "Sustainable Finance Research",
      description: "Analysis of ESG investment strategies and market performance",
      technologies: ["Finance", "ESG Analysis", "STATA"]
    },
    {
      title: "Economic Modeling Contest",
      description: "Mathematical modeling project that achieved finalist recognition",
      technologies: ["Mathematical Modeling", "LaTeX", "Economics"]
    }
  ];

  return (
    <section id="projects" className="section-fade">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    {tech}
                  </Badge>
                ))}
              </div>
              <button className="text-primary hover:text-secondary font-medium transition-colors flex items-center">
                View Details <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
