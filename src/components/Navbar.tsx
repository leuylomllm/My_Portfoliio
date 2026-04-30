import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
        <nav
          className={`nav-inner ${scrolled ? "scrolled" : ""}`}
          style={{ position: "relative"  }}
        >
          {/* Logo */}
          <a href="#" className="nav-logo">
            <div className="nav-logo-mark">L</div>
            <span className="nav-logo-text">Lom Leuy</span>
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item} className="nav-link-item">
                <a
                  href={`#${item.toLowerCase()}`}
                  className={active === item ? "active" : ""}
                  onClick={() => setActive(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#contact" className="nav-cta">
            Hire Me
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1 11L11 1M11 1H4M11 1v7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Hamburger */}
          <button
            className={`nav-hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                className="nav-mobile"
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={active === item ? "active" : ""}
                      onClick={() => {
                        setActive(item);
                        setIsOpen(false);
                      }}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
                <div className="nav-mobile-divider" />
                <li>
                  <a
                    href="#contact"
                    className="nav-mobile-cta"
                    onClick={() => setIsOpen(false)}
                  >
                    Hire Me
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M1 11L11 1M11 1H4M11 1v7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
