import React, { useState } from "react";
import { PROJECTS_LIST } from "../data/portfolioData";
import { Project } from "../types";
import { ProjectModal } from "./ProjectModal";

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="w-[95%] max-w-6xl mx-auto mt-24 md:mt-32 relative z-10 px-4 md:px-8"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider section-heading text-white">
          Projects
        </h2>
        <p className="text-gray-400 text-sm max-w-lg mx-auto mt-2">
          Featured engineering and design projects addressing real-world community challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {PROJECTS_LIST.map((project) => (
          <div
            key={project.id}
            className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-[#B99AFF]/60 transition-all duration-500 shadow-xl"
          >
            {/* Image Container with Badge */}
            <div className="relative h-60 md:h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090711] via-[#090711]/40 to-transparent"></div>

              <div className="absolute top-4 left-4">
                <span className="bg-[#B99AFF] text-[#090711] font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {project.badge}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#d4bbff] transition-colors drop-shadow-md">
                  {project.name}
                </h3>
                <p className="text-xs text-[#d4bbff] font-medium mt-0.5 line-clamp-1">
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Description & Tags */}
            <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-gray-300 group-hover:border-[#B99AFF]/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-white/10 hover:bg-[#B99AFF] hover:text-[#090711] text-white px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 transition-all group-hover:shadow-[0_0_15px_rgba(185,154,255,0.4)]"
                >
                  <i className="fas fa-eye text-xs"></i>
                  <span>View Project Details</span>
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/15 transition-colors"
                    title="View GitHub Repository"
                  >
                    <i className="fab fa-github text-sm"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
