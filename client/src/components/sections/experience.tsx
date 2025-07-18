import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Research Assistant",
      company: "Zhejiang University",
      team: "Prof. Zhe Yuan Research Team",
      period: "Feb 2025 - Present",
      achievements: [
        "Analyzed 12,447 platform transaction datasets and 10,028 survey responses using advanced quantitative methods",
        "Organized and synthesized 188,972 words of field interview transcripts for actionable insights",
        "Authored comprehensive 29,898-word industry white paper on the gig economy",
        "Utilized Python and MATLAB for data processing, statistical analysis, and visualization"
      ],
      status: "current"
    },
    {
      title: "Director of General Affairs Department",
      company: "Zhejiang University Youth Volunteer Guidance Center",
      team: "",
      period: "June 2024 - May 2025",
      achievements: [
        "Led development of university-wide volunteer project website for centralized coordination",
        "Supervised records and activities of 40,000+ star-rated student volunteers",
        "Enhanced communication systems contributing to increased participation and organizational excellence"
      ],
      status: "completed"
    }
  ];

  return (
    <section id="experience" className="section-fade">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  {exp.team && <p className="text-slate-600 dark:text-slate-400 text-sm">{exp.team}</p>}
                </div>
                <Badge 
                  variant="secondary"
                  className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                >
                  {exp.period}
                </Badge>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start text-slate-700 dark:text-slate-300">
                    <CheckCircle className="text-primary mr-2 mt-1 w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
