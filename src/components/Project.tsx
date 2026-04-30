import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Globe,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Rows,
} from "lucide-react";
import Image from "../assets/Image";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string; // keep for fallback
  images?: string[]; // 👈 NEW
  demo?: string;
  code?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "IMS",
    subtitle: "Inventory Management System",
    description: "A full-stack inventory management system...",
    technologies: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express",
      "MYSQL",
    ],
    highlights: ["Secure authentication", "Real-time inventory updates"],
    image: Image.invent1,
    images: [
      Image.invent1,
      Image.invent2,
      Image.invent3,
      Image.invent4,
      Image.invent5,
    ],
    // demo: "https://github.com/leuylomllm/inventory-dash",
    codeFrontend: "https://github.com/leuylomllm/inventory-dash",
    codeBackend: "https://github.com/leuylomllm/inventory",
    category: "fullstack",
  },
  {
    id: 2,
    title: "E-Shop",
    subtitle: "E-Commerce Platform",
    description:
      "A scalable e-commerce platform with secure authentication, real-time stock management, and a built-in admin dashboard.",
    technologies: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Clerk Auth",
      "DUMY API",
    ],
    highlights: [
      "Secure user authentication using Clerk",
      "Real-time stock management",
      "Responsive admin dashboard",
      "Optimized for fast load times",
    ],
    image: Image.ecommerce1,
    images: [
      Image.ecommerce1,
      Image.ecommerce2,
      Image.ecommerce3,

      Image.ecommerce4,
      Image.ecommerce5,
      Image.ecommerce6,
    ],
    // demo: "https://e-commerece-kohl.vercel.app/",
    codeFrontend: "https://github.com/leuylomllm/ecommerce",
    codeBackend: " https://dummyjson.com/products",

    category: "web",
  },
  {
    id: 3,
    title: "CineView",
    subtitle: "Movie Discovery App",
    description:
      "A movie discovery app where users can browse trending films, search titles, and manage favorites and watchlists.",
    technologies: ["React", "Tailwind CSS", "DaisyUI", "Vite", "TypeScript"],
    highlights: [
      "Integrated TMDB API for dynamic content",
      "Clean layout with DaisyUI",
      "Favorite & watchlist features",
      "TypeScript for type safety",
    ],
    image: Image.movie1,
    demo: "https://movies-two-lime.vercel.app/",
    code: "https://github.com/leuy-llm/Movie",
    category: "web",
  },
//   {
//     id: 4,
//     title: "Ecommerce",
//     subtitle: "E-Commerce Storefront",
//     description:
//       "A modern e-commerce storefront with dynamic product listings, Google Maps integration for store locations, and a focus on responsive design and accessibility.",
//     technologies: ["React", "Tailwind CSS", "Vite", "TypeScript", "F API"],
//     highlights: [
//       "Dynamic destination listings",
//       "Google Maps integration",
//       "Responsive layouts",
//       "Accessibility & smooth navigation",
//     ],
//     image: Image.tour1,
//     demo: "https://tour-sable.vercel.app/",
//     code: "https://github.com/leuy-llm/tour",
//     category: "webapp",
//   },
  {
    id: 4,
    title: "TastyHub",
    subtitle: "Recipe Finder App",
    description:
      "A recipe search platform to find meals by ingredients, powered by TheMealDB API with clean filters and instructions.",
    technologies: ["Vue", "Vite", "Tailwind CSS", "MealDB API", "TypeScript"],
    highlights: [
      "Connected to TheMealDB API",
      "Search/filter features",
      "Clean UI for instructions",
      "Responsive recipe grid",
    ],
    image: Image.rcipe1,
    demo: "https://reciep-finder.vercel.app/",
    code: "https://github.com/leuylomllm/Reciep_Finder",
    category: "webapp",
  },
  {
    id: 5,
    title: "SkyCast",
    subtitle: "Weather Forecast App",
    description:
      "A weather app showing live data with an elegant UI — temperature, humidity, wind, and dynamic background themes.",
    technologies: ["Vue", "Vite", "Tailwind CSS", "Weather API", "TypeScript"],
    highlights: [
      "Real-time weather via API",
      "Dynamic background per weather",
      "Search by city & location",
      "Clean UI & UX focus",
    ],
    image: Image.weather,
    // demo: "https://weather-app-acnd.vercel.app",
    code: "https://github.com/leuy-llm/weatherApp",
    category: "webapp",
  },
];

const CATEGORY_LABEL: Record<string, string> = {
  fullstack: "Full-Stack",
  web: "Web",
  webapp: "Web App",
};

