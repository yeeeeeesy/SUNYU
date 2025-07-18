import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      institution: "Zhejiang University",
      degree: "Bachelor of Arts - Economics",
      period: "2023 - 2027",
      status: "current"
    },
    {
      institution: "University of California, Berkeley",
      degree: "Digital Transformation, Data and Decision (Summer Session)",
      period: "July - August 2025",
      status: "program"
    },
    {
      institution: "Nanyang Technological University Singapore",
      degree: "Sustainable Finance (Summer Program)",
      period: "July 2024",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="section-fade">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Education</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-900 shadow-md relative z-10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              
              {/* Content */}
              <div className="ml-6 bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{edu.institution}</h3>
                    <p className="text-primary font-medium mt-1">{edu.degree}</p>
                  </div>
                  <Badge 
                    variant="secondary"
                    className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex-shrink-0"
                  >
                    {edu.period}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
