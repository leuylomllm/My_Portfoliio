import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Experience from "./components/experiences ";

function App() {
  return (
    <div
      style={{
        background: "#0A0A0F",
        minHeight: "100vh",
        color: "white",
        overflowX: "hidden", // prevent horizontal scroll on mobile
      }}
    >
      {/* Navbar is fixed-positioned — no wrapper padding needed */}
      <Navbar />

      {/* Each section handles its own padding internally */}
      <main>
        <HeroSection id="home" />
        <TechStack id="skills" />
        <About id="about" />
        <Skill id="skill" />
        <Project id="projects" />
        <Experience id="experience" />
        <Contact id="contact" />
        <Footer />
      </main>
    </div>
  );
}

export default App;
