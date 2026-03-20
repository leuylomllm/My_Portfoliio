import { motion } from "framer-motion";
import {
  FaReact, FaVuejs, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaJs,
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiMysql, SiExpress,
  SiPrimevue, SiLaravel, SiVite, SiBootstrap, SiGit,
} from "react-icons/si";

// Techs data with skill levels
const techs = [
  { name: "React", icon: <FaReact className="text-sky-400" />, category: "Frontend", description: "JavaScript library for UI", level: "Intermediate" },
  { name: "Vue.js", icon: <FaVuejs className="text-green-400" />, category: "Frontend", description: "Progressive JavaScript framework", level: "Intermediate" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, category: "Backend", description: "JavaScript runtime environment", level: "Intermediate" },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" />, category: "Backend", description: "Web framework for Node.js", level: "Intermediate" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, category: "Language", description: "JavaScript with type safety", level: "Basic" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, category: "CSS", description: "Utility-first CSS framework", level: "Intermediate" },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" />, category: "Database", description: "Relational database system", level: "Basic" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, category: "Markup", description: "Structure of web pages", level: "Intermediate" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" />, category: "CSS", description: "Styling and layout", level: "Intermediate" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, category: "Language", description: "Core language for web", level: "Intermediate" },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" />, category: "Version Control", description: "Code hosting platform", level: "Intermediate" },
  { name: "Vite", icon: <SiVite className="text-purple-500" />, category: "Build Tool", description: "Fast frontend build tool", level: "Intermediate" },
  { name: "Bootstrap", icon: <SiBootstrap className="text-blue-500" />, category: "CSS", description: "Responsive front-end framework", level: "Basic" },
  { name: "Laravel", icon: <SiLaravel className="text-red-500" />, category: "Backend", description: "PHP web framework", level: "Basic" },
  { name: "Git", icon: <SiGit className="text-orange-500" />, category: "Version Control", description: "Code hosting platform", level: "Intermediate" },
  { name: "PrimeVue", icon: <SiPrimevue className="text-gray-300" />, category: "UI Component", description: "Vue.js component library", level: "Basic" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const TechStack = () => {
  return (
    <section className="py-20  text-white text-center relative overflow-hidden">
      {/* Background gradient orbs */}
      {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div> */}
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Heading */}
        {/* <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text"
        >
          My Tech Stack
        </motion.h2> */}

        {/* <motion.p 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-3xl mx-auto mb-16 text-sm sm:text-base leading-relaxed"
        >
          I work with modern tools and technologies to build responsive, scalable, and interactive web applications.
        </motion.p> */}

      

        {/* Optional scrolling ticker at bottom */}
        <div className="overflow-hidden relative w-full mt-16">
          <div className="flex animate-scroll gap-12 whitespace-nowrap">
            {[...techs, ...techs].map((tech, index) => (
              <div key={index} className="flex flex-col items-center justify-center space-y-2 min-w-[100px]">
                <div className="text-5xl transition-transform duration-300 hover:scale-110">{tech.icon}</div>
                <p className="text-gray-300 text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;