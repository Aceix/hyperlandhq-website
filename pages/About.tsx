
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-24 md:py-40">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-12 reveal animate-fade-in-up tracking-tight">About HyperlandHQ</h1>
        
        <div className="space-y-8 max-w-2xl reveal animate-fade-in-up stagger-1">
          <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
            HyperlandHQ is a software studio focused on building well-designed, reliable digital products. 
            We care about clarity, usability, and solving real-world problems through technology.
          </p>
          
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            In an era of bloat and complexity, we believe in the power of tools that do one thing 
            remarkably well. We don't operate like a traditional agency. We don't "bill hours" 
            for arbitrary tasks. We build products that we believe should exist.
          </p>
          
          <div className="pt-12 border-t border-neutral-200 dark:border-neutral-900">
            <p className="text-xl font-medium text-primary group">
              "We build things <span className="relative inline-block group-hover:text-primary-hover transition-colors">carefully<span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span></span> and with purpose."
            </p>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 reveal animate-fade-in-up stagger-2">
          <div>
            <h3 className="text-neutral-900 dark:text-white font-bold mb-4 uppercase tracking-widest text-sm">Our Values</h3>
            <ul className="space-y-8">
              {[
                { title: "Clarity over complexity", desc: "If a user needs a manual, we've failed." },
                { title: "Performance as a feature", desc: "Speed is usability. We optimize for every millisecond." },
                { title: "Practicality first", desc: "We solve problems that people actually face in their workday." }
              ].map((val, i) => (
                <li key={i} className="group cursor-default">
                  <h4 className="text-neutral-900 dark:text-white font-semibold mb-1 group-hover:text-primary transition-colors">{val.title}</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:translate-x-1 transition-transform">{val.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
             <div className="w-full aspect-square max-w-[300px] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 flex items-center justify-center relative group overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors animate-pulse-soft"></div>
                <div className="text-6xl font-black text-neutral-200 dark:text-white/20 select-none group-hover:scale-110 group-hover:text-primary/20 transition-all duration-700">H/HQ</div>
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/10 rounded-3xl transition-colors pointer-events-none"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
