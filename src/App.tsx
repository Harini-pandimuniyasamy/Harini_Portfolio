/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { BackgroundAura } from "./components/BackgroundAura";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { EducationSection } from "./components/EducationSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { PreferredInterestsSection } from "./components/PreferredInterestsSection";
import { DeployedPortfolioBanner } from "./components/DeployedPortfolioBanner";
import { ContactSection } from "./components/ContactSection";
import { ResumeModal } from "./components/ResumeModal";
import { ChatbotWidget } from "./components/ChatbotWidget";
import { BackToTop } from "./components/BackToTop";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  // Active section scroll spy
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "education",
      "skills",
      "preferred-interests",
      "experience",
      "achievements",
      "projects",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme toggle
  const handleToggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
      }
      return next;
    });
  };

  // Keyboard shortcut listener (Esc to close modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsResumeOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center relative ${isDarkMode ? "" : "light"}`}>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Dynamic Background Aura */}
      <BackgroundAura />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Sections */}
      <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <PreferredInterestsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ProjectsSection />
      <DeployedPortfolioBanner />
      <ContactSection />

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Floating Interactive Chatbot ("Ask Harini") */}
      <ChatbotWidget onOpenResume={() => setIsResumeOpen(true)} />

      {/* Back to Top Floating Button */}
      <BackToTop />

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
