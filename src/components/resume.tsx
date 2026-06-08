import React from "react";

// ─── Data ───────────────────────────────────────────────
const CV_DATA = {
  name: { first: "Leuy", last: "Lom" },
  role: "Web Developer",
  subtitle: "Web Developer · Frontend Engineer · Vue.js & React Specialist",
  tags: ["Open to opportunities", "2+ yrs experience", "Siem Reap, Cambodia"],

  contact: {
    phone: "097 58 94 543",
    email: "leuylom022@gmail.com",
    address: "Viheachin, Svay Dangkum, Krong Siem Reap, Siem Reap, Cambodia",
  },

  techStack: [
    "HTML", "CSS", "JavaScript", "TypeScript",
    "Vue.js", "React.js", "Node.js", "Laravel",
    "Tailwind CSS", "MySQL", "Photoshop", "Canva", "MS Office",
  ],

  softSkills: ["Creativity", "Negotiation", "Critical Thinking", "Teamwork", "Communication"],

  languages: [
    { name: "Khmer", level: "Native", dots: 5 },
    { name: "English", level: "Intermediate", dots: 3 },
  ],

  profile:
    "Passionate and motivated Web Developer with experience building responsive and user-friendly web applications. Strong background in modern frontend technologies and backend integration. Dedicated to writing clean, maintainable code and continuously improving skills.",

  experience: [
    {
      role: "Web Developer",
      company: "IT Khmer Company",
      period: "2024 – 2026",
      bullets: [
        "Promoted from a 3-month internship to full-time Web Developer based on strong performance.",
        "Developed responsive and user-friendly web interfaces using Tailwind CSS, SCSS, PrimeVue, PrimeFlex, JavaScript, TypeScript, and Vue.js.",
        "Designed and integrated RESTful APIs using Node.js, Fastify, and MySQL.",
        "Optimized system performance, improving scalability and maintainability.",
        "Collaborated with cross-functional teams to deliver high-quality web applications on time.",
      ],
    },
  ],

  education: [
    { degree: "Bachelor of Information Technology", school: "Build Bright University — Siem Reap, Cambodia", year: "2022 – 2025" },
    { degree: "Diploma in General Education", school: "Techo Sen Samrong High School — Oddor Meanchey", year: "2018 – 2021" },
    { degree: "Secondary School Education", school: "Samrong Secondary School — Oddor Meanchey", year: "2015 – 2018" },
    { degree: "Primary School Education", school: "Donken Phneat Primary School — Oddor Meanchey", year: "2009 – 2015" },
  ],
};

// ─── Sub-components ──────────────────────────────────────
const SideLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#555", marginBottom: 10, fontWeight: 600 }}>
    {children}
  </p>
);

const Divider = () => <div style={{ height: 0.5, background: "#222" }} />;

const LangDots: React.FC<{ filled: number; total?: number }> = ({ filled, total = 5 }) => (
  <div style={{ display: "flex", gap: 3, marginTop: 3 }}>
    {Array.from({ length: total }).map((_, i) => (
      <div
        key={i}
        style={{
          width: 5, height: 5, borderRadius: "50%",
          background: i < filled ? "#e0deda" : "#252526",
          border: i < filled ? "none" : "0.5px solid #333",
        }}
      />
    ))}
  </div>
);

