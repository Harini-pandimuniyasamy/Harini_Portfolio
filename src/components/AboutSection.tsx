import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-[95%] max-w-6xl mx-auto mt-24 md:mt-32 relative z-10 px-4 md:px-8"
    >
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider section-heading text-white">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
        {/* My Journey Glass Panel */}
        <div className="glass-panel p-7 md:p-9 rounded-3xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#B99AFF]/15 flex items-center justify-center text-[#B99AFF] border border-[#B99AFF]/30">
                <i className="fas fa-compass text-lg"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#d4bbff]">My Journey</h3>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5 text-sm md:text-base">
              I am an enthusiastic and dedicated aspiring software developer with a strong academic foundation. My goal is to apply my programming skills and problem-solving abilities to develop innovative and impactful software solutions. I thrive in environments where I can continuously learn, adapt to new technologies, and contribute significantly to meaningful projects.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              With a background in computer applications (MCA at Holy Cross College, 9.33 CGPA) and a passion for coding, I am committed to producing high-quality work and collaborating effectively with teams to achieve shared goals.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-2">
              <i className="fas fa-code-branch text-[#B99AFF]"></i>
              Full-Stack Architecture
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-palette text-[#B99AFF]"></i>
              UI/UX Wireframing
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-database text-[#B99AFF]"></i>
              Database Systems
            </span>
          </div>
        </div>

        {/* Personal Profile Glass Card */}
        <div className="glass-card p-7 md:p-9 rounded-3xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
              <h3 className="text-xl font-bold text-[#d4bbff] flex items-center gap-2.5">
                <i className="fas fa-user-circle text-[#B99AFF]"></i>
                Personal Profile
              </h3>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {PERSONAL_INFO.availabilityStatus}
              </span>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#B99AFF]/10 flex items-center justify-center text-[#B99AFF] shrink-0 border border-[#B99AFF]/30 shadow-sm">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    Date of Birth
                  </p>
                  <p className="text-white font-medium text-base mt-0.5">
                    {PERSONAL_INFO.dob}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#B99AFF]/10 flex items-center justify-center text-[#B99AFF] shrink-0 border border-[#B99AFF]/30 shadow-sm">
                  <i className="fas fa-language"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    Languages
                  </p>
                  <p className="text-white font-medium text-base mt-0.5">
                    {PERSONAL_INFO.languages.join(", ")}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#B99AFF]/10 flex items-center justify-center text-[#B99AFF] shrink-0 border border-[#B99AFF]/30 shadow-sm">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    Location
                  </p>
                  <p className="text-white font-medium text-base mt-0.5">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#B99AFF]/10 flex items-center justify-center text-[#B99AFF] shrink-0 border border-[#B99AFF]/30 shadow-sm">
                  <i className="fas fa-envelope-open-text"></i>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    Direct Email
                  </p>
                  <p className="text-[#d4bbff] font-medium text-sm md:text-base mt-0.5 truncate">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
            <span>Holy Cross College (Autonomous)</span>
            <span className="text-[#B99AFF] font-semibold">Trichy, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </section>
  );
};
