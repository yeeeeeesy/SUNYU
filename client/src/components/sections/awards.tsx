import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

export default function Awards() {
  const awards = [
    {
      title: "Mathematical Contest in Modeling",
      prize: "Finalist Prize",
      year: "2025",
      description: "Recognition for outstanding mathematical modeling and problem-solving skills"
    },
    {
      title: "Zhejiang Provincial College Student Advanced Mathematics Competition",
      prize: "Second Prize",
      year: "2024",
      description: "Excellence in advanced mathematics problem-solving and analytical thinking"
    }
  ];

  return (
    <section id="awards" className="section-fade">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Awards & Honors</h2>
      <div className="space-y-6">
        {awards.map((award, index) => (
          <Card key={index} className="shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full">
                  <Trophy className="text-yellow-600 dark:text-yellow-400 w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{award.title}</h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">{award.year}</span>
                  </div>
                  <p className="text-primary font-medium mb-1">{award.prize}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{award.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
