import React from "react";
import ParticleBackground from "./components/ParticleBackground.jsx";
import Navbar from "./components/portfolio/Navbar.jsx";
import HeroSection from "./components/portfolio/HeroSection.jsx";
import AboutSection from "./components/portfolio/AboutSection.jsx";
import SkillsSection from "./components/portfolio/SkillsSection.jsx";
import ProjectsSection from "./components/portfolio/ProjectsSection.jsx";
import ContactSection from "./components/portfolio/ContactSection.jsx";
import Footer from "./components/portfolio/Footer.jsx";

const App = () => (
  <div className="min-h-screen bg-background animated-bg relative">
    <ParticleBackground />
    <Navbar />
    <div className="relative z-10">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  </div>
);

export default App;
