import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact, FaVuejs, FaNodeJs, FaHtml5, FaCss3Alt, FaJs,
  FaRegFileImage,
} from "react-icons/fa";
import {
  SiExpress, SiLaravel, SiVite, SiBootstrap, SiGit,
  SiTailwindcss, SiPrimevue, SiMysql, SiTypescript, SiPostman,
  SiCanva,
  SiAdobephotoshop,
  SiCapacitor,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Cloud } from "lucide-react";
import {
  PiMicrosoftWordLogoFill,
  PiMicrosoftExcelLogoFill,
  PiMicrosoftPowerpointLogoFill,
} from "react-icons/pi";

// ─── Constants ────────────────────────────────────────────────────────────────

const LEVEL_CONFIG = {
  Beginner:     { pct: "30%", color: "#A78BFA" },
  Intermediate: { pct: "62%", color: "#38BDF8" },
  Advanced:     { pct: "90%", color: "#34D399" },
};

const CAT_COLOR = {
  Frontend: "#38BDF8",
  Backend:  "#34D399",
  Tools:    "#FB923C",
  Office:   "#FACC15",
};

const IT_FILTERS = ["All", "Frontend", "Backend", "Tools", "Office"];

// ─── Data ─────────────────────────────────────────────────────────────────────

const allSkills = [
  // Frontend
  { name: "React",       icon: <FaReact />,       color: "#38BDF8", category: "Frontend",  level: "Intermediate" },
  { name: "Vue.js",      icon: <FaVuejs />,        color: "#4ADE80", category: "Frontend",  level: "Intermediate" },
  // { name: "Vite",        icon: <SiVite />,         color: "#A78BFA", category: "Frontend",  level: "Intermediate" },
  { name: "Tailwind",    icon: <SiTailwindcss />,  color: "#22D3EE", category: "Frontend",  level: "Intermediate" },
  { name: "Bootstrap",   icon: <SiBootstrap />,    color: "#818CF8", category: "Frontend",  level: "Intermediate" },
  { name: "PrimeVue",    icon: <SiPrimevue />,     color: "#4ADE80", category: "Frontend",  level: "Intermediate" },
  { name: "PrimeFlex",   icon: <SiPrimevue />,     color: "#D1D5DB", category: "Frontend",  level: "Intermediate" },
  { name: "HTML5",       icon: <FaHtml5 />,        color: "#F97316", category: "Frontend",  level: "Intermediate" },
  { name: "CSS3",        icon: <FaCss3Alt />,      color: "#60A5FA", category: "Frontend",  level: "Intermediate" },
  { name: "JavaScript",  icon: <FaJs />,           color: "#FACC15", category: "Frontend",  level: "Intermediate" },
  { name: "TypeScript",  icon: <SiTypescript />,   color: "#60A5FA", category: "Frontend",  level: "Intermediate" },
  // Backend
  { name: "Node.js",     icon: <FaNodeJs />,       color: "#22C55E", category: "Backend",   level: "Beginner" },
  { name: "Express.js",  icon: <SiExpress />,      color: "#D1D5DB", category: "Backend",   level: "Beginner" },
  { name: "Laravel",     icon: <SiLaravel />,      color: "#F87171", category: "Backend",   level: "Intermediate" },
  { name: "MySQL",       icon: <SiMysql />,        color: "#3B82F6", category: "Backend",   level: "Beginner" },
  // Tools
  { name: "Adobe Photoshop",      icon: <SiAdobephotoshop size={16} />,          color: "#FB923C", category: "Tools",     level: "Intermediate" },
   { name: "Canva",     icon: <SiCanva />,      color: "#818CF8", category: "Tools",     level: "Intermediate" },
   { name: "CapCut",     icon: <FaRegFileImage  />,      color: "#FB923C", category: "Tools",     level: "Beginner" },
  // { name: "Windsurf",    icon: <Cloud size={16}/>, color: "#38BDF8", category: "Tools",     level: "Beginner" },
  // Office
  { name: "MS Word",     icon: <PiMicrosoftWordLogoFill />,       color: "#2563EB", category: "Office", level: "Intermediate" },
  { name: "MS Excel",    icon: <PiMicrosoftExcelLogoFill />,      color: "#16A34A", category: "Office", level: "Intermediate" },
  { name: "PowerPoint",  icon: <PiMicrosoftPowerpointLogoFill />, color: "#CA8A04", category: "Office", level: "Intermediate" },
];

