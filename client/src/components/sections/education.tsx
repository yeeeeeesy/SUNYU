import { Badge } from "@/components/ui/badge";

export default function Education() {
  const education = [
    {
      institution: "Zhejiang University",
      degree: "Bachelor of Arts - Economics",
      period: "2023 - 2027",
      status: "current",
      coreCourses: [
        "Game Theory", "Industrial Organization Theory", "Macroeconomics (A)", "Econometrics", 
        "Selected Readings in Economic Literature and Academic Writing", "Time Series Analysis", 
        "Mathematical Economics", "Mathematical Statistics", "Microeconomics (A)", "Behavioral Economics", 
        "Political Economy", "Intermediate Macroeconomics", "Intermediate Econometrics", "Intermediate Microeconomics"
      ],
      minorCourses: [
        "Mathematical Analysis", "Advanced Algebra and Analytic Geometry", "Ordinary Differential Equations", 
        "Complex Analysis", "Real Analysis", "Stochastic Processes", "Probability Theory"
      ]
    },
    {
      institution: "University of California, Berkeley",
      degree: "Digital Transformation, Data and Decision (Summer Session)",
      period: "July - August 2025",
      status: "program"
    },
    {
      institution: "Nanyang Technological University Singapore",
      degree: "Sustainable Finance (Summer Program)",
      period: "July 2024",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="section-fade">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Education</h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
        
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-800 dark:bg-blue-700 rounded-full z-10 border-4 border-white dark:border-slate-900"></div>
              
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{edu.institution}</h3>
                    <p className="text-primary font-medium mt-1">{edu.degree}</p>
                    <Badge 
                      variant="secondary"
                      className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 mt-2 inline-block"
                    >
                      {edu.period}
                    </Badge>
                    
                    {/* Core Courses */}
                    {edu.coreCourses && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Core Courses</h4>
                        <div className="flex flex-wrap gap-1">
                          {edu.coreCourses.map((course, courseIndex) => (
                            <Badge 
                              key={courseIndex}
                              variant="outline"
                              className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Minor Courses */}
                    {edu.minorCourses && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Minor Courses</h4>
                        <div className="flex flex-wrap gap-1">
                          {edu.minorCourses.map((course, courseIndex) => (
                            <Badge 
                              key={courseIndex}
                              variant="outline"
                              className="text-xs bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-600"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Empty space for the other side */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
