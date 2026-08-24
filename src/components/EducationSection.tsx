import React from "react";
import { EDUCATION_LIST } from "../data/portfolioData";

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="w-[95%] max-w-6xl mx-auto mt-24 md:mt-32 relative z-10 px-4 md:px-8"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider section-heading text-white">
          Education
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto py-4">
        {/* Center Line for Desktop */}
        <div className="hidden md:block timeline-line"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {/* MCA */}
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
            <div className="hidden md:block timeline-dot" style={{ top: "50%" }}></div>
            <div className="md:w-[45%] text-left md:text-right mb-4 md:mb-0">
              <span className="inline-block px-3 py-1 bg-[#B99AFF]/20 border border-[#B99AFF]/30 rounded-full text-xs font-semibold text-[#d4bbff] mb-2 uppercase">
                Postgraduate
              </span>
              <h3 className="text-xl font-bold text-white">
                Master of Computer Applications (MCA)
              </h3>
              <p className="text-[#d4bbff] font-medium text-sm mt-0.5">
                Holy Cross College (Autonomous), Trichy
              </p>
              <p className="text-xs text-gray-400 mt-1 flex items-center md:justify-end gap-1.5">
                <i className="far fa-clock"></i> 2025 - 2027
              </p>
            </div>
            <div className="md:w-[45%] w-full">
              <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#B99AFF]/10 rounded-bl-full -z-10 transition-transform group-hover:scale-150"></div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-yellow-400/10 flex items-center justify-center text-yellow-400 border border-yellow-400/30">
                    <i className="fas fa-star text-sm"></i>
                  </div>
                  <span className="text-xl font-bold text-white">9.33 CGPA</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Achieved outstanding academic performance with a 9.33 CGPA while developing full-stack platforms including "Citizen Connect" and "Direct Market Access for Farmers".
                </p>
              </div>
            </div>
          </div>

          {/* BCA */}
          <div className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full">
            <div className="hidden md:block timeline-dot" style={{ top: "50%" }}></div>
            <div className="md:w-[45%] text-left mb-4 md:mb-0">
              <span className="inline-block px-3 py-1 bg-[#B99AFF]/20 border border-[#B99AFF]/30 rounded-full text-xs font-semibold text-[#d4bbff] mb-2 uppercase">
                Undergraduate
              </span>
              <h3 className="text-xl font-bold text-white">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-[#d4bbff] font-medium text-sm mt-0.5">
                Holy Cross College (Autonomous), Trichy
              </p>
              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1.5">
                <i className="far fa-clock"></i> 2022 - 2025
              </p>
            </div>
            <div className="md:w-[45%] w-full text-left md:text-right">
              <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-20 h-20 bg-[#B99AFF]/10 rounded-br-full -z-10 transition-transform group-hover:scale-150"></div>
                <div className="flex items-center justify-start md:justify-end gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-yellow-400/10 flex items-center justify-center text-yellow-400 border border-yellow-400/30">
                    <i className="fas fa-star text-sm"></i>
                  </div>
                  <span className="text-xl font-bold text-white">8.81 CGPA</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Built a solid foundation in programming paradigms, relational database design, data structures, algorithms, and software engineering.
                </p>
              </div>
            </div>
          </div>

          {/* HSC */}
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
            <div className="hidden md:block timeline-dot" style={{ top: "50%" }}></div>
            <div className="md:w-[45%] text-left md:text-right mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white">
                Higher Secondary Certificate (HSC)
              </h3>
              <p className="text-[#d4bbff] font-medium text-sm mt-0.5">
                St. Antony’s Higher Secondary School, Trichy
              </p>
              <p className="text-xs text-gray-400 mt-1 flex items-center md:justify-end gap-1.5">
                <i className="far fa-clock"></i> 2021 - 2022
              </p>
            </div>
            <div className="md:w-[45%] w-full">
              <div className="glass-card p-6 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow-400/10 flex items-center justify-center text-yellow-400 border border-yellow-400/30">
                      <i className="fas fa-award text-sm"></i>
                    </div>
                    <span className="text-xl font-bold text-white">93%</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Graduated with high academic distinction</p>
                </div>
              </div>
            </div>
          </div>

          {/* SSLC */}
          <div className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full">
            <div className="hidden md:block timeline-dot" style={{ top: "50%" }}></div>
            <div className="md:w-[45%] text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white">
                Secondary School Leaving Certificate (SSLC)
              </h3>
              <p className="text-[#d4bbff] font-medium text-sm mt-0.5">
                St. Antony’s Higher Secondary School, Trichy
              </p>
              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1.5">
                <i className="far fa-clock"></i> 2019 - 2020
              </p>
            </div>
            <div className="md:w-[45%] w-full text-left md:text-right">
              <div className="glass-card p-6 rounded-2xl flex items-center justify-start md:justify-end">
                <div>
                  <div className="flex items-center justify-start md:justify-end gap-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow-400/10 flex items-center justify-center text-yellow-400 border border-yellow-400/30">
                      <i className="fas fa-award text-sm"></i>
                    </div>
                    <span className="text-xl font-bold text-white">88%</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Completed secondary education with top honors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
