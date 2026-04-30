import { motion } from "framer-motion";
import Me from "../assets/image.jpg";

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind CSS",
  "MySQL",
];

const STATS = [
  { number: "1+", label: "Years Experience" },
  // { number: "15+", label: "Projects Built"   },
  { number: "5+", label: "Technologies" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#0A0A0F",
        padding: "100px 24px",
         fontFamily: "'DM Mono', 'Fira Code', monospace",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@700;800&display=swap');

        .about-skill-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 8px;
          background: #111118;
          border: 1px solid #1E1E2E;
          font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 12.5px;
          font-weight: 500;
          color: #94A3B8;
          letter-spacing: 0.02em;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.18s ease;
          cursor: default;
        }
        .about-skill-tag:hover {
          border-color: #38BDF855;
          color: #38BDF8;
          transform: translateY(-2px);
        }
        .about-skill-tag::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #38BDF8;
          opacity: 0.6;
        }

        .about-stat {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 18px 24px;
          background: #111118;
          border: 1px solid #1E1E2E;
          border-radius: 12px;
          flex: 1;
          transition: border-color 0.25s ease, transform 0.2s ease;
        }
        .about-stat:hover {
          border-color: #38BDF833;
          transform: translateY(-2px);
        }
        .about-stat-num {
           font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 26px;
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1;
        }
        .about-stat-label {
           font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 12px;
          color: #475569;
          font-weight: 400;
          letter-spacing: 0.04em;
        }

        .about-img-wrap {
          position: relative;
          width: 100%;
          max-width: 400px;
          aspect-ratio: 4/5;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #1E1E2E;
          background: #111118;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .about-img-wrap:hover {
          border-color: #38BDF833;
          box-shadow: 0 0 48px #38BDF811;
        }
        .about-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .about-img-wrap:hover img {
          transform: scale(1.03);
        }

        /* Floating badge */
        .about-badge {
          position: absolute;
          bottom: 24px;
          left: -20px;
          background: #111118;
          border: 1px solid #1E1E2E;
          border-radius: 12px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 32px #00000066;
          backdrop-filter: blur(12px);
        }
        .about-badge-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #22C55E;
          box-shadow: 0 0 0 3px #22C55E22;
          animation: badge-pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes badge-pulse {
          0%,100% { box-shadow: 0 0 0 3px #22C55E22; }
          50%      { box-shadow: 0 0 0 6px #22C55E11; }
        }
        .about-badge-text {
           font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 12px;
          color: #94A3B8;
          font-weight: 400;
          white-space: nowrap;
        }
        .about-badge-text strong {
          color: #E2E8F0;
          font-weight: 600;
        }

        .about-corner-tag {
          position: absolute;
          top: 20px;
          right: -16px;
          background: #38BDF8;
          color: #0A0A0F;
           font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 8px;
          box-shadow: 0 4px 16px #38BDF844;
        }

        .divider-line {
          width: 40px; height: 2px;
          background: linear-gradient(90deg, #38BDF8, #A78BFA);
          border-radius: 2px;
          margin-bottom: 20px;
        }

        @media (max-width: 900px) {
          .about-grid { flex-direction: column !important; }
          .about-img-side { align-items: center !important; }
          .about-badge { left: 12px !important; }
          .about-corner-tag { right: 12px !important; 
          }
        }
      `}</style>

      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 64 }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', 'Fira Code', monospace",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#38BDF8",
              fontWeight: 500,
              marginBottom: 10,
            }}
          >
            About Me
          </p>
          <h2
            style={{
               fontFamily: "'DM Mono', 'Fira Code', monospace",
              fontSize: "clamp(30px, 4.5vw, 48px)",
              fontWeight: 800,
              color: "#F1F5F9",
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Passionate about
            <br />
            <span style={{ color: "#38BDF8" }}>building the web.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          className="about-grid"
          style={{ display: "flex", gap: 72, alignItems: "flex-start" }}
        >
          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: 1, minWidth: 0 }}>
            <div className="divider-line" />
            <p
              style={{
                fontFamily: "'DM Mono', 'Fira Code', monospace",
                fontSize: 16,
                color: "#64748B",
                lineHeight: 1.85,
                margin: "0 0 14px",
                fontWeight: 300,
              }}
            >
              I'm a web developer who loves crafting intuitive and responsive
              applications. With over{" "}
              <span style={{ color: "#E2E8F0", fontWeight: 500 }}>
                1+ years of experience
              </span>
              , I focus on clean, scalable solutions that solve real problems
              and deliver seamless digital experiences.
            </p>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                color: "#64748B",
                lineHeight: 1.85,
                margin: "0 0 32px",
                fontWeight: 300,
              }}
            >
              I enjoy every part of the development process — from translating
              designs into pixel-perfect UIs to architecting backend systems
              that perform at scale.
            </p>

            {/* Skills */}
            <div style={{ marginBottom: 36 }}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#334155",
                  fontWeight: 500,
                  marginBottom: 14,
                }}
              >
                Core Technologies
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {SKILLS.map((s) => (
                  <span key={s} className="about-skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 12 }}>
              {STATS.map((s, i) => (
                <motion.div
                  key={i}
                  className="about-stat"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                >
                  <span className="about-stat-num">{s.number}</span>
                  <span className="about-stat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Image */}
          <motion.div
            className="about-img-side"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{
              flexShrink: 0,
              width: 340,
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <div className="about-img-wrap">
              <img src={Me} alt="Lom Leuy" />

              {/* Gradient overlay at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "35%",
                  background: "linear-gradient(to top, #0A0A0Fcc, transparent)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Floating badge — available */}
            <div className="about-badge">
              <span className="about-badge-dot" />
              <span className="about-badge-text">
                <strong>Open to work</strong> · Full-time
              </span>
            </div>

            {/* Corner tag */}
            <div className="about-corner-tag">Dev</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
