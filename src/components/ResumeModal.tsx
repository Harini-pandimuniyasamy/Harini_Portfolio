import React from "react";
import { PERSONAL_INFO, EDUCATION_LIST, PROJECTS_LIST, SKILLS_LIST, INTERNSHIPS_LIST, ACHIEVEMENTS_LIST, CERTIFICATIONS_LIST } from "../data/portfolioData";
import { downloadResumePdf } from "../utils/downloadResume";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    downloadResumePdf("Harini_P_Resume.pdf");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="glass-panel w-full max-w-4xl max-h-[94vh] flex flex-col rounded-3xl border border-[#B99AFF]/40 shadow-2xl overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="p-4 md:px-6 bg-[#090711]/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#B99AFF] flex items-center justify-center text-[#090711] font-bold text-xs">
              <i className="fas fa-file-alt"></i>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm md:text-base">
                Harini P — Curriculum Vitae (ATS-Optimized)
              </h3>
              <p className="text-[11px] text-gray-400">
                1-Page A4 Standard Format | Holy Cross College (MCA, 9.33 CGPA)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="modal-download-pdf-btn"
              onClick={handleDownload}
              className="bg-[#B99AFF] hover:bg-[#d4bbff] text-[#090711] px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
              title="Download 1-Page PDF Resume"
            >
              <i className="fas fa-download"></i>
              <span>Download PDF</span>
            </button>

            <button
              id="modal-print-btn"
              onClick={handlePrint}
              className="bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-white/15 transition-all cursor-pointer"
              title="Print Resume"
            >
              <i className="fas fa-print"></i>
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors ml-1"
              title="Close Modal"
            >
              <i className="fas fa-times text-xs"></i>
            </button>
          </div>
        </div>

        {/* Scrollable A4 Document Paper Sheet */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#120f20]/60 flex justify-center">
          <div 
            id="resume-a4-sheet"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
            className="w-full max-w-[820px] bg-white text-[#111827] p-8 sm:p-10 md:p-12 rounded-xl shadow-2xl border border-gray-200 text-left text-sm sm:text-[14.5px] leading-[1.5] selection:bg-purple-200"
          >
            {/* Header */}
            <div className="text-center pb-4 border-b-2 border-[#4B269C]">
              <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#4B269C] mb-1.5 leading-[1.3]">
                HARINI P
              </h1>
              <p className="font-semibold text-gray-800 text-sm sm:text-[15px] mb-2 leading-[1.5]">
                Full-Stack Web Developer & UI/UX Designer | MCA Candidate (CGPA: 9.33)
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-gray-700 leading-[1.5]">
                <span>
                  <i className="fas fa-envelope text-[#4B269C] mr-1"></i>
                  {PERSONAL_INFO.email}
                </span>
                <span>•</span>
                <span>
                  <i className="fas fa-phone text-[#4B269C] mr-1"></i>
                  +91 {PERSONAL_INFO.phone}
                </span>
                <span>•</span>
                <span>
                  <i className="fas fa-map-marker-alt text-[#4B269C] mr-1"></i>
                  {PERSONAL_INFO.location}
                </span>
                <span>•</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4B269C] underline font-medium"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4B269C] underline font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mt-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#4B269C] border-b border-gray-300 pb-1 mb-2 flex items-center gap-2 leading-[1.4]">
                <i className="fas fa-user text-xs"></i> Professional Summary
              </h2>
              <p className="text-gray-800 text-justify leading-[1.5]">
                High-achieving Master of Computer Applications (MCA) student at Holy Cross College (Autonomous), Trichy with an outstanding <strong>9.33 CGPA</strong>. Proficient in full-stack web development (JavaScript, Java, PHP, HTML5, CSS3, SQL), database management (MongoDB, MySQL), and user-centric UI/UX prototyping in Figma. Proven track record of architecting community-focused web platforms including <em>Citizen Connect</em> and <em>Direct Market Access for Farmers</em>. Seeking software engineering opportunities to build scalable, high-impact digital solutions.
              </p>
            </div>

            {/* Education */}
            <div className="mt-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#4B269C] border-b border-gray-300 pb-1 mb-2 flex items-center gap-2 leading-[1.4]">
                <i className="fas fa-graduation-cap text-xs"></i> Education
              </h2>
              <div className="space-y-2 leading-[1.5]">
                {EDUCATION_LIST.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-baseline">
                    <div className="leading-[1.5]">
                      <strong className="text-gray-900">{edu.degree}</strong> –{" "}
                      <span className="text-gray-800">{edu.institution}</span>
                    </div>
                    <div className="text-right shrink-0 ml-2 font-semibold text-[#4B269C] leading-[1.5]">
                      {edu.score} <span className="text-gray-600 font-normal">| {edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mt-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#4B269C] border-b border-gray-300 pb-1 mb-2 flex items-center gap-2 leading-[1.4]">
                <i className="fas fa-laptop-code text-xs"></i> Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-gray-800 leading-[1.5]">
                <p>
                  <strong>Languages:</strong> Java, JavaScript, C, C#, PHP, HTML5, CSS3, SQL
                </p>
                <p>
                  <strong>Domain Expertise:</strong> Full Stack Web Development, MVC Architecture
                </p>
                <p>
                  <strong>Databases:</strong> MongoDB, MySQL, Database Management
                </p>
                <p>
                  <strong>Design & Tools:</strong> Figma (UI/UX), Power BI, Visual Studio, VS Code, Tally
                </p>
              </div>
            </div>

            {/* Projects */}
            <div className="mt-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#4B269C] border-b border-gray-300 pb-1 mb-2 flex items-center gap-2 leading-[1.4]">
                <i className="fas fa-folder-open text-xs"></i> Key Projects
              </h2>
              <div className="space-y-3 leading-[1.5]">
                {PROJECTS_LIST.map((proj) => (
                  <div key={proj.id} className="text-gray-800 leading-[1.5]">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-gray-900 leading-[1.5]">
                        {proj.name} <span className="font-normal text-xs text-gray-600">({proj.technologies.slice(0, 5).join(", ")})</span>
                      </span>
                      <span className="text-xs font-semibold text-[#4B269C]">
                        {proj.badge}
                      </span>
                    </div>
                    <p className="mt-1 text-justify text-gray-700 leading-[1.5]">
                      • {proj.description}
                    </p>
                    <p className="mt-1 text-gray-700 leading-[1.5]">
                      • <strong>Key Highlights:</strong> {proj.features.slice(0, 3).join("; ")}.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internships */}
            <div className="mt-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#4B269C] border-b border-gray-300 pb-1 mb-2 flex items-center gap-2 leading-[1.4]">
                <i className="fas fa-briefcase text-xs"></i> Internships & Practical Experience
              </h2>
              <div className="space-y-1.5 leading-[1.5]">
                {INTERNSHIPS_LIST.map((exp, idx) => (
                  <div key={idx} className="flex justify-between items-baseline text-gray-800 leading-[1.5]">
                    <div>
                      <strong>{exp.company}</strong> – {exp.domain}
                    </div>
                    <div className="text-xs text-gray-600">Technical Internship</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Certifications */}
            <div className="mt-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#4B269C] border-b border-gray-300 pb-1 mb-2 flex items-center gap-2 leading-[1.4]">
                <i className="fas fa-award text-xs"></i> Achievements & Certifications
              </h2>
              <div className="text-gray-800 space-y-1.5 leading-[1.5]">
                <p>
                  • <strong>Paper Presentations:</strong> "AI-Based Image Recognition" (Computer Vision) & "Password Strength Analyzer" (Security Entropy).
                </p>
                <p>
                  • <strong>Academic Honors:</strong> 1st / 2nd Proficiency Prize in Computer Applications; 2nd Proficiency Prize in Tamil & English languages.
                </p>
                <p>
                  • <strong>Certifications:</strong> Accenture (89% score), Swayam / NPTEL, ICTACADEMY, NoviTech, Wadhwani Foundation, Tally ERP, Type Writing, Data Entry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 bg-[#090711] border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
          <span>Harini P • Trichy, Tamil Nadu</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 font-semibold"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
