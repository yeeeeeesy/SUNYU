import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-fade">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Get In Touch</h2>
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border-primary/20">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              I'm always interested in new opportunities and collaborations in economics research, data analysis, and academic projects.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-secondary shadow-lg hover:shadow-xl text-lg">
              <a href="mailto:yesunnyu@gmail.com">
                <Mail className="mr-3 h-5 w-5" />
                Let's Connect
              </a>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <Mail className="text-3xl text-primary mb-3 mx-auto w-8 h-8" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">yesunnyu@gmail.com</p>
            </div>
            <div className="p-4">
              <svg className="text-3xl text-primary mb-3 mx-auto w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">LinkedIn</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Professional Network</p>
            </div>
            <div className="p-4">
              <MapPin className="text-3xl text-primary mb-3 mx-auto w-8 h-8" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Location</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Berkeley, California</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
