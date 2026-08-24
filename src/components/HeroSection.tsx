import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  // Typing animation for roles
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const fullText = PERSONAL_INFO.typingRoles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullText.length) {
          setTypingSpeed(1800); // Pause before deleting
          setIsDeleting(true);
        } else {
          setTypingSpeed(90);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.typingRoles.length);
          setTypingSpeed(300); // Pause before typing next
        } else {
          setTypingSpeed(45);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  return (
    <main
      id="home"
      className="w-[95%] max-w-6xl mx-auto mt-8 md:mt-16 flex flex-col justify-center relative z-10 px-4 md:px-8 lg:px-12"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 min-h-[65vh]">
        {/* Hero Content (Left Side) */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Intro Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-semibold tracking-[0.2em] text-[#d4bbff] mb-4 uppercase backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#B99AFF] animate-ping"></span>
            HELLO, I'M HARINI P
          </div>

          {/* Main Heading with Seedling Icons */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 flex items-center justify-center lg:justify-start gap-3 md:gap-4 flex-wrap">
            <i className="fas fa-seedling text-[#B99AFF] text-3xl md:text-5xl animate-pulse-slow"></i>
            <span>Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4bbff] to-[#B99AFF]">
              HARINI P
            </span>
            <i
              className="fas fa-seedling text-[#B99AFF] text-3xl md:text-5xl animate-pulse-slow"
              style={{ transform: "scaleX(-1)" }}
            ></i>
          </h1>

          {/* Subheading with Typing Effect */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#d4bbff] mb-5 flex items-center justify-center lg:justify-start gap-2 min-h-[40px]">
            <span>I'm a</span>
            <span className="text-white font-bold tracking-wide">
              {currentText || "Developer"}
            </span>
            <span className="w-0.5 h-7 bg-[#B99AFF] inline-block animate-pulse"></span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mb-7">
            Driven MCA student with a{" "}
            <span className="text-white font-semibold underline decoration-[#B99AFF]">
              9.33 CGPA
            </span>
            . Passionate about leveraging technology to solve real-world problems. Creator of the impactful{" "}
            <span className="text-[#d4bbff] font-medium">"Citizen Connect"</span> and{" "}
            <span className="text-[#d4bbff] font-medium">"Direct Market Access for Farmers"</span> platforms. Dedicated to crafting clean, efficient, and user-centric applications.
          </p>

          {/* Floating Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-9">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-gray-300 backdrop-blur-sm flex items-center shadow-sm">
              <i className="fas fa-graduation-cap mr-2 text-[#d4bbff]"></i>
              MCA Student (Holy Cross)
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-gray-300 backdrop-blur-sm flex items-center shadow-sm">
              <i className="fas fa-star mr-2 text-yellow-400"></i>
              CGPA 9.33
            </span>
            <span className="px-4 py-1.5 rounded-full bg-[#B99AFF]/10 border border-[#B99AFF]/30 text-xs md:text-sm font-medium text-[#d4bbff] backdrop-blur-sm flex items-center">
              <i className="fas fa-check-circle mr-2 text-emerald-400"></i>
              Available for Hire
            </span>
          </div>

          {/* Action Buttons & Socials */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            {/* Download / View Resume Button */}
            <button
              id="hero-resume-btn"
              onClick={onOpenResume}
              className="bg-gradient-to-r from-[#B99AFF] to-[#d4bbff] text-[#090711] px-6 py-3.5 rounded-full font-bold text-sm flex items-center gap-2.5 hover:shadow-[0_0_25px_rgba(185,154,255,0.7)] transition-all duration-300 group btn-pulse transform hover:-translate-y-0.5"
            >
              <i className="fas fa-file-pdf group-hover:scale-110 transition-transform"></i>
              <span>Download Resume</span>
              <i className="fas fa-arrow-down text-xs group-hover:translate-y-0.5 transition-transform"></i>
            </button>

            {/* Deployed Portfolio Live Button */}
            <a
              id="hero-deployed-link"
              href="#deployed-portfolio-section"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("deployed-portfolio-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              title="View Deployed Portfolio Details & Link"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <i className="fas fa-globe text-[#d4bbff]"></i>
              <span>Live Deployed Link</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-3 text-lg">
              <a
                id="hero-github-link"
                target="_blank"
                rel="noopener noreferrer"
                href={PERSONAL_INFO.github}
                aria-label="Harini P GitHub Profile"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#B99AFF] hover:border-[#B99AFF] hover:text-[#090711] transition-all duration-300 shadow-sm"
                title="View GitHub Repositories"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                id="hero-linkedin-link"
                target="_blank"
                rel="noopener noreferrer"
                href={PERSONAL_INFO.linkedin}
                aria-label="Harini P LinkedIn Profile"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 shadow-sm"
                title="Connect on LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                id="hero-email-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email Harini P"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#7C4DFF] hover:border-[#7C4DFF] transition-all duration-300 shadow-sm"
                title="Send an Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image (Right Side - 3D Crystal Profile Frame) */}
        <div className="flex-1 w-full max-w-sm md:max-w-md lg:max-w-lg flex justify-center relative">
          <div className="profile-container p-2 h-[380px] md:h-[480px]">
            <div className="crystal-container overflow-hidden group shadow-2xl relative">
              <img
                src={PERSONAL_INFO.profileImage}
                alt="Professional portrait of Harini P"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter brightness-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090711] via-transparent to-transparent opacity-50 pointer-events-none"></div>

              {/* Subtle Floating Corner Accent */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#090711]/80 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-semibold text-white tracking-wide">
                    Harini P
                  </span>
                </div>
                <span className="text-[11px] text-[#d4bbff] font-medium bg-[#B99AFF]/15 px-2.5 py-0.5 rounded-full">
                  MCA (9.33 CGPA)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
