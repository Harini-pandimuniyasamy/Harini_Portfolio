import React from "react";

export const PreferredInterestsSection: React.FC = () => {
  const interests = [
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      badge: "Design & User Experience",
      icon: "fas fa-bezier-curve",
      accentColor: "from-[#B99AFF] to-[#9d72ff]",
      borderAccent: "hover:border-[#B99AFF]",
      glowColor: "rgba(185,154,255,0.25)",
      description:
        "Passionate about creating elegant, intuitive, and human-centric digital interfaces that seamlessly blend visual aesthetics with structured usability and high accessibility standards.",
      highlights: [
        "Figma Wireframing & Interactive Prototyping",
        "Design Systems & Component Reusability",
        "User Journey Mapping & Information Architecture",
        "Visual Hierarchy, Micro-Interactions & Responsive Layouts",
        "WCAG Contrast Compliance & Accessible UX",
      ],
      practicalApplication:
        "Applied in crafting the complete user interface for Citizen Connect, designing the rural-friendly UX for Direct Market Access for Farmers, and prototyping modern glassmorphic web apps.",
    },
    {
      id: "frontend-development",
      title: "Frontend Development",
      badge: "Client-Side Engineering",
      icon: "fas fa-code",
      accentColor: "from-[#34d399] to-[#059669]",
      borderAccent: "hover:border-[#34d399]",
      glowColor: "rgba(52,211,153,0.25)",
      description:
        "Dedicated to translating complex design concepts into responsive, high-performance, and pixel-perfect web interfaces with modern JavaScript, CSS architectures, and dynamic component states.",
      highlights: [
        "Modern JavaScript (ES6+) & TypeScript Logic",
        "Responsive Mobile-First CSS & Tailwind Design",
        "Dynamic State Management & Asynchronous Event Handling",
        "Cross-Browser Compatibility & Fluid Layouts",
        "Performance Optimization & Motion Transitions",
      ],
      practicalApplication:
        "Engineered the frontend for the Citizen Connect grievance dashboard, interactive search filters, real-time ticket progress trackers, and dynamic portfolio experiences.",
    },
    {
      id: "full-stack-development",
      title: "Full Stack Development",
      badge: "End-to-End Solutions",
      icon: "fas fa-layer-group",
      accentColor: "from-[#60a5fa] to-[#3b82f6]",
      borderAccent: "hover:border-[#60a5fa]",
      glowColor: "rgba(96,165,250,0.25)",
      description:
        "Enthusiastic about architecting end-to-end web applications—connecting responsive client-side interfaces with robust databases, backend logic, and scalable workflows.",
      highlights: [
        "Relational & NoSQL Databases (MySQL & MongoDB)",
        "RESTful API Integration & Asynchronous Client-Server Calls",
        "Secure Input Validation & Anti-Spam Defenses",
        "Data Modeling, Schema Design & Indexing",
        "End-to-End Application Lifecycle & Web Deployment",
      ],
      practicalApplication:
        "Developed full-stack database architectures for Citizen Connect (MongoDB) and Direct Market Access for Farmers (PHP & MySQL) with role-based administrative portals.",
    },
  ];

  return (
    <section
      id="preferred-interests"
      className="w-[95%] max-w-6xl mx-auto mt-24 md:mt-32 relative z-10 px-4 md:px-8"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B99AFF]/10 border border-[#B99AFF]/30 text-xs md:text-sm font-semibold tracking-wider text-[#d4bbff] mb-3 uppercase">
          <i className="fas fa-heart text-[#B99AFF]"></i>
          Core Specializations
        </div>
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider section-heading text-white">
          Preferred Interests
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-3">
          Key engineering and design domains where Harini brings deep enthusiasm, technical precision, and user-centric problem solving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {interests.map((item, idx) => (
          <div
            key={item.id}
            className={`glass-card p-7 md:p-8 rounded-3xl border border-white/10 ${item.borderAccent} transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl relative overflow-hidden`}
          >
            {/* Top Accent Line */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`}
            ></div>

            <div>
              {/* Header Badge & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-13 h-13 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-white group-hover:scale-110 transition-transform shadow-inner"
                  style={{
                    boxShadow: `0 0 20px ${item.glowColor}`,
                  }}
                >
                  <i className={item.icon}></i>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  #{idx + 1} Focus
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#d4bbff] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-semibold text-[#d4bbff] mb-4">
                {item.badge}
              </p>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Key Competencies Checklist */}
              <div className="space-y-2.5 mb-6">
                <p className="text-xs uppercase font-bold tracking-wider text-gray-400">
                  Key Competencies:
                </p>
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <i className="fas fa-check-circle text-[#B99AFF] text-xs mt-0.5 shrink-0"></i>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Application Footer */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-[11px] text-gray-400 leading-normal">
                <strong className="text-white">Practical Impact: </strong>
                {item.practicalApplication}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