const softSkills = [
  {
    title: "Communication",
    emoji: "💬",
    desc: "Clear, concise written and verbal communication across teams and stakeholders.",
  },
  {
    title: "Teamwork",
    emoji: "🤝",
    desc: "Collaborative approach to projects, supporting and learning from peers.",
  },
  {
    title: "Problem Solving",
    emoji: "🧩",
    desc: "Breaking down complex issues into structured, actionable solutions.",
  },
  {
    title: "Adaptability",
    emoji: "🔄",
    desc: "Quick to learn new tools, pivot on requirements, and thrive amid change.",
  },
  {
    title: "Time Management",
    emoji: "⏱️",
    desc: "Prioritizing tasks effectively to meet deadlines without sacrificing quality.",
  },
  {
    title: "Attention to Detail",
    emoji: "🔍",
    desc: "Catching bugs, inconsistencies, and edge cases before they reach production.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Animated progress bar that triggers when in view */
function LevelBar({ level, color, delay = 0 }) {
  const { pct } = LEVEL_CONFIG[level];
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height: 3,
        background: "rgba(255,255,255,0.06)",
        borderRadius: 99,
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: triggered ? pct : 0 }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
        style={{ height: "100%", background: color, borderRadius: 99 }}
      />
    </div>
  );
}

/** Single IT skill card */
function SkillCard({ skill, index }) {
  const lv = LEVEL_CONFIG[skill.level];
  const catColor = CAT_COLOR[skill.category] || "#94A3B8";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.95 }}
      transition={{ duration: 0.28, delay: index * 0.03 }}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 14,
        padding: "14px 16px",
        transition: "border-color 0.2s",
        cursor: "default",
      }}
      whileHover={{ borderColor: "rgba(255,255,255,0.15)" }}
    >
      {/* Top row: icon + name */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <span
          style={{
            fontSize: 20,
            color: skill.color,
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: skill.color + "18",
            borderRadius: 8,
            flexShrink: 0,
          }}
        >
          {skill.icon}
        </span>
        <div style={{ minWidth: 0 }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 13,
              fontWeight: 600,
              color: "#E2E8F0",
              margin: 0,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {skill.name}
          </p>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: catColor,
              margin: 0,
              letterSpacing: "0.06em",
              opacity: 0.8,
            }}
          >
            {skill.category}
          </p>
        </div>
      </div>

      {/* Level row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: "#475569",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: lv.color,
              display: "inline-block",
            }}
          />
          {skill.level}
        </span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#334155" }}>
          {lv.pct}
        </span>
      </div>

      <LevelBar level={skill.level} color={lv.color} delay={index * 0.02} />
    </motion.div>
  );
}

/** Single soft skill card */
function SoftCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 14,
        padding: "16px 18px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <span
          style={{
            fontSize: 18,
            width: 34,
            height: 34,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.06)",
            borderRadius: 8,
            flexShrink: 0,
          }}
        >
          {skill.emoji}
        </span>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 13,
            fontWeight: 600,
            color: "#E2E8F0",
            margin: 0,
          }}
        >
          {skill.title}
        </p>
      </div>
      <p
        style={{
          fontSize: 12,
          color: "#475569",
          lineHeight: 1.6,
          margin: 0,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {skill.desc}
      </p>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

function Skill() {
  const [activeTab, setActiveTab] = useState("it");   // "it" | "soft"
  const [activeCat, setActiveCat] = useState("All");

  const displayed =
    activeCat === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCat);

  return (
    <section
      id="skills"
      style={{
        padding: "80px 48px",
        fontFamily: "'Inter', system-ui, sans-serif",
        position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&family=Syne:wght@700;800;900&display=swap');

        .proj-section-label {
          display: flex; align-items: center; gap: 14px;
          font-family: 'DM Mono', monospace;
          font-size: 13px; letter-spacing: 0.2em;
          color: #22D3EE; text-transform: uppercase;
          font-weight: 400; margin-bottom: 24px;
        }
        .proj-section-label::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, #22D3EE33, transparent);
        }

        .proj-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 900; color: #F8FAFC;
          letter-spacing: -0.02em; line-height: 1.05;
          margin: 0 0 12px;
        }
        .proj-headline .accent {
          background: linear-gradient(135deg, #22D3EE 0%, #6366F1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .proj-sub {
          font-size: 15px; color: #475569;
          line-height: 1.6; margin: 0 0 2.5rem;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Main tabs ── */
        .main-tabs {
          display: flex; gap: 4px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 4px;
          width: fit-content; margin-bottom: 1.5rem;
        }
        .main-tab {
          padding: 8px 22px; border-radius: 9px;
          font-size: 13px; font-weight: 500;
          cursor: pointer; border: none;
          background: transparent; color: #475569;
          transition: all 0.18s; font-family: 'DM Mono', monospace;
          letter-spacing: 0.03em;
        }
        .main-tab.active {
          background: rgba(255,255,255,0.08);
          color: #E2E8F0;
          border: 1px solid rgba(255,255,255,0.12);
        }

        /* ── Sub-filter pills ── */
        .sub-filters {
          display: flex; flex-wrap: wrap; gap: 6px;
          margin-bottom: 1.5rem;
        }
        .sub-btn {
          padding: 5px 14px; border-radius: 100px;
          font-size: 11px; font-family: 'DM Mono', monospace;
          cursor: pointer; letter-spacing: 0.07em;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent; color: #475569;
          transition: all 0.15s; text-transform: uppercase;
        }
        .sub-btn:hover { color: #94A3B8; border-color: rgba(255,255,255,0.18); }
        .sub-btn.active {
          border-color: #22D3EE55; color: #22D3EE;
          background: rgba(34, 211, 238, 0.08);
        }

        /* ── Count label ── */
        .count-label {
          font-family: 'DM Mono', monospace; font-size: 11px;
          color: #334155; letter-spacing: 0.12em;
          text-transform: uppercase; margin-bottom: 1rem;
        }

        /* ── Grids ── */
        .skill-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
          gap: 10px;
        }
        .soft-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 10px;
        }
      `}</style>

      <div style={{ maxWidth: 1140, margin: "0 auto" }}>

        {/* ── Section label ── */}
        <motion.div
          className="proj-section-label"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          02. &nbsp;Skills
        </motion.div>

        {/* ── Headline ── */}
        <motion.h2
          className="proj-headline"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          Technical <span className="accent">Expertise</span>
        </motion.h2>

        <motion.p
          className="proj-sub"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A toolkit built across frontend, backend, tooling, and beyond.
        </motion.p>

        {/* ── Main tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.12 }}
        >
          <div className="main-tabs">
            <button
              className={`main-tab ${activeTab === "it" ? "active" : ""}`}
              onClick={() => setActiveTab("it")}
            >
              IT Skills
            </button>
            <button
              className={`main-tab ${activeTab === "soft" ? "active" : ""}`}
              onClick={() => setActiveTab("soft")}
            >
              Soft Skills
            </button>
          </div>
        </motion.div>

        {/* ── IT Skills panel ── */}
        <AnimatePresence mode="wait">
          {activeTab === "it" && (
            <motion.div
              key="it"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              {/* Sub-filters */}
              <div className="sub-filters">
                {IT_FILTERS.map((f) => (
                  <button
                    key={f}
                    className={`sub-btn ${activeCat === f ? "active" : ""}`}
                    onClick={() => setActiveCat(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Count */}
              <p className="count-label">
                {displayed.length} {activeCat === "All" ? "total" : activeCat} skill
                {displayed.length !== 1 ? "s" : ""}
              </p>

              {/* Cards grid */}
              <motion.div layout className="skill-grid">
                <AnimatePresence mode="popLayout">
                  {displayed.map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} index={i} />
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}

          {/* ── Soft Skills panel ── */}
          {activeTab === "soft" && (
            <motion.div
              key="soft"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <p className="count-label">
                {softSkills.length} soft skills
              </p>
              <div className="soft-grid">
                {softSkills.map((skill, i) => (
                  <SoftCard key={skill.title} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default Skill;