// ─── Sidebar ─────────────────────────────────────────────
const Sidebar: React.FC = () => {
  const { name, role, contact, techStack, softSkills, languages } = CV_DATA;

  return (
    <aside
      style={{
        background: "#0f0f10", color: "#e8e6e0",
        padding: "28px 20px", display: "flex", flexDirection: "column", gap: 20,
        minHeight: "100%",
      }}
    >
      {/* Avatar + Name */}
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: 68, height: 68, borderRadius: "50%", background: "#1e1e20",
            border: "1.5px solid #333", display: "flex", alignItems: "center",
            justifyContent: "center", margin: "0 auto 10px",
            fontSize: 18, fontWeight: 700, color: "#e8e6e0", letterSpacing: -1,
          }}
        >
          {name.first[0]}{name.last[0]}
        </div>
        <p style={{ fontSize: 14, fontWeight: 700, color: "#f0ede6" }}>{name.first} {name.last}</p>
        <p style={{ fontSize: 9, color: "#555", marginTop: 3, letterSpacing: "0.1em", textTransform: "uppercase" }}>{role}</p>
      </div>

      <Divider />

      {/* Contact */}
      <div>
        <SideLabel>Contact</SideLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { label: "Phone", value: contact.phone },
            { label: "Email", value: contact.email },
            { label: "Address", value: contact.address },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <span style={{ fontSize: 8, color: "#555", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</span>
              <span style={{ fontSize: 10, color: "#c0beb8", lineHeight: 1.4, wordBreak: "break-word" }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Tech Stack */}
      <div>
        <SideLabel>Tech Stack</SideLabel>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {techStack.map((t) => (
            <span key={t} style={{ fontSize: 8.5, padding: "2px 6px", borderRadius: 3, background: "#1a1a1c", border: "0.5px solid #2e2e30", color: "#999" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Soft Skills */}
      <div>
        <SideLabel>Soft Skills</SideLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {softSkills.map((s) => (
            <span key={s} style={{ fontSize: 10, color: "#a0a09a", paddingLeft: 10, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#555" }}>·</span>
              {s}
            </span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Languages */}
      <div>
        <SideLabel>Languages</SideLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {languages.map((lang) => (
            <div key={lang.name} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontSize: 11, color: "#c0beb8" }}>{lang.name}</span>
              <span style={{ fontSize: 8.5, color: "#555" }}>{lang.level}</span>
              <LangDots filled={lang.dots} />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

// ─── Main Panel ───────────────────────────────────────────
const SectionHeader: React.FC<{ label: string }> = ({ label }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
    <span style={{ fontSize: 8.5, letterSpacing: "0.15em", textTransform: "uppercase", color: "#bbb", whiteSpace: "nowrap", fontWeight: 600 }}>
      {label}
    </span>
    <div style={{ flex: 1, height: 0.5, background: "#eee" }} />
  </div>
);

const MainPanel: React.FC = () => {
  const { name, subtitle, tags, profile, experience, education } = CV_DATA;

  return (
    <main style={{ background: "#fff", padding: "28px 28px 28px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ paddingBottom: 16, borderBottom: "0.5px solid #e5e5e5" }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: "#111", letterSpacing: "-0.04em", lineHeight: 1.05 }}>
          {name.first} <span style={{ fontWeight: 300, color: "#bbb" }}>/</span> {name.last}
        </h1>
        <p style={{ fontSize: 11, color: "#888", marginTop: 5 }}>{subtitle}</p>
        <div style={{ display: "flex", gap: 5, marginTop: 10, flexWrap: "wrap" }}>
          {tags.map((tag) => (
            <span key={tag} style={{ fontSize: 9, padding: "2px 9px", borderRadius: 100, border: "0.5px solid #ddd", color: "#888" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Profile */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <SectionHeader label="Profile" />
        <p style={{ fontSize: 11.5, lineHeight: 1.75, color: "#555" }}>{profile}</p>
      </div>

      {/* Experience */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <SectionHeader label="Work Experience" />
        {experience.map((exp) => (
          <div key={exp.role} style={{ display: "flex", gap: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 3 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#111", flexShrink: 0 }} />
              <div style={{ width: 1, flex: 1, background: "#eee", marginTop: 5 }} />
            </div>
            <div style={{ flex: 1, paddingBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 2 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>{exp.role}</span>
                <span style={{ fontSize: 9, color: "#bbb", whiteSpace: "nowrap" }}>{exp.period}</span>
              </div>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 6 }}>{exp.company}</div>
              {exp.bullets.map((b, i) => (
                <div key={i} style={{ fontSize: 10.5, color: "#666", lineHeight: 1.6, paddingLeft: 10, position: "relative", marginBottom: 3 }}>
                  <span style={{ position: "absolute", left: 0, color: "#ccc" }}>–</span>
                  {b}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <SectionHeader label="Education" />
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {education.map((edu) => (
            <div
              key={edu.degree}
              style={{
                display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                padding: "9px 12px", border: "0.5px solid #eee", borderRadius: 6, background: "#fafafa",
              }}
            >
              <div>
                <div style={{ fontSize: 11.5, fontWeight: 600, color: "#111" }}>{edu.degree}</div>
                <div style={{ fontSize: 10, color: "#888", marginTop: 2 }}>{edu.school}</div>
              </div>
              <div style={{ fontSize: 9, color: "#bbb", whiteSpace: "nowrap", marginTop: 2, textAlign: "right" }}>{edu.year}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

// ─── Root ─────────────────────────────────────────────────
const CVPage: React.FC = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "220px 1fr",
      minHeight: "100vh",
      fontFamily: "'DM Sans', Arial, sans-serif",
      border: "0.5px solid #e5e5e5",
      borderRadius: 12,
      overflow: "hidden",
    }}
  >
    <Sidebar />
    <MainPanel />
  </div>
);

export default CVPage;