import React, { useState } from "react";
import { SKILLS_LIST } from "../data/portfolioData";
import { SkillItem } from "../types";
import { SkillDetailModal } from "./SkillDetailModal";

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [activeTab, setActiveTab] = useState<"All" | "Programming" | "Domain Expertise" | "Tools & Platforms">("All");

  const categories = ["All", "Programming", "Domain Expertise", "Tools & Platforms"] as const;

  const filteredSkills =
    activeTab === "All"
      ? SKILLS_LIST
      : SKILLS_LIST.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="skills"
      className="w-[95%] max-w-6xl mx-auto mt-24 md:mt-32 relative z-10 px-4 md:px-8"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider section-heading text-white">
          Skills & Expertise
        </h2>
        <p className="text-gray-400 text-sm max-w-lg mx-auto mt-2">
          Click any skill to see how and where Harini applies it in her projects.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
              activeTab === tab
                ? "bg-[#B99AFF] text-[#090711] shadow-[0_0_12px_rgba(185,154,255,0.6)]"
                : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 md:gap-4">
        {filteredSkills.map((skill) => (
          <button
            key={skill.name}
            onClick={() => setSelectedSkill(skill)}
            className="tech-badge p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2.5 group cursor-pointer border border-white/10 hover:border-[#B99AFF]/60 relative overflow-hidden"
          >
            <div className="w-11 h-11 rounded-xl bg-white/5 group-hover:bg-[#B99AFF]/20 flex items-center justify-center text-[#d4bbff] group-hover:text-white transition-all text-xl">
              <i className={skill.iconClass || "fas fa-code"}></i>
            </div>
            <span className="font-semibold text-xs md:text-sm text-gray-200 group-hover:text-white transition-colors">
              {skill.name}
            </span>
            <span className="text-[10px] text-gray-500 group-hover:text-[#d4bbff] transition-colors">
              {skill.category}
            </span>
          </button>
        ))}
      </div>

      {/* Skill Modal */}
      <SkillDetailModal
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
    </section>
  );
};
