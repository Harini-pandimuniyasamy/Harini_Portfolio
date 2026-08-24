import React from "react";
import { SkillItem } from "../types";

interface SkillDetailModalProps {
  skill: SkillItem | null;
  onClose: () => void;
}

export const SkillDetailModal: React.FC<SkillDetailModalProps> = ({
  skill,
  onClose,
}) => {
  if (!skill) return null;

  return (
    <div
      id="skill-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="glass-panel w-full max-w-md rounded-3xl p-6 md:p-8 border border-[#B99AFF]/40 shadow-2xl relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close skill details"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
        >
          <i className="fas fa-times text-sm"></i>
        </button>

        {/* Skill Header */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-[#B99AFF]/15 border border-[#B99AFF]/30 flex items-center justify-center text-[#B99AFF] text-2xl shadow-sm">
            <i className={skill.iconClass || "fas fa-code"}></i>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#d4bbff] bg-[#B99AFF]/15 px-2.5 py-0.5 rounded-full">
              {skill.category}
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">{skill.name}</h3>
          </div>
        </div>

        {/* Usage description */}
        <div className="space-y-4 text-sm text-gray-300">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1">
              How Harini Uses This:
            </h4>
            <p className="bg-white/5 p-3.5 rounded-xl border border-white/10 leading-relaxed text-white">
              {skill.usage}
            </p>
          </div>

          {skill.projectRelation && (
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1">
                Associated Work / Project:
              </h4>
              <div className="flex items-center gap-2 text-[#d4bbff] font-medium bg-[#B99AFF]/10 p-3 rounded-xl border border-[#B99AFF]/20">
                <i className="fas fa-project-diagram text-xs"></i>
                <span>{skill.projectRelation}</span>
              </div>
            </div>
          )}
        </div>

        {/* Action button */}
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#B99AFF] text-[#090711] font-semibold text-xs hover:bg-[#d4bbff] transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
