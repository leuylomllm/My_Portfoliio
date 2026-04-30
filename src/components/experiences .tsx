import { useState } from "react";

const experiences = [
  {
    id: 1,
    title: "Web Developer Intern",
    company: "IT Khmer Company",
    type: "Internship",
    period: "2024 (2 months)",
    description:
      "Started as a Web Developer Intern, focusing on frontend development and learning modern web technologies in a real project environment.",
    bullets: [
      "Built responsive UI components using Tailwind CSS and SCSS",
      "Learned Vue.js, JavaScript, and TypeScript in production projects",
      "Collaborated with senior developers on small features and bug fixes",
    ],
    skills: ["Vue.js", "JavaScript", "Primeflex", "SCSS", "TypeScript","CSS"],
    icon: "🎓",
    accent: "#38bdf8",
  },
  {
    id: 2,
    title: "Web Developer",
    company: "IT Khmer Company",
    type: "Full-time",
    period: "2024 – 2026",
    description:
      "Promoted to Full-Time Web Developer due to strong performance and contribution during internship.",
    bullets: [
      "Developed responsive and user-friendly web interfaces using Vue.js, TypeScript, Tailwind CSS, SCSS, PrimeVue, and PrimeFlex",
      "Built and integrated RESTful APIs using Node.js, Fastify, and MySQL",
      "Improved system performance, scalability, and maintainability",
      "Worked closely with team members to deliver production-ready applications",
    ],
    skills: [
      "Vue.js",
    
      "TypeScript",
      "Node.js",
      "Fastify",
      "MySQL",
      "PrimeVue",
    "Tailwind CSS",
    ],
    icon: "💼",
    accent: "#22d3ee",
  },
];

export default function Experience() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section id="projects"
       style={{
        background: "#0A0A0F",
        padding: "100px 24px",
       fontFamily: "'DM Mono', 'Fira Code', monospace",
      }}
    >
      {/* Ambient background blobs */}
      

      <div style={{ maxWidth: 1080, margin: "0 auto" }} className="relative z-10 mx-auto max-w-4xl">
        {/* Section label */}
        <div className="mb-6 flex items-center gap-4">
          <span
            className="text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: "#22d3ee" }}
          >
            04. Experience
          </span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, #22d3ee33, transparent)" }} />
        </div>

        {/* Heading */}
        <h2
          className="mb-4 text-5xl font-black leading-none md:text-6xl"
          style={{ fontFamily: "'Syne', 'DM Mono', monospace", color: "#f0f0f0" }}
        >
          Career{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #22d3ee, #a78bfa, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Journey
          </span>
        </h2>

        <p className="mb-16 max-w-lg text-sm leading-relaxed" style={{ color: "#6b7280" }}>
         Focused on building innovative software solutions across product and enterprise environments.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 h-full w-px"
            style={{ background: "linear-gradient(to bottom, #22d3ee44, #a78bfa44, transparent)" }}
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isActive = activeId === exp.id;

              return (
                <div
                  key={exp.id}
                  className="relative pl-14"
                  style={{
                    animation: `fadeSlideIn ${0.3 + index * 0.15}s ease-out both`,
                  }}
                >
                  {/* Timeline dot */}
                  <button
                    onClick={() => setActiveId(isActive ? null : exp.id)}
                    className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-all duration-300 hover:scale-110"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${exp.accent}33, ${exp.accent}11)`
                        : "#12121f",
                      borderColor: isActive ? exp.accent : "#2a2a3f",
                      boxShadow: isActive ? `0 0 20px ${exp.accent}55` : "none",
                    }}
                  >
                    {exp.icon}
                  </button>

                  {/* Card */}
                  <div
                    className="cursor-pointer rounded-2xl border p-6 transition-all duration-300"
                    onClick={() => setActiveId(isActive ? null : exp.id)}
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, #151525, #101020)"
                        : "#0f0f1a",
                      borderColor: isActive ? exp.accent + "66" : "#1e1e30",
                      boxShadow: isActive
                        ? `0 8px 40px ${exp.accent}22, inset 0 1px 0 ${exp.accent}22`
                        : "0 2px 20px rgba(0,0,0,0.3)",
                    }}
                  >
                    {/* Card header */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3
                          className="text-lg font-bold"
                          style={{ color: "#e5e7eb", fontFamily: "'Syne', sans-serif" }}
                        >
                          {exp.title}
                        </h3>
                        <div className="mt-1 flex items-center gap-2">
                          <span
                            className="text-sm font-semibold"
                            style={{ color: exp.accent }}
                          >
                            {exp.company}
                          </span>
                          <span
                            className="rounded px-2 py-0.5 text-xs"
                            style={{
                              background: exp.accent + "18",
                              color: exp.accent,
                              border: `1px solid ${exp.accent}33`,
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs" style={{ color: "#4b5563" }}>
                        <span>📅</span>
                        <span style={{ color: "#6b7280" }}>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                      {exp.description}
                    </p>

                    {/* Expanded content */}
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{ maxHeight: isActive ? "600px" : "0", opacity: isActive ? 1 : 0 }}
                    >
                      <ul className="mt-4 space-y-2">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#9ca3af" }}>
                            <span style={{ color: exp.accent, marginTop: "2px", flexShrink: 0 }}>▸</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md px-3 py-1 text-xs font-medium"
                          style={{
                            background: "#1a1a2e",
                            color: "#6b7280",
                            border: "1px solid #2a2a40",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Expand hint */}
                    <div className="mt-4 flex justify-end">
                      <span
                        className="text-xs transition-all duration-300"
                        style={{ color: exp.accent + "88" }}
                      >
                        {isActive ? "▲ Collapse" : "▼ Show details"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Syne:wght@700;800;900&display=swap');

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}