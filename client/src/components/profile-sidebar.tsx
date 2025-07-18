import { Mail, MapPin, ExternalLink } from "lucide-react";
import profileImage from "@assets/1_1752804095028.jpg";

export default function ProfileSidebar() {
  return (
    <aside className="fixed left-0 top-20 bottom-0 w-80 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 overflow-y-auto sidebar-scroll theme-transition">
      <div className="p-6">
        {/* Profile Photo */}
        <div className="mb-6 flex justify-center">
          <img 
            src={profileImage} 
            alt="Sunyu Ye Profile Photo" 
            className="w-32 h-32 rounded-full profile-image border-4 border-primary shadow-lg"
          />
        </div>
        
        {/* Personal Info */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Sunyu Ye</h1>
          <p className="text-primary font-medium mb-1">Economics Student</p>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">Zhejiang University</p>
          <p className="text-slate-500 dark:text-slate-500 text-sm flex items-center justify-center">
            <MapPin className="w-4 h-4 mr-1" />
            Berkeley, California
          </p>
        </div>
        
        {/* Contact Links */}
        <div className="space-y-3 mb-8">
          <a 
            href="mailto:yesunnyu@gmail.com" 
            className="flex items-center p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors group"
          >
            <Mail className="text-primary mr-3 w-5 h-5" />
            <span className="text-sm group-hover:text-primary transition-colors">Email</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/sunyu-ye-a3a806373" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors group"
          >
            <ExternalLink className="text-primary mr-3 w-5 h-5" />
            <span className="text-sm group-hover:text-primary transition-colors">LinkedIn Profile</span>
          </a>
          
          <a 
            href="https://github.com/yeeeeeesy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors group"
          >
            <ExternalLink className="text-primary mr-3 w-5 h-5" />
            <span className="text-sm group-hover:text-primary transition-colors">GitHub</span>
          </a>
          
          <a 
            href="https://www.instagram.com/ysy200501?igsh=MTNibnJxNXN6eTV3eg%3D%3D&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors group"
          >
            <ExternalLink className="text-primary mr-3 w-5 h-5" />
            <span className="text-sm group-hover:text-primary transition-colors">Instagram</span>
          </a>
        </div>
        
        {/* Slogan */}
        <div className="text-center pt-4 border-t border-slate-200 dark:border-slate-700">
          <p className="text-slate-500 dark:text-slate-400 text-sm italic">"Tomorrow is another day."</p>
        </div>
      </div>
    </aside>
  );
}
