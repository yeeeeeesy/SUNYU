import resumePdf from "@assets/resume_1752804127936.pdf";

export default function Introduction() {
  return (
    <section id="introduction" className="section-fade">
      <div className="space-y-6">
        <div className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          <p className="mb-4">
            My name is <span className="font-semibold text-primary">Sunyu Ye</span>. I am an Economics undergraduate at{" "}
            <span className="font-semibold text-primary">🏫 Zhejiang University</span>. Currently, I am a research assistant at{" "}
            <span className="font-semibold text-primary">🏫 Zhejiang University</span>, where I have the privilege of working with Principal Researcher{" "}
            <span className="font-semibold text-primary underline">Prof. Zhe Yuan</span>. Prior to this, I gained valuable research experience at{" "}
            <span className="font-semibold text-primary">🏫 University of California, Berkeley</span> under various programs.
          </p>
        </div>
        
        <div className="border-l-4 border-primary pl-6 bg-primary bg-opacity-5 dark:bg-primary dark:bg-opacity-10 py-4 rounded-r-lg">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            My research focuses on leveraging <span className="font-semibold text-primary">quantitative analysis</span> to address complex economic systems. This includes applications in platform economy, gig worker analysis, and advancing economic policy research.
          </p>
        </div>
        
        <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            I am actively seeking research assistant opportunities in economic analysis and quantitative research. Feel free to reach out, or learn more from{" "}
            <a 
              href={resumePdf} 
              download="Sunyu_Ye_Resume.pdf"
              className="font-semibold text-primary underline hover:text-secondary transition-colors"
            >
              My Resume
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
