import { motion } from "framer-motion";
import { Github, Globe, ExternalLink } from "lucide-react";
import Image from "../assets/Image";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string;
  images?: string[];
  demo?: string;
  code?: string;
  codeFrontend?: string;
  codeBackend?: string;
  category: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "IMS",
    subtitle: "Inventory Management System",
    description:
      "A full-stack inventory management system with secure authentication and real-time inventory updates across all warehouse locations.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    highlights: ["Secure authentication", "Real-time inventory updates"],
    image: Image.invent1,
    images: [Image.invent1, Image.invent2, Image.invent3, Image.invent4, Image.invent5],
    codeFrontend: "https://github.com/leuylomllm/inventory-dash",
    codeBackend: "https://github.com/leuylomllm/inventory",
    category: "Full-Stack",
    featured: true,
  },
  {
    id: 2,
    title: "E-Shop",
    subtitle: "E-Commerce Platform",
    description:
      "A scalable e-commerce platform with secure authentication, real-time stock management, and a built-in admin dashboard.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Clerk Auth", "Dummy API"],
    highlights: [
      "Secure user authentication using Clerk",
      "Real-time stock management",
      "Responsive admin dashboard",
    ],
    image: Image.ecommerce1,
    images: [Image.ecommerce1, Image.ecommerce2, Image.ecommerce3, Image.ecommerce4],
    codeFrontend: "https://github.com/leuylomllm/ecommerce",
    category: "Web",
    featured: true,
  },
  {
    id: 3,
    title: "CineView",
    subtitle: "Movie Discovery App",
    description:
      "A movie discovery app where users can browse trending films, search titles, and manage favorites and watchlists.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "DaisyUI", "TMDB API"],
    highlights: [
      "Integrated TMDB API for dynamic content",
      "Favorite & watchlist features",
    ],
    image: Image.movie1,
    images: [Image.movie1, Image.movie2, Image.movie3],
    code: "https://github.com/leuy-llm/Movie",
    category: "Web",
  },
  {
    id: 4,
    title: "TastyHub",
    subtitle: "Recipe Finder App",
    description:
      "A recipe search platform to find meals by ingredients, powered by TheMealDB API with clean filters and step-by-step instructions.",
    technologies: ["Vue", "Vite", "TypeScript", "Tailwind CSS", "MealDB API"],
    highlights: [
      "Connected to TheMealDB API",
      "Search & filter features",
      "Responsive recipe grid",
    ],
    image: Image.rcipe1,
    images: [Image.rcipe1, Image.recipe3, Image.recipe4],
    code: "https://github.com/leuylomllm/Reciep_Finder",
    category: "Web App",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Project() {
  return (
    <section
      id="projects"
      style={{
        padding: "80px 48px",
        fontFamily: "'DM Sans', sans-serif",
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

        .proj-sub {
          font-family: Inter, system-ui, sans-serif;
          font-size: 16px;
          color: #ffffff66;
          line-height: 1.8;
          max-width: 480px;
          margin: 0 0 56px;
          position: relative;
          z-index: 1;
        }

        .proj-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          position: relative;
          z-index: 1;
        }

        .proj-card {
          background: radial-gradient(60% 40% at 50% 0%, rgba(0, 212, 255, 0.082), transparent);
          border: 1px solid #1A2235;
          border-radius: 16px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 0;
           
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease,  transform 0.25s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .proj-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 20% 10%, #22D3EE07, transparent 65%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .proj-card:hover {
          border-color: #22D3EE2A;
          transform: translateY(-3px);
          box-shadow: 0 16px 48px #00000055;
        }
        .proj-card:hover::before { opacity: 1; }

        /* Featured card gets a subtle top accent */
        .proj-card.featured {
          border-top: 2px solid #22D3EE33;
        }

        .proj-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
         
        }

        .proj-num {
          font-family: JetBrains Mono, Fira Code, monospace;
          font-size: 12px;
          color: rgb(0, 212, 255);
          font-weight: 400;
          letter-spacing: 0.08em;
          opacity: 0.8;
        }


        .proj-icon-group {
          display: flex;
          gap: 8px;
        }
        .proj-icon-btn {
          width: 34px;
          height: 34px;
          background: #131C2E;
          border: 1px solid #1E2D45;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748B;
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
          cursor: pointer;
        }
        .proj-icon-btn:hover {
          border-color: #22D3EE44;
          color: #22D3EE;
          background: #162036;
        }

        .proj-title {
          font-family: Inter, system-ui, sans-serif;
          font-size: clamp(17px, 20px, 22px);
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.2;
          margin: 0 0 12px;
          letter-spacing: -0.015em;
        }

        .proj-desc {
          font-family: Inter, system-ui, sans-serif;

          font-size: 14px;
          color: #ffffff66;
          line-height: 1.8;
          font-weight: 400;
          margin: 0 0 20px;
          flex: 1;
        }

        .proj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: auto;
        }
        .proj-tag {
          font-family: JetBrains Mono, Fira Code, monospace;
          font-size: 12px;
          color: #ffffff66;
          background: #111827;
          border: 1px solid #1E293B;
          border-radius: 6px;
          padding: 4px 10px;
          font-weight: 400;
          letter-spacing: 0.02em;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .proj-card:hover .proj-tag {
          border-color: #1E3045;
          color: #7A90A8;
        }

        @media (max-width: 800px) {
          .proj-grid { grid-template-columns: 1fr !important; }
          #projects { padding: 60px 24px !important; }
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
          03. &nbsp;Projects
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="proj-headline"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          Featured <span className="accent">Work</span>
        </motion.h2>

        <motion.p
          className="proj-sub"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A selection of projects I've built — blending clean design with solid
          engineering.
        </motion.p>

        {/* Cards grid */}
        <div className="proj-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              className={`proj-card${p.featured ? " featured" : ""}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {/* Top row: number + icon links */}
              <div className="proj-card-top">
                <span className="proj-num">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <div className="proj-icon-group">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-icon-btn"
                      title="Live Demo"
                    >
                      <Globe size={14} />
                    </a>
                  )}
                  {(p.codeFrontend || p.code) && (
                    <a
                      href={p.codeFrontend ?? p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-icon-btn"
                      title="Source Code"
                    >
                      <Github size={14} />
                    </a>
                  )}
                  {p.codeBackend && (
                    <a
                      href={p.codeBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-icon-btn"
                      title="Backend Code"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="proj-title">
                {p.title} — {p.subtitle}
              </h3>

              {/* Description */}
              <p className="proj-desc">{p.description}</p>

              {/* Tech tags */}
              <div className="proj-tags">
                {p.technologies.map((t) => (
                  <span key={t} className="proj-tag">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}