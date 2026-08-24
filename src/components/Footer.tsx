import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="w-full border-t border-white/10 mt-20 py-10 relative z-10 bg-[#1c182d]/85 backdrop-blur-md"
    >
      <div className="w-[95%] max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#B99AFF] flex items-center justify-center text-[#141122] font-bold text-xs">
            {PERSONAL_INFO.initials}
          </div>
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide">
              {PERSONAL_INFO.name}
            </h4>
            <p className="text-xs text-gray-400">
              Full-Stack Developer & UI/UX Designer
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-gray-400">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#education" className="hover:text-white transition-colors">
            Education
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#preferred-interests" className="hover:text-white transition-colors">
            Interests
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#deployed-portfolio-section" className="text-[#d4bbff] hover:text-white font-medium transition-colors flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Deployed Link
          </a>
          <button
            onClick={onOpenResume}
            className="hover:text-[#d4bbff] font-semibold transition-colors"
          >
            Resume (PDF)
          </button>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 text-center md:text-right">
          <p>© {currentYear} Harini P. All rights reserved.</p>
          <p className="text-[11px] text-gray-600 mt-0.5">
            Holy Cross College (Autonomous), Trichy
          </p>
        </div>
      </div>
    </footer>
  );
};
