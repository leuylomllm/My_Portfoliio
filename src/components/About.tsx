import { motion } from "framer-motion";
import { Code2, Palette, Database, Rocket } from "lucide-react";
const CARDS = [
  {
    icon: <Code2 />,
    title: "IT Skills",
    desc: "Able to use computers and build simple web applications.",
  },
  {
    icon: <Palette />,
    title: "Communication",
    desc: "Able to communicate clearly and work with others effectively.",
  },
  {
    icon: <Database />,
    title: "Problem Solving",
    desc: "Able to analyze problems and find practical solutions.",
  },
  {
    icon: <Rocket />,
    title: "Teamwork & Learning",
    desc: "Work well in a team and always willing to learn new skills.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 48px",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');

          /* Subtle grid background */
          #about::before {
            content: '';
            position: absolute;
            inset: 0;
           
            background-size: 60px 60px;
            pointer-events: none;
            z-index: 0;
          }

          .about-section-label {
            display: flex;
            align-items: center;
            gap: 14px;
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
            font-size: 14px;
            letter-spacing: 0.2em;
            color: #22D3EE;
            text-transform: uppercase;
            font-weight: 400;
            margin-bottom: 52px;
            position: relative;
            z-index: 1;
          }
          .about-section-label::after {
            content: '';
            flex: 1;
            max-width: 100%;
            height: 1px;
            background: linear-gradient(90deg, #22D3EE44, transparent);
          }

          .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: start;
            position: relative;
            z-index: 1;
          }

          .about-headline {
             font-family: Inter, system-ui, sans-serif;
            font-size: clamp(36px, 48px, 58px);
            font-weight: 900;
            line-height: 1.05;
            color: #F8FAFC;
            margin-bottom: 32px;
            letter-spacing: -0.02em;
          }
          .about-headline .accent {
            background: linear-gradient(135deg, #22D3EE 0%, #6366F1 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .about-bio {
             font-family: Inter, system-ui, sans-serif;
            font-size: 16px;
            color: #ffffff80;
            line-height: 1.9;
            margin-bottom: 20px;
          }

          .about-cards-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }

          .about-card {
            background: #0D1220;
             font-family: Inter, system-ui, sans-serif;
            border: 1px solid #1A2235;
            border-radius: 16px;
            padding: 28px 24px;
            position: relative;
            overflow: hidden;
            transition: border-color 0.3s ease, transform 0.25s ease, box-shadow 0.3s ease;
            cursor: default;
          }
          .about-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 30% 20%, #22D3EE08, transparent 60%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }
          .about-card:hover {
            border-color: #22D3EE33;
            transform: translateY(-3px);
            box-shadow: 0 12px 40px #00000066;
          }
          .about-card:hover::before { opacity: 1; }

          .about-card-icon {
            width: 44px;
            height: 44px;
            background: #131C2E;
            border: 1px solid #1E2D45;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            font-size: 18px;
            transition: border-color 0.3s ease, background 0.3s ease;
          }
          .about-card:hover .about-card-icon {
            background: #162036;
            border-color: #22D3EE44;
          }

          .about-card-title {
             font-family: Inter, system-ui, sans-serif;
            font-size: 15px;
            font-weight: 700;
            color: #F1F5F9;
            margin-bottom: 10px;
            letter-spacing: -0.01em;
          }

          .about-card-desc {
            font-family: Inter, system-ui, sans-serif;
            font-size: 12px;
            color: #ffffff66;
            line-height: 1.7;
          }

          @media (max-width: 900px) {
            .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            #about { padding: 60px 24px !important; }
          }
          @media (max-width: 540px) {
            .about-cards-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Section label */}
        <motion.div
          className="about-section-label"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          01. &nbsp;About Me
        </motion.div>

        <div className="about-grid">
          {/* LEFT — Headline + bio */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="about-headline">
              Building resilient
              <br />
              software,
              <br />
              <span className="accent">from product to data platform</span>
            </h2>

            <p className="about-bio">
              I am an IT graduate with hands-on experience in building simple
              web applications. I have worked with both frontend and backend
              technologies and enjoy learning new tools.
            </p>

            <p className="about-bio">
              I am responsible, eager to learn, and able to work both
              independently and in a team. I am looking for an opportunity to
              apply my skills and grow professionally.
            </p>
          </motion.div>

          {/* RIGHT — Feature cards */}
          <motion.div
            className="about-cards-grid"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
          >
            {CARDS.map((card, i) => (
              <motion.div
                key={i}
                className="about-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.45 }}
              >
                <div className="about-card-icon">{card.icon}</div>
                <div className="about-card-title">{card.title}</div>
                <div className="about-card-desc">{card.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
