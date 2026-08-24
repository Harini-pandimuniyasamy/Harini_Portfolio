import React from "react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-8 border border-[#B99AFF]/40 shadow-2xl relative animate-scaleUp text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-[#B99AFF] hover:text-[#090711] flex items-center justify-center text-white transition-all z-10"
        >
          <i className="fas fa-times text-base"></i>
        </button>

        {/* Project Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="bg-[#B99AFF] text-[#090711] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              {project.badge}
            </span>
            <span className="text-xs text-[#d4bbff] font-medium">
              {project.category}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {project.name}
          </h2>
          <p className="text-[#d4bbff] text-sm md:text-base font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Project Image Banner */}
        <div className="w-full h-52 md:h-72 rounded-2xl overflow-hidden mb-6 border border-white/10 relative group">
          <img
            src={project.image}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090711] via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Content Breakdown */}
        <div className="space-y-6 text-sm text-gray-200">
          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl">
              <h4 className="text-xs uppercase tracking-wider font-bold text-red-300 mb-1.5 flex items-center gap-2">
                <i className="fas fa-exclamation-triangle"></i> Problem Addressed
              </h4>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl">
              <h4 className="text-xs uppercase tracking-wider font-bold text-emerald-300 mb-1.5 flex items-center gap-2">
                <i className="fas fa-lightbulb"></i> Solution Engineered
              </h4>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-3 flex items-center gap-2">
              <i className="fas fa-list-check text-[#B99AFF]"></i> Core Features & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-start gap-2.5"
                >
                  <i className="fas fa-check-circle text-[#B99AFF] text-xs mt-1 shrink-0"></i>
                  <span className="text-xs text-gray-300 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Role & Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
              <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-1 flex items-center gap-2">
                <i className="fas fa-user-gear text-[#B99AFF]"></i> Harini's Role
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">{project.role}</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
              <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-1 flex items-center gap-2">
                <i className="fas fa-chart-line text-[#B99AFF]"></i> Outcome & Impact
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-[#B99AFF]/15 text-[#d4bbff] text-xs font-semibold border border-[#B99AFF]/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-[#B99AFF] hover:text-[#090711] text-white px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 transition-all"
            >
              <i className="fab fa-github text-sm"></i>
              <span>View GitHub Repository</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#B99AFF] text-[#090711] font-bold text-xs hover:bg-[#d4bbff] transition-colors ml-auto"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
