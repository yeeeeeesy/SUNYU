import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Arts - Economics",
      institution: "Zhejiang University",
      period: "2023 - 2027",
      status: "current"
    },
    {
      degree: "Digital Transformation, Data and Decision",
      institution: "University of California, Berkeley",
      period: "July - August 2025",
      status: "program"
    },
    {
      degree: "Sustainable Finance",
      institution: "Nanyang Technological University Singapore",
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
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                </div>
                <Badge 
                  variant={edu.status === 'current' ? 'default' : 'secondary'}
                  className={edu.status === 'current' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}
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
