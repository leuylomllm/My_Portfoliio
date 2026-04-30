import { useState } from "react";
import { motion } from "framer-motion";
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
    skills: ["Vue.js", "JavaScript", "Primeflex", "SCSS", "TypeScript", "CSS"],
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
    <section
      id="experience"
      style={{
        padding: "80px 48px",
        fontFamily: "'Inter',system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* Ambient background blobs */}
      <style>
        {`
          .ex-headline {
           font-family: Inter, system-ui, sans-serif;
            font-size: clamp(36px, 48px, 56px);
            font-weight: 900;
            color: #F8FAFC;
            letter-spacing: -0.02em;
            line-height: 1.05;
            margin: 0 0 16px;
            position: relative;
            z-index: 1;
          }
          .ex-headline .jon {
            background: linear-gradient(135deg, #22D3EE 0%, #6366F1 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .ex-sub {
          font-family: Inter, system-ui, sans-serif;
          font-size: 16px;
          color: #ffffff66;
          line-height: 1.8;
          max-width: 480px;
          margin: 0 0 56px;
          position: relative;
          z-index: 1;
        }  
          `}
      </style>

      <div
        style={{ maxWidth: 1140, margin: "0 auto" }}
        className="relative z-10 mx-auto max-w-4xl"
      >
        {/* Section label */}
        <div className="mb-6 flex items-center gap-4">
          <span
            className="text-xs  uppercase tracking-[0.2em]"
            style={{
              color: "#22d3ee",
              fontWeight: 500,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: 14,
            }}
          >
            04. Experience
          </span>
          <div
            className="h-px flex-1"
            style={{
              background: "linear-gradient(to right, #22d3ee33, transparent)",
            }}
          />
        </div>

        {/* Heading */}
        <motion.h2
          className="ex-headline"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          Career <span className="jon">Journey</span>
        </motion.h2>
        <motion.p
          className="ex-sub"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Focused on building innovative software solutions across product and
          enterprise environments.
        </motion.p>
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 h-full w-px"
            style={{
              background:
                "linear-gradient(to bottom, #22d3ee44, #a78bfa44, transparent)",
            }}
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
                          style={{
                            color: "#e5e7eb",
                            fontFamily: "'Inter', 'system-ui', sans-serif",
                          }}
                        >
                          {exp.title}
                        </h3>
                        <div className="mt-1 flex items-center gap-2">
                          <span
                            className="text-sm font-semibold"
                            style={{ color: exp.accent,  }}
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

                      <div
                        className="flex items-center gap-2 text-xs"
                        style={{ color: "#ffffff66", fontFamily:"JetBrains Mono, Fira Code, monospace", fontWeight:600
                           }}
                      >
                        <span>📅</span>
                        <span style={{ color: "#6b7280" }}>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className="mt-4 text-sm leading-relaxed"
                      style={{ color: "#ffffff66", }}
                    >
                      {exp.description}
                    </p>

                    {/* Expanded content */}
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: isActive ? "600px" : "0",
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <ul className="mt-4 space-y-2">
                        {exp.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm"
                            style={{ color: "#9ca3af" }}
                          >
                            <span
                              style={{
                                color: exp.accent,
                                marginTop: "2px",
                                flexShrink: 0,
                              }}
                            >
                              ▸
                            </span>
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
                             background:"#111827",
                            color: "#ffffff66",
                            border: "1px solid #2a2a40",
                            fontFamily:"'JetBrains Mono', Fira Code, monospace"
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
                        style={{ color: exp.accent + "88", fontFamily:"'JetBrains Mono', Fira Code, monospace" }}
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
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
