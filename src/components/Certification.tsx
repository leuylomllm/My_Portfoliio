import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const certifications = [
  {
    id: "01",
    issuer: "Meta",
    logo: "🎓",
    title: "Front-End Developer Professional Certificate",
    description:
      "HTML, CSS, JavaScript, React — complete front-end engineering track by Meta engineers on Coursera.",
    tags: ["React", "JavaScript", "CSS", "HTML"],
    date: "Jan 2024",
    status: "verified" as const,
    href: "https://coursera.org",
  },
  {
    id: "02",
    issuer: "Google",
    logo: "☁️",
    title: "Google UX Design Certificate",
    description:
      "User research, wireframing, prototyping, and building design systems with Figma.",
    tags: ["UX", "Figma", "Prototyping", "Design"],
    date: "Mar 2024",
    status: "verified" as const,
    href: "https://coursera.org",
  },
  {
    id: "03",
    issuer: "Coursera",
    logo: "⚡",
    title: "Full-Stack Web Development with React",
    description:
      "Node.js, Express, MongoDB, REST APIs, and connecting a React front end to a real back end.",
    tags: ["Node.js", "MongoDB", "REST API", "React"],
    date: "2025",
    status: "in-progress" as const,
    progress: 70,
    href: null,
  },
  {
    id: "04",
    issuer: "freeCodeCamp",
    logo: "🔥",
    title: "Responsive Web Design",
    description:
      "Flexbox, Grid, accessibility-first HTML & CSS. Built 5 certification projects.",
    tags: ["HTML", "CSS", "Flexbox", "Grid"],
    date: "2023",
    status: "verified" as const,
    href: "https://freecodecamp.org",
  },
  {
    id: "05",
    issuer: "Udemy",
    logo: "🚀",
    title: "The Complete JavaScript Course",
    description:
      "Deep-dive into modern JS: closures, async/await, OOP, ES6+, and real-world projects.",
    tags: ["JavaScript", "ES6+", "Async", "OOP"],
    date: "2023",
    status: "verified" as const,
    href: "https://udemy.com",
  },
  {
    id: "06",
    issuer: "CS50",
    logo: "🏛️",
    title: "CS50: Introduction to Computer Science",
    description:
      "Harvard's foundational CS course — algorithms, data structures, C, Python, SQL, and web.",
    tags: ["C", "Python", "SQL", "Algorithms"],
    date: "2022",
    status: "verified" as const,
    href: "https://cs50.harvard.edu",
  },
];

