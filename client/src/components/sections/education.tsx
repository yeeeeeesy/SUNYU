import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{edu.institution}</h3>
                  <p className="text-slate-900 dark:text-white font-medium">{edu.degree}</p>
                </div>
                <Badge 
                  variant="secondary"
                  className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                >
                  {edu.period}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
