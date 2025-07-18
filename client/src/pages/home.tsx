import { useEffect } from "react";
import TopNavigation from "@/components/top-navigation";
import ProfileSidebar from "@/components/profile-sidebar";
import FloatingChatbot from "@/components/floating-chatbot";
import Introduction from "@/components/sections/introduction";
import ResearchFocus from "@/components/sections/research-focus";
import Resume from "@/components/sections/resume";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Awards from "@/components/sections/awards";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const isMobile = useIsMobile();

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const sections = document.querySelectorAll('.section-fade');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background theme-transition">
      {/* SEO Meta Tags */}
      <title>Sunyu Ye - Economics Student & Research Assistant</title>
      <meta 
        name="description" 
        content="Economics undergraduate at Zhejiang University passionate about data analysis, financial markets, and economic research. Research assistant specializing in platform economy and gig workers." 
      />
      <meta property="og:title" content="Sunyu Ye - Economics Student & Research Assistant" />
      <meta property="og:description" content="Economics undergraduate at Zhejiang University passionate about data analysis, financial markets, and economic research." />
      <meta property="og:type" content="website" />

      <TopNavigation />
      
      <div className="flex min-h-screen pt-20">
        {!isMobile && <ProfileSidebar />}
        
        <main className={`flex-1 ${!isMobile ? 'ml-80' : ''} overflow-y-auto content-scroll ${isMobile ? 'pb-20' : ''}`}>
          <div className="max-w-4xl mx-auto p-8 space-y-16">
            <Introduction />
            <ResearchFocus />
            <Resume />
            <Education />
            <Experience />
            <Projects />
            <Awards />
            <Skills />
            <Contact />
          </div>
        </main>
      </div>

      <FloatingChatbot />

      {/* Mobile Navigation */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 z-40">
          <div className="grid grid-cols-4 py-2">
            <a href="#introduction" className="flex flex-col items-center py-2 text-xs">
              <i className="fas fa-user text-primary mb-1"></i>
              About
            </a>
            <a href="#education" className="flex flex-col items-center py-2 text-xs">
              <i className="fas fa-graduation-cap text-primary mb-1"></i>
              Education
            </a>
            <a href="#experience" className="flex flex-col items-center py-2 text-xs">
              <i className="fas fa-briefcase text-primary mb-1"></i>
              Work
            </a>
            <a href="#contact" className="flex flex-col items-center py-2 text-xs">
              <i className="fas fa-envelope text-primary mb-1"></i>
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
