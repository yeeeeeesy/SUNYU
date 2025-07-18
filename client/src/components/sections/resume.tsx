import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import resumePdf from "@assets/resume_1752804127936.pdf";

export default function Resume() {
  return (
    <section id="resume" className="section-fade">
      <Card className="shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Resume</h2>
              <p className="text-slate-600 dark:text-slate-400">Download my complete academic and professional background</p>
            </div>
            <Button asChild className="bg-primary hover:bg-secondary shadow-lg hover:shadow-xl">
              <a href={resumePdf} download="Sunyu_Ye_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
