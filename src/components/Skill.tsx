import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiExpress,
  SiLaravel,
  SiVite,
  SiBootstrap,
  SiGit,
  SiTailwindcss,
  SiPrimevue,
  SiMysql,
  SiTypescript,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Cloud } from "lucide-react";
import {
  PiMicrosoftWordLogoFill,
  PiMicrosoftExcelLogoFill,
  PiMicrosoftPowerpointLogoFill,
} from "react-icons/pi";

const LEVEL_WIDTH = { Beginner: "30%", Intermediate: "62%", Advanced: "90%" };
const LEVEL_COLOR = {
  Beginner: "#A78BFA",
  Intermediate: "#38BDF8",
  Advanced: "#34D399",
};
const CAT_COLOR = {
  Frontend: "#38BDF8",
  Backend: "#34D399",
  Tools: "#FB923C",
  "Office Software": "#FACC15",
};

const allSkills = [
  // Frontend
  {
    name: "React",
    icon: <FaReact />,
    color: "#38BDF8",
    category: "Frontend",
    level: "Intermediate",
  },
  {
    name: "Vue.js",
    icon: <FaVuejs />,
    color: "#4ADE80",
    category: "Frontend",
    level: "Intermediate",
  },
  {
    name: "Vite",
    icon: <SiVite />,
    color: "#A78BFA",
    category: "Frontend",
    level: "Intermediate",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    color: "#22D3EE",
    category: "Frontend",
    level: "Intermediate",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
    color: "#818CF8",
    category: "Frontend",
    level: "Intermediate",
  },
  {
    name: "PrimeVue",
    icon: <SiPrimevue />,
    color: "#4ADE80",
    category: "Frontend",
    level: "Intermediate",
  },
  {
    name: "PrimeFlex",
    icon: <SiPrimevue />,
    color: "#D1D5DB",
    category: "Frontend",
    level: "Intermediate",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "#F97316",
    category: "Frontend",
    level: "Intermediate",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "#60A5FA",
    category: "Frontend",
    level: "Intermediate",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "#FACC15",
    category: "Frontend",
    level: "Intermediate",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#60A5FA",
    category: "Frontend",
    level: "Intermediate",
  },
  // Backend
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "#22C55E",
    category: "Backend",
    level: "Beginner",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "#D1D5DB",
    category: "Backend",
    level: "Beginner",
  },
  {
    name: "Laravel",
    icon: <SiLaravel />,
    color: "#F87171",
    category: "Backend",
    level: "Intermediate",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "#3B82F6",
    category: "Backend",
    level: "Beginner",
  },
  // Tools
  {
    name: "Git",
    icon: <SiGit />,
    color: "#FB923C",
    category: "Tools",
    level: "Intermediate",
  },
  {
    name: "VS Code",
    icon: <VscVscode />,
    color: "#818CF8",
    category: "Tools",
    level: "Intermediate",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    color: "#FB923C",
    category: "Tools",
    level: "Beginner",
  },
  {
    name: "Windsurf",
    icon: <Cloud />,
    color: "#38BDF8",
    category: "Tools",
    level: "Beginner",
  },
  // Office
  {
    name: "MS Word",
    icon: <PiMicrosoftWordLogoFill />,
    color: "#2563EB",
    category: "Office Software",
    level: "Intermediate",
  },
  {
    name: "MS Excel",
    icon: <PiMicrosoftExcelLogoFill />,
    color: "#16A34A",
    category: "Office Software",
    level: "Intermediate",
  },
  {
    name: "PowerPoint",
    icon: <PiMicrosoftPowerpointLogoFill />,
    color: "#CA8A04",
    category: "Office Software",
    level: "Intermediate",
  },
];

const FILTERS = ["All", "Frontend", "Backend", "Tools", "Office Software"];

function Skill() {
  const [active, setActive] = useState("All");

  const displayed =
    active === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      style={{
        padding: "80px 48px",
        fontFamily: "'Inter',system-ui, sans-serif",
        position: "relative",
      }}
    >
      <style>{`
            @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');
    
            /* Subtle grid bg */
            #projects::before {
              content: '';
              position: absolute;
              inset: 0;
              background-image:
                linear-gradient(#1E293B0D 1px, transparent 1px),
                linear-gradient(90deg, #1E293B0D 1px, transparent 1px);
              background-size: 60px 60px;
              pointer-events: none;
              z-index: 0;
            }
    
            .proj-section-label {
              display: flex;
              align-items: center;
              gap: 14px;
             font-family: JetBrains Mono, Fira Code, monospace;
             font-size: 14px;
              letter-spacing: 0.2em;
              color: #22D3EE;
              text-transform: uppercase;
              font-weight: 400;
              margin-bottom: 24px;
              position: relative;
              z-index: 1;
            }
            .proj-section-label::after {
              content: '';
              flex: 1;
              max-width: 100%;
              height: 1px;
              background: linear-gradient(90deg, #22D3EE44, transparent);
            }
    
            .proj-headline {
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
            .proj-headline .accent {
              background: linear-gradient(135deg, #22D3EE 0%, #6366F1 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
          `}</style>

      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Section label */}
        <motion.div
          className="proj-section-label"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          02. &nbsp;Skills
        </motion.div>

        {/* Headline */}
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
          Over a decade of production delivery across frontend, backend, data
          systems, and AI integration.
        </motion.p>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 44,
          }}
        >
          {FILTERS.map((f) => (
            <button
              style={{ fontFamily: "'DM Mono', 'Fira Code', monospace" }}
              key={f}
              className={`skill-filter-btn ${active === f ? "active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Count label */}
        <motion.p
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            fontFamily: "'DM Mono', 'Fira Code', monospace",
            fontSize: 12,
            color: "#334155",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 500,
            marginBottom: 20,
          }}
        >
          {displayed.length} {active === "All" ? "total" : active} skill
          {displayed.length !== 1 ? "s" : ""}
        </motion.p>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 12,
          }}
        >
          <AnimatePresence mode="popLayout">
            {displayed.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 8 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="skill-card"
                style={{
                  "--accent": skill.color,
                  "--glow": skill.color + "18",
                }}
              >
                {/* Top row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 10,
                  }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <div style={{ minWidth: 0 }}>
                    <h3
                      style={{
                        fontFamily: "'DM Mono', 'Fira Code', monospace",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#E2E8F0",
                        margin: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {skill.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'DM Mono', 'Fira Code', monospace",
                        fontSize: 11,
                        fontWeight: 500,
                        color: CAT_COLOR[skill.category] || "#94A3B8",
                        letterSpacing: "0.06em",
                        opacity: 0.75,
                      }}
                    >
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Level + bar */}
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
                      fontFamily: "'DM Mono', 'Fira Code', monospace",
                      fontSize: 11,
                      color: "#334155",
                      fontWeight: 400,
                      letterSpacing: "0.04em",
                    }}
                  >
                    <span
                      className="skill-level-dot"
                      style={{ "--level-color": LEVEL_COLOR[skill.level] }}
                    />
                    {skill.level}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      color: "#334155",
                    }}
                  >
                    {LEVEL_WIDTH[skill.level]}
                  </span>
                </div>

                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: LEVEL_WIDTH[skill.level] }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + i * 0.02,
                      ease: "easeOut",
                    }}
                    style={{ "--accent": skill.color }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Skill;
