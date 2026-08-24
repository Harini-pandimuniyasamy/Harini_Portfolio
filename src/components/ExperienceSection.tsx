import React from "react";
import { INTERNSHIPS_LIST } from "../data/portfolioData";

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-[95%] max-w-6xl mx-auto mt-24 md:mt-32 relative z-10 px-4 md:px-8"
    >
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider section-heading text-white">
          Internships & Experience
        </h2>
        <p className="text-gray-400 text-sm max-w-lg mx-auto mt-2">
          Hands-on technical internships across data analytics, full-stack web, and core programming.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INTERNSHIPS_LIST.map((item, index) => (
          <div
            key={`${item.company}-${index}`}
            className="glass-card p-6 md:p-7 rounded-3xl flex flex-col justify-between group hover:border-[#B99AFF]/50 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B99AFF]/15 border border-[#B99AFF]/30 flex items-center justify-center text-[#B99AFF] text-xl group-hover:scale-110 transition-transform">
                  <i className={item.icon}></i>
                </div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  Internship
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-[#d4bbff] transition-colors">
                {item.company}
              </h3>
              <h4 className="text-sm font-semibold text-[#B99AFF] mt-1 mb-3">
                {item.domain}
              </h4>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <i className="fas fa-check-circle text-xs"></i> Completed
              </span>
              <span className="text-gray-500 font-mono">Hands-on Lab</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
