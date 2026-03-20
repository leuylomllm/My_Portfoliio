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
  SiMongodb,
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
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#22C55E",
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
        background: "#0A0A0F",
        padding: "100px 24px",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
     

      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#38BDF8",
              fontWeight: 500,
              marginBottom: 12,
            }}
          >
            What I Work With
          </p>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(30px, 4.5vw, 48px)",
              fontWeight: 800,
              color: "#F1F5F9",
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Technical Skills
          </h2>
          <div className="divider-line" />
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#475569",
              fontSize: 15,
              maxWidth: 400,
              margin: "18px auto 0",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            Tools and technologies I use to build modern web applications.
          </p>
        </motion.div>

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
            fontFamily: "'DM Sans', sans-serif",
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
                        fontFamily: "'DM Sans', sans-serif",
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
                        fontFamily: "'DM Sans', sans-serif",
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
                      fontFamily: "'DM Sans', sans-serif",
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
