import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import confetti from "canvas-confetti";

interface NavbarProps {
  activeSection: string;
  onOpenResume: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenResume,
  isDarkMode,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [easterEggMessage, setEasterEggMessage] = useState<string | null>(null);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Interests", href: "#preferred-interests", id: "preferred-interests" },
    { label: "Projects", href: "#projects", id: "projects" },
  ];

  const handleLogoClick = () => {
    const nextCount = logoClickCount + 1;
    setLogoClickCount(nextCount);

    if (nextCount >= 5) {
      setLogoClickCount(0);
      setEasterEggMessage("Thanks for exploring my portfolio ✨");
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.1, x: 0.1 },
          colors: ["#B99AFF", "#d4bbff", "#7C4DFF", "#ffffff"],
        });
      } catch (e) {
        // Non-critical
      }
      setTimeout(() => setEasterEggMessage(null), 3500);
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        id="main-navbar"
        className="w-[95%] max-w-6xl glass-nav rounded-full px-5 md:px-7 py-3.5 flex justify-between items-center sticky top-4 z-50 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
      >
        {/* Logo */}
        <div
          id="nav-logo"
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 cursor-pointer group select-none relative"
          title="Click to visit home or tap 5 times for a surprise!"
        >
          <div className="w-8 h-8 rounded-full bg-[#B99AFF] group-hover:scale-105 transition-transform flex items-center justify-center text-[#090711] font-bold text-xs shadow-[0_0_10px_rgba(185,154,255,0.6)]">
            {PERSONAL_INFO.initials}
          </div>
          <span className="font-bold text-base md:text-lg tracking-wider text-white group-hover:text-[#d4bbff] transition-colors">
            {PERSONAL_INFO.name}.
          </span>

          {easterEggMessage && (
            <div className="absolute top-11 left-0 whitespace-nowrap bg-[#7C4DFF] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-white/20 animate-bounce">
              {easterEggMessage}
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-300 font-medium uppercase text-xs tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`nav-link transition-colors ${
                activeSection === link.id ? "active text-[#d4bbff] font-semibold" : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label="Toggle dark/light mode"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#B99AFF]/50 hover:bg-[#B99AFF]/10 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? (
              <i className="fas fa-sun text-yellow-300 text-sm"></i>
            ) : (
              <i className="fas fa-moon text-[#B99AFF] text-sm"></i>
            )}
          </button>

          {/* Resume Button */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="bg-gradient-to-r from-[#B99AFF] to-[#d4bbff] text-[#090711] px-5 py-2 rounded-full font-semibold text-xs tracking-wide flex items-center gap-1.5 hover:shadow-[0_0_15px_rgba(185,154,255,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 btn-pulse"
          >
            <i className="fas fa-file-pdf text-xs"></i>
            <span>Resume</span>
            <i className="fas fa-arrow-down text-[10px] ml-0.5"></i>
          </button>

          {/* Contact Button */}
          <a
            id="nav-contact-btn"
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="border border-[#B99AFF]/40 hover:bg-[#B99AFF]/10 text-white px-4 py-2 rounded-full font-semibold text-xs tracking-wide transition-all duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggle Mobile */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 text-xs"
          >
            {isDarkMode ? (
              <i className="fas fa-sun text-yellow-300"></i>
            ) : (
              <i className="fas fa-moon text-[#B99AFF]"></i>
            )}
          </button>

          {/* Resume Mini Mobile */}
          <button
            onClick={onOpenResume}
            className="bg-[#B99AFF] text-[#090711] px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1"
          >
            <i className="fas fa-file-pdf text-[10px]"></i> CV
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white text-base focus:outline-none"
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="fixed inset-x-4 top-20 z-50 glass-panel rounded-3xl p-6 md:hidden shadow-2xl border border-[#B99AFF]/30 animate-fadeIn"
        >
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-2 text-sm font-medium tracking-wider uppercase transition-colors ${
                  activeSection === link.id ? "text-[#B99AFF] font-bold" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full bg-gradient-to-r from-[#B99AFF] to-[#d4bbff] text-[#090711] py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <i className="fas fa-file-pdf"></i> View & Download Resume (A4)
              </button>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full border border-[#B99AFF]/40 text-white py-2.5 rounded-full font-semibold text-sm hover:bg-[#B99AFF]/10 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
