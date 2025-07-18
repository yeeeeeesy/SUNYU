import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Languages, Wrench } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const dataAnalysisSkills = [
    { name: "Python", level: 85 },
    { name: "MATLAB", level: 75 },
    { name: "STATA", level: 80 },
    { name: "SPSS", level: 70 }
  ];

  const languages = [
    { name: "Chinese", level: 100, proficiency: "Native" },
    { name: "English", level: 85, proficiency: "Professional" }
  ];

  const technicalTools = [
    "LaTeX", "Git", "Excel", "Tableau", "R", "SQL", "Jupyter", "Pandas"
  ];

  return (
    <section id="skills" className="section-fade">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Skills & Expertise</h2>
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Data Analysis Skills */}
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
              <BarChart3 className="text-primary mr-2 w-5 h-5" />
              Data Analysis
            </h3>
            <div className="space-y-4">
              {dataAnalysisSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-400">{skill.name}</span>
                    <span className="text-xs text-slate-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
              <Languages className="text-primary mr-2 w-5 h-5" />
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-400">{lang.name}</span>
                    <span className="text-xs text-slate-500">{lang.proficiency}</span>
                  </div>
                  <Progress value={lang.level} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technical Tools */}
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
              <Wrench className="text-primary mr-2 w-5 h-5" />
              Technical Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalTools.map((tool, index) => (
                <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
