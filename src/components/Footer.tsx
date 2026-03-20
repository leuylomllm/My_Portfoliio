import { Github, Mail, ExternalLink, ArrowUp, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/cv.pdf";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const RESOURCE_LINKS = [
  { label: "Download CV", href: resume, external: true },
  { label: "Projects", href: "#projects", external: false },
  { label: "Skills", href: "#skills", external: false },
  { label: "Contact", href: "#contact", external: false },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer
        style={{
          background: "#0A0A0F",
          borderTop: "1px solid #1E1E2E",
          padding: "64px 24px 0",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          {/* ── Main grid ── */}
          <div className="footer-grid">
            {/* Brand col */}
            <div className="footer-brand-col">
              {/* Left: logo + tagline */}
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: "#111118",
                      border: "1px solid #2A2A3E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: 16,
                      color: "#38BDF8",
                    }}
                  >
                    L
                  </div>
                  <span
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: 15,
                      color: "#E2E8F0",
                    }}
                  >
                    Lom Leuy
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13.5,
                    color: "#334155",
                    lineHeight: 1.75,
                    fontWeight: 300,
                    maxWidth: 240,
                    margin: 0,
                  }}
                >
                  Building clean, fast, and user-friendly web experiences with
                  modern technologies.
                </p>
              </div>

              {/* Right: socials */}
              <div className="footer-brand-right">
                <p className="footer-col-title" style={{ margin: 0 }}>
                  Find Me
                </p>
                <div style={{ display: "flex", gap: 8 }}>
                  <a
                    href="https://github.com/leuy-llm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social"
                    aria-label="GitHub"
                  >
                    <Github size={15} />
                  </a>
                  <a
                    href="mailto:leuylom022@gmail.com"
                    className="footer-social"
                    aria-label="Email"
                  >
                    <Mail size={15} />
                  </a>
                  <a
                    href="https://www.facebook.com/leuy.llm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social"
                    aria-label="Facebook"
                  >
                    <Facebook size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="footer-col-title">Navigation</p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {NAV_LINKS.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="footer-link">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <p className="footer-col-title">Resources</p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {RESOURCE_LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="footer-link"
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noopener noreferrer" : undefined}
                    >
                      {l.label}
                      {l.external && (
                        <ExternalLink size={11} style={{ opacity: 0.5 }} />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="footer-col-title">Contact</p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <a href="mailto:leuylom022@gmail.com" className="footer-link">
                  leuylom022@gmail.com
                </a>
                <a href="tel:+85597589543" className="footer-link">
                  097 58 94 543
                </a>
                <span className="footer-link" style={{ cursor: "default" }}>
                  Siem Reap, Cambodia
                </span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="footer-bottom"
            style={{
              borderTop: "1px solid #1E1E2E",
              padding: "18px 0 22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: "#2A2A3E",
                fontWeight: 400,
                margin: 0,
              }}
            >
              © {year} Lom Leuy. All rights reserved.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: "#1E1E2E",
                fontWeight: 400,
                margin: 0,
              }}
            >
              Designed & built by{" "}
              <span style={{ color: "#334155" }}>Lom Leuy</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            className="scroll-top-btn"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