const stats = [
  { value: "6+", label: "Certificates" },
  { value: "5", label: "Platforms" },
  { value: "2024", label: "Latest" },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      style={{
        padding: "80px 48px",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Inter:wght@400;500;700;900&display=swap');

        .cert-section-label {
          display: flex;
          align-items: center;
          gap: 14px;
          font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 14px;
          letter-spacing: 0.2em;
          color: #22D3EE;
          text-transform: uppercase;
          font-weight: 400;
          margin-bottom: 24px;
        }
        .cert-section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, #22D3EE44, transparent);
        }

        .cert-headline {
          font-family: Inter, system-ui, sans-serif;
          font-size: clamp(36px, 48px, 56px);
          font-weight: 900;
          color: #F8FAFC;
          letter-spacing: -0.02em;
          line-height: 1.05;
          margin: 0 0 16px;
        }
        .cert-headline .accent {
          background: linear-gradient(135deg, #22D3EE 0%, #6366F1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cert-sub {
          font-family: Inter, system-ui, sans-serif;
          font-size: 16px;
          color: #ffffff66;
          line-height: 1.8;
          max-width: 480px;
          margin: 0 0 40px;
        }

        .cert-stats {
          display: flex;
          gap: 40px;
          margin-bottom: 56px;
        }
        .cert-stat-val {
          font-family: Inter, system-ui, sans-serif;
          font-size: 32px;
          font-weight: 900;
          background: linear-gradient(135deg, #22D3EE, #6366F1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .cert-stat-label {
          font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 11px;
          color: #334155;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 5px;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .cert-card {
          background: radial-gradient(60% 40% at 50% 0%, rgba(0, 212, 255, 0.05), transparent);
          border: 1px solid #1A2235;
          border-radius: 16px;
          padding: 26px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, transform 0.25s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .cert-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 20% 10%, #22D3EE07, transparent 65%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .cert-card:hover {
          border-color: #22D3EE2A;
          transform: translateY(-3px);
          box-shadow: 0 16px 48px #00000055;
        }
        .cert-card:hover::before { opacity: 1; }

        .cert-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 18px;
        }

        .cert-logo {
          width: 46px;
          height: 46px;
          background: #131C2E;
          border: 1px solid #1E2D45;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }

        .cert-badge {
          font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 11px;
          padding: 4px 11px;
          border-radius: 20px;
          font-weight: 500;
          letter-spacing: 0.04em;
        }
        .cert-badge.verified {
          background: #0F2E1E;
          color: #4ADE80;
          border: 1px solid #22543D;
        }
        .cert-badge.in-progress {
          background: #1C190A;
          color: #FCD34D;
          border: 1px solid #44380A;
        }

        .cert-issuer {
          font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 11px;
          color: #22D3EE;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 7px;
          font-weight: 500;
        }

        .cert-title {
          font-family: Inter, system-ui, sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #F8FAFC;
          line-height: 1.35;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .cert-desc {
          font-family: Inter, system-ui, sans-serif;
          font-size: 13px;
          color: #ffffff55;
          line-height: 1.75;
          margin-bottom: 16px;
          flex: 1;
        }

        .cert-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .cert-tag {
          font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 11px;
          color: #ffffff44;
          background: #111827;
          border: 1px solid #1E293B;
          border-radius: 5px;
          padding: 3px 9px;
          transition: border-color 0.2s, color 0.2s;
        }
        .cert-card:hover .cert-tag {
          border-color: #1E3045;
          color: #7A90A8;
        }

        .cert-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid #1A2235;
        }
        .cert-date {
          font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 12px;
          color: #334155;
        }
        .cert-link {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 12px;
          color: #22D3EE;
          text-decoration: none;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        .cert-link:hover { opacity: 1; }
        .cert-progress-label {
          font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 12px;
          color: #FCD34D;
          opacity: 0.8;
        }

        .cert-progress-bar-wrap {
          height: 3px;
          background: #1A2235;
          border-radius: 2px;
          margin-top: 10px;
          overflow: hidden;
        }
        .cert-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #22D3EE, #6366F1);
          border-radius: 2px;
          transition: width 1s ease;
        }

        @media (max-width: 960px) {
          .cert-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .cert-grid { grid-template-columns: 1fr !important; }
          #certifications { padding: 60px 24px !important; }
          .cert-stats { gap: 24px; }
        }
      `}</style>

      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Label */}
        <motion.div
          className="cert-section-label"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          06. &nbsp;Certifications
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="cert-headline"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          My <span className="accent">Credentials</span>
        </motion.h2>

        <motion.p
          className="cert-sub"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Certifications and courses I've completed to sharpen my skills and
          stay current in the field.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="cert-stats"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {stats.map((s, i) => (
            <div key={i}>
              <div className="cert-stat-val">{s.value}</div>
              <div className="cert-stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="cert-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <div className="cert-card-top">
                <div className="cert-logo">{cert.logo}</div>
                <span className={`cert-badge ${cert.status}`}>
                  {cert.status === "verified" ? "✓ Verified" : "⏳ In Progress"}
                </span>
              </div>

              <div className="cert-issuer">{cert.issuer}</div>
              <div className="cert-title">{cert.title}</div>
              <div className="cert-desc">{cert.description}</div>

              <div className="cert-tags">
                {cert.tags.map((tag) => (
                  <span key={tag} className="cert-tag">{tag}</span>
                ))}
              </div>

              {cert.status === "in-progress" && cert.progress && (
                <div>
                  <div className="cert-progress-bar-wrap">
                    <div
                      className="cert-progress-bar"
                      style={{ width: `${cert.progress}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="cert-meta">
                <span className="cert-date">{cert.date}</span>
                {cert.href ? (
                  
                  <a href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    View <ExternalLink size={11} />
                  </a>
                ) : (
                  <span className="cert-progress-label">
                    {cert.progress}% done
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;