export default function Project() {
  const [view, setView] = useState<"carousel" | "grid">("carousel");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(1);
  const [imgIndex, setImgIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imgDirection, setImgDirection] = useState(1);
  const go = (idx: number, dir: number) => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setCurrentIndex(idx);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const current = projects[currentIndex];
  const images = current.images ?? [current.image];
  const currentImg = images[imgIndex];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const handleNext = () => go((currentIndex + 1) % projects.length, 1);
  const handlePrev = () =>
    go((currentIndex - 1 + projects.length) % projects.length, -1);

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (d: number) => ({
      opacity: 0,
      x: d > 0 ? -40 : 40,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section
      id="projects"
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
            My Work
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
            Project Showcase
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
            A selection of projects I've built — blending clean design with
            solid engineering.
          </p>
        </motion.div>

        {/* View toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: 36,
            gap: 8,
          }}
        >
          <button
            className={`proj-view-btn ${view === "carousel" ? "active" : ""}`}
            onClick={() => setView("carousel")}
          >
            <Rows size={14} /> Carousel
          </button>
          <button
            className={`proj-view-btn ${view === "grid" ? "active" : ""}`}
            onClick={() => setView("grid")}
          >
            <LayoutGrid size={14} /> Grid
          </button>
        </motion.div>

        {/* ── CAROUSEL ── */}
        {view === "carousel" && (
          <div>
            <div
              className="proj-carousel"
              style={{
                display: "flex",
                gap: 52,
                alignItems: "center",
                minHeight: 440,
              }}
            >
              {/* Left: image */}
              <div style={{ flex: "0 0 52%", minWidth: 0 }}>
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={current.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -50) handleNext();
                      if (info.offset.x > 50) handlePrev();
                    }}
                    style={{ cursor: "grab" }}
                  >
                    <div className="proj-frame">
                      <div className="proj-frame-bar">
                        <div
                          className="proj-frame-dot"
                          style={{ background: "#F87171" }}
                        />
                        <div
                          className="proj-frame-dot"
                          style={{ background: "#FACC15" }}
                        />
                        <div
                          className="proj-frame-dot"
                          style={{ background: "#4ADE80" }}
                        />
                        <span
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 11,
                            color: "#334155",
                            marginLeft: 10,
                            letterSpacing: "0.04em",
                          }}
                        >
                          {current.demo?.replace("https://", "") ?? "preview"}
                        </span>
                      </div>
                      <div
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        style={{
                          position: "relative", // 👈 IMPORTANT
                          paddingTop: 36,
                          overflow: "hidden",
                        }}
                      >
                        <AnimatePresence mode="wait" custom={imgDirection}>
                          <motion.img
                            key={currentImg}
                            custom={imgDirection}
                            initial={(dir) => ({
                              opacity: 0,
                              x: dir > 0 ? 40 : -40,
                            })}
                            animate={{ opacity: 1, x: 0 }}
                            exit={(dir) => ({
                              opacity: 0,
                              x: dir > 0 ? -40 : 40,
                            })}
                            transition={{ duration: 0.4 }}
                            src={currentImg}
                            alt={current.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </AnimatePresence>
                        {/* LEFT */}
                        <button
                          onClick={() => {
                            setIsPaused(true);
                            setImgDirection(-1);
                            setImgIndex(
                              (prev) =>
                                (prev - 1 + images.length) % images.length,
                            );
                          }}
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: 10,
                            transform: "translateY(-50%)",
                            background: "#00000088",
                            color: "#fff",
                            border: "none",
                            borderRadius: "50%",
                            width: 36,
                            height: 36,
                            cursor: "pointer",
                          }}
                        >
                          <span style={{ fontSize: 20 }}>‹</span>
                        </button>

                        {/* RIGHT */}
                        <button
                          onClick={() => {
                            setIsPaused(true);
                            setImgDirection(1);
                            setImgIndex((prev) => (prev + 1) % images.length);
                          }}
                          style={{
                            position: "absolute",
                            top: "50%",
                            right: 10,
                            transform: "translateY(-50%)",
                            background: "#00000088",
                            color: "#fff",
                            border: "none",
                            borderRadius: "50%",
                            width: 36,
                            height: 36,
                            cursor: "pointer",
                          }}
                        >
                          <span style={{ fontSize: 20 }}>›</span>
                        </button>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: 6,
                          marginTop: 15,
                          marginBottom: 15,
                        }}
                      >
                        {images.map((_, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setIsPaused(true);
                              setImgIndex(i);
                            }}
                            style={{
                              width: i === imgIndex ? 20 : 6,
                              height: 6,
                              borderRadius: 999,
                              background: i === imgIndex ? "#facc15" : "#444",
                              cursor: "pointer",
                              transition: "all 0.3s",
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Dots */}
                    <div
                      style={{
                        display: "flex",
                        gap: 6,
                        marginTop: 18,
                        alignItems: "center",
                      }}
                    >
                      {projects.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => go(idx, idx > currentIndex ? 1 : -1)}
                          style={{
                            height: 6,
                            width: idx === currentIndex ? 24 : 6,
                            borderRadius: 999,
                            background:
                              idx === currentIndex ? "#38BDF8" : "#1E1E2E",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            transition: "all 0.3s ease",
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: details */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={current.id + "-d"}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    {/* Badge + counter */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 16,
                      }}
                    >
                      <span className="proj-cat-badge">
                        {CATEGORY_LABEL[current.category] ?? current.category}
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 12,
                          color: "#334155",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {String(currentIndex + 1).padStart(2, "0")} /{" "}
                        {String(projects.length).padStart(2, "0")}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(22px, 3vw, 32px)",
                        fontWeight: 800,
                        color: "#F1F5F9",
                        margin: "0 0 4px",
                        lineHeight: 1.15,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {current.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13,
                        color: "#38BDF8",
                        fontWeight: 500,
                        marginBottom: 14,
                      }}
                    >
                      {current.subtitle}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        color: "#64748B",
                        lineHeight: 1.75,
                        fontWeight: 300,
                        marginBottom: 20,
                      }}
                    >
                      {current.description}
                    </p>

                    {/* Tech */}
                    <div style={{ marginBottom: 20 }}>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 11,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "#334155",
                          fontWeight: 500,
                          marginBottom: 10,
                        }}
                      >
                        Stack
                      </p>
                      <div
                        style={{ display: "flex", flexWrap: "wrap", gap: 6 }}
                      >
                        {current.technologies.map((t) => (
                          <span key={t} className="proj-tech-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div style={{ marginBottom: 28 }}>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 11,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "#334155",
                          fontWeight: 500,
                          marginBottom: 10,
                        }}
                      >
                        Highlights
                      </p>
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: 7,
                        }}
                      >
                        {current.highlights.map((h, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.07 }}
                            style={{
                              display: "flex",
                              gap: 10,
                              alignItems: "flex-start",
                              fontFamily: "'DM Sans', sans-serif",
                              fontSize: 13.5,
                              color: "#64748B",
                              lineHeight: 1.6,
                              fontWeight: 300,
                            }}
                          >
                            <span
                              style={{
                                color: "#38BDF8",
                                marginTop: 1,
                                flexShrink: 0,
                                fontSize: 12,
                              }}
                            >
                              ▸
                            </span>
                            {h}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div style={{ display: "flex", gap: 8 }}>
                      {current.demo && (
                        <a
                          href={current.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="proj-link-btn demo"
                        >
                          <Globe size={13} /> Live Demo
                        </a>
                      )}
                      {current.codeFrontend && (
                        <a
                          href={current.codeFrontend}
                          target="_blank"
                          className="proj-link-btn code"
                        >
                          <Github size={13} /> Frontend
                        </a>
                      )}

                      {current.codeBackend && (
                        <a
                          href={current.codeBackend}
                          target="_blank"
                          className="proj-link-btn code"
                        >
                          <Github size={13} /> Backend
                        </a>
                      )}

                      {current.code &&
                        !current.codeFrontend &&
                        !current.codeBackend && (
                          <a
                            href={current.code}
                            target="_blank"
                            className="proj-link-btn code"
                          >
                            <Github size={13} /> Code
                          </a>
                        )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Nav arrows */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 8,
                marginTop: 28,
              }}
            >
              <button
                className="proj-nav-btn"
                onClick={handlePrev}
                disabled={isAnimating}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                className="proj-nav-btn"
                onClick={handleNext}
                disabled={isAnimating}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ── GRID ── */}
        {view === "grid" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 16,
            }}
          >
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                className="proj-card"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                {/* Image */}
                <div
                  style={{
                    overflow: "hidden",
                    aspectRatio: "16/10",
                    position: "relative",
                  }}
                >
                  <img src={p.image} alt={p.title} className="proj-card-img" />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, #111118cc 0%, transparent 50%)",
                      pointerEvents: "none",
                    }}
                  />
                  <span
                    className="proj-cat-badge"
                    style={{ position: "absolute", top: 12, left: 12 }}
                  >
                    {CATEGORY_LABEL[p.category] ?? p.category}
                  </span>
                </div>

                {/* Body */}
                <div
                  style={{
                    padding: "18px 18px 16px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#E2E8F0",
                      margin: "0 0 3px",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      color: "#38BDF8",
                      fontWeight: 500,
                      marginBottom: 10,
                      opacity: 0.8,
                    }}
                  >
                    {p.subtitle}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      color: "#475569",
                      lineHeight: 1.7,
                      fontWeight: 300,
                      marginBottom: 14,
                      flex: 1,
                    }}
                  >
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 5,
                      marginBottom: 16,
                    }}
                  >
                    {p.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="proj-tech-tag"
                        style={{ fontSize: 11, padding: "3px 9px" }}
                      >
                        {t}
                      </span>
                    ))}
                    {p.technologies.length > 4 && (
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 11,
                          color: "#334155",
                          padding: "3px 9px",
                          alignSelf: "center",
                        }}
                      >
                        +{p.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      paddingTop: 14,
                      borderTop: "1px solid #1E1E2E",
                    }}
                  >
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link-btn demo"
                        style={{ flex: 1, justifyContent: "center" }}
                      >
                        <Globe size={13} /> Live Demo
                      </a>
                    )}
                    {p.code && (
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link-btn code"
                        style={{ flex: 1, justifyContent: "center" }}
                      >
                        <Github size={13} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
