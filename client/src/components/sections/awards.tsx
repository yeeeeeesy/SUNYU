import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

export default function Awards() {
  return (
    <section id="awards" className="section-fade">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Awards & Honors</h2>
      <Card className="shadow-md">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full">
              <Trophy className="text-yellow-600 dark:text-yellow-400 w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Mathematical Contest in Modeling</h3>
              <p className="text-primary font-medium">Finalist</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Recognition for outstanding mathematical modeling and problem-solving skills</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
