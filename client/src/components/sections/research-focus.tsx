import { TrendingUp, Database, DollarSign, Users } from "lucide-react";

export default function ResearchFocus() {
  const focusAreas = [
    {
      icon: TrendingUp,
      title: "Platform Economy & Gig Workers",
      description: "Large-scale analysis of digital platform labor markets"
    },
    {
      icon: Database,
      title: "Quantitative Analysis",
      description: "Advanced statistical methods and data visualization"
    },
    {
      icon: DollarSign,
      title: "Financial Markets",
      description: "Sustainable finance and economic policy analysis"
    },
    {
      icon: Users,
      title: "Labor Economics",
      description: "Digital platforms and workforce transformation"
    }
  ];

  return (
    <section id="research-focus" className="section-fade">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-xl p-8 border border-primary/20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Research Focus</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {focusAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div key={index} className="flex items-start space-x-3">
                <IconComponent className="text-primary mt-1 w-5 h-5" />
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">{area.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{area.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
