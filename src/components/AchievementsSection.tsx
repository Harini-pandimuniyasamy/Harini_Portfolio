import React from "react";
import { ACHIEVEMENTS_LIST, CERTIFICATIONS_LIST } from "../data/portfolioData";

export const AchievementsSection: React.FC = () => {
  return (
    <section
      id="achievements"
      className="w-[95%] max-w-6xl mx-auto mt-24 md:mt-32 relative z-10 px-4 md:px-8"
    >
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider section-heading text-white">
          Achievements & Certifications
        </h2>
        <p className="text-gray-400 text-sm max-w-lg mx-auto mt-2">
          Recognitions, academic presentations, and professional credentials.
        </p>
      </div>

      {/* Key Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {ACHIEVEMENTS_LIST.map((item, idx) => (
          <div
            key={idx}
            className="glass-card p-6 md:p-7 rounded-3xl flex flex-col justify-between group border border-white/10 hover:border-[#B99AFF]/50 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#B99AFF]/15 border border-[#B99AFF]/30 flex items-center justify-center text-[#B99AFF] text-xl mb-4 group-hover:scale-110 transition-transform">
                <i className={item.icon}></i>
              </div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#d4bbff] bg-[#B99AFF]/15 px-2.5 py-0.5 rounded-full">
                {item.type}
              </span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2 group-hover:text-[#d4bbff] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#B99AFF]">
              <span className="flex items-center gap-1.5">
                <i className="fas fa-trophy text-yellow-400"></i> Honor
              </span>
              <span className="text-gray-400">Holy Cross College</span>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Badge Cloud */}
      <div className="glass-panel p-7 md:p-9 rounded-3xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#B99AFF]/20 flex items-center justify-center text-[#B99AFF]">
            <i className="fas fa-certificate text-lg"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Professional Certifications</h3>
            <p className="text-xs text-gray-400">Industry certifications and specialized technical programs</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {CERTIFICATIONS_LIST.map((cert, index) => (
            <div
              key={index}
              className="bg-white/5 hover:bg-[#B99AFF]/10 border border-white/10 hover:border-[#B99AFF]/40 p-3.5 rounded-2xl flex items-center gap-2.5 transition-all text-xs font-medium text-gray-200 hover:text-white"
            >
              <i className="fas fa-check-circle text-[#B99AFF] text-sm shrink-0"></i>
              <span className="truncate">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
