import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Me from "../assets/Me.png";
import resume from "../assets/cv.pdf";

const ROLES = ["Web Developer."];

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef(null);

  // Typewriter
  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = isDeleting ? 55 : 95;

    timerRef.current = setTimeout(() => {
      setTypedText((prev) => {
        if (!isDeleting) {
          const next = current.slice(0, prev.length + 1);
          if (next === current) setTimeout(() => setIsDeleting(true), 1200);
          return next;
        } else {
          const next = current.slice(0, prev.length - 1);
          if (next === "") {
            setIsDeleting(false);
            setRoleIndex((i) => (i + 1) % ROLES.length);
          }
          return next;
        }
      });
    }, speed);

    return () => clearTimeout(timerRef.current);
  }, [typedText, isDeleting, roleIndex]);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section id="home"
      style={{
        background: "#0A0A0F",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Cabinet Grotesk', 'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Syne:wght@700;800&display=swap');

        /* subtle grid texture */
        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(#1E1E2E44 1px, transparent 1px),
            linear-gradient(90deg, #1E1E2E44 1px, transparent 1px);
          background-size: 60px 60px;
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
          pointer-events: none;
        }

        /* Floating light blob */
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          animation: blobFloat 8s ease-in-out infinite alternate;
        }
        @keyframes blobFloat {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(20px, -30px) scale(1.06); }
        }

        /* Image ring */
        .avatar-ring {
          position: relative;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a1a2e, #111118);
          border: 1px solid #1E1E2E;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 0 0 1px #2a2a3e, 0 0 60px #38BDF822;
          transition: box-shadow 0.4s ease;
        }
        .avatar-ring:hover {
          box-shadow: 0 0 0 1px #38BDF855, 0 0 80px #38BDF833;
        }
        .avatar-ring::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 50%;
          background: conic-gradient(from 180deg, #38BDF8 0deg, #A78BFA 120deg, #EC4899 240deg, #38BDF8 360deg);
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 1.5px), white calc(100% - 1.5px));
          mask: radial-gradient(farthest-side, transparent calc(100% - 1.5px), white calc(100% - 1.5px));
          animation: spinRing 8s linear infinite;
          opacity: 0.5;
        }
        @keyframes spinRing {
          to { transform: rotate(360deg); }
        }

        /* Status dot */
        .status-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #22C55E;
          box-shadow: 0 0 0 3px #22C55E22;
          animation: pulse-green 2s ease-in-out infinite;
        }
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 3px #22C55E22; }
          50%       { box-shadow: 0 0 0 6px #22C55E11; }
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #F1F5F9;
          color: #0A0A0F;
          padding: 12px 26px;
          border-radius: 12px;
           font-family: 'DM Mono', 'Fira Code', monospace;
          
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 0.02em;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.18s ease, box-shadow 0.2s ease;
          border: none;
          cursor: pointer;
        }
        .btn-primary:hover {
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px #ffffff22;
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #94A3B8;
          padding: 12px 26px;
          border-radius: 12px;
           font-family: 'DM Mono', 'Fira Code', monospace;
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 0.02em;
          text-decoration: none;
          border: 1px solid #1E1E2E;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.18s ease;
          cursor: pointer;
        }
        .btn-outline:hover {
          border-color: #38BDF866;
          color: #E2E8F0;
          transform: translateY(-2px);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .stat-number {
           font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 22px;
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1;
        }
        .stat-label {
           font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 12px;
          color: #475569;
          font-weight: 400;
          letter-spacing: 0.04em;
        }
        .stat-divider {
          width: 1px;
          height: 32px;
          background: #1E1E2E;
          align-self: center;
        }

        /* Scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }
        .scroll-text {
           font-family: 'DM Mono', 'Fira Code', monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #334155;
          font-weight: 500;
        }
        .scroll-line {
          width: 1px;
          height: 36px;
          background: linear-gradient(to bottom, #334155, transparent);
          animation: scrollDrop 1.8s ease-in-out infinite;
        }
        @keyframes scrollDrop {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 0; }
          40%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          60%  { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }

        @media (max-width: 768px) {
          .hero-inner { flex-direction: column !important; text-align: center !important; }
          .hero-right  { align-items: center !important; }
          .avatar-ring { width: 200px !important; height: 200px !important; }
          .hero-stats  { justify-content: center !important; }
          .hero-btns   { justify-content: center !important; }
        }
      `}</style>

      {/* Background */}
      <div className="hero-grid-bg" />
      <div
        className="hero-blob"
        style={{
          width: 400,
          height: 400,
          background: "#38BDF810",
          top: "-10%",
          right: "5%",
        }}
      />
      <div
        className="hero-blob"
        style={{
          width: 300,
          height: 300,
          background: "#A78BFA0D",
          bottom: "0%",
          left: "0%",
          animationDelay: "3s",
        }}
      />

      {/* Content */}
      <div
        className="hero-inner"
        style={{
          maxWidth: 1080,
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 72,
          position: "relative",
          zIndex: 1,
          padding: "80px 0",
        }}
      >
        {/* LEFT — Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ flexShrink: 0 }}
        >
          <div className="avatar-ring">
            <img
              src={Me}
              alt="Lom Leuy"
              style={{
                width: "82%",
                height: "82%",
                objectFit: "contain",
                borderRadius: "50%",
                position: "relative",
                zIndex: 1,
              }}
            />
          </div>
        </motion.div>

        {/* RIGHT — Text */}
        <div
          className="hero-right"
          style={{ display: "flex", flexDirection: "column", gap: 0 }}
        >
          {/* Name */}
          <motion.div {...fadeUp(0.18)}>
            <p
              style={{
                 fontFamily: "'DM Mono', 'Fira Code', monospace",
                fontSize: 14,
                color: "#475569",
                fontWeight: 400,
                marginBottom: 6,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Hello, I'm
            </p>
            <h1
              style={{
                 fontFamily: "'DM Mono', 'Fira Code', monospace",
                
                fontSize: "clamp(40px, 6vw, 68px)",
                fontWeight: 800,
                color: "#F1F5F9",
                lineHeight: 1.08,
                margin: "0 0 14px",
                letterSpacing: "-0.02em",
              }}
            >
              Lom Leuy
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div {...fadeUp(0.26)} style={{ marginBottom: 20 }}>
            <h2
              style={{
                fontFamily: "'DM Mono', 'Fira Code', monospace",
                fontSize: "clamp(18px, 2.8vw, 26px)",
                fontWeight: 400,
                color: "#38BDF8",
                margin: 0,
                letterSpacing: "-0.01em",
                minHeight: "1.6em",
              }}
            >
              I'm a <span style={{ fontWeight: 600 }}>{typedText}</span>
              <span
                style={{
                  display: "inline-block",
                  width: 2,
                  height: "1em",
                  background: "#38BDF8",
                  marginLeft: 3,
                  verticalAlign: "text-bottom",
                  animation: "cursorBlink 1s step-end infinite",
                }}
              />
              <style>{`@keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            {...fadeUp(0.34)}
            style={{
               fontFamily: "'DM Mono', 'Fira Code', monospace",
              fontSize: 15,
              color: "#64748B",
              lineHeight: 1.75,
              maxWidth: 460,
              margin: "0 0 32px",
              fontWeight: 300,
            }}
          >
            A self-taught developer with 2 years of experience building modern,
            responsive web apps. I write clean code and craft digital
            experiences that balance great UX with solid engineering.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...fadeUp(0.42)}
            className="hero-btns"
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 40,
               fontFamily: "'DM Mono', 'Fira Code', monospace",
            }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Download CV
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1v8M3 9l4 4 4-4M1 13h12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.5)}
            className="hero-stats"
            style={{ display: "flex", alignItems: "center", gap: 24 }}
          >
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-divider" />
            {/* <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects</span>
            </div> */}
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Tech Stack</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default HeroSection;
