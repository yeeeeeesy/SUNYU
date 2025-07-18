import { Moon, Sun, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { useIsMobile } from "@/hooks/use-mobile";

export default function TopNavigation() {
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const scrollToChatbot = () => {
    const chatbot = document.querySelector('.floating-chatbot');
    if (chatbot) {
      // First scroll to chatbot
      chatbot.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      
      // Then trigger click to open it
      setTimeout(() => {
        const chatButton = chatbot.querySelector('button');
        if (chatButton) {
          chatButton.click();
        }
      }, 500);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200 dark:border-slate-700 theme-transition">
      <div className="flex items-center justify-between px-6 py-4">
        <button 
          onClick={scrollToTop} 
          className="text-2xl font-bold text-primary hover:text-secondary transition-colors cursor-pointer"
        >
          Sunyu Ye
        </button>
        
        {!isMobile && (
          <div className="hidden md:flex items-center space-x-8">
            <a href="#introduction" className="nav-link px-3 py-2 text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#education" className="nav-link px-3 py-2 text-sm font-medium hover:text-primary transition-colors">Education</a>
            <a href="#experience" className="nav-link px-3 py-2 text-sm font-medium hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="nav-link px-3 py-2 text-sm font-medium hover:text-primary transition-colors">Projects</a>
            <a href="#awards" className="nav-link px-3 py-2 text-sm font-medium hover:text-primary transition-colors">Awards</a>
            <a href="#skills" className="nav-link px-3 py-2 text-sm font-medium hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="nav-link px-3 py-2 text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
        )}
        
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToChatbot}
            className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 hover:border-primary/30 hidden sm:flex items-center space-x-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm">AI Chat</span>
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToChatbot}
            className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 hover:border-primary/30 sm:hidden"
          >
            <MessageCircle className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Open AI Chat</span>
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
