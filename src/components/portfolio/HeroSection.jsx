import React, { useEffect, useState } from "react";
import { ArrowDown, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const roles = ["Full Stack Developer", "UI/UX Designer", "Creative Coder", "Problem Solver"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    let timeout;
    if (!deleting) {
      if (displayed.length < role.length) timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
      else timeout = setTimeout(() => setDeleting(true), 2000);
    } else {
      if (displayed.length > 0) timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      else { setDeleting(false); setRoleIndex((prev) => (prev + 1) % roles.length); }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }} />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8 animate-fade-in">
          ✨ Welcome to my universe
        </div>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Hi, I'm </span>
          <span className="gradient-text">Moaaz</span>
        </h1>
        <div className="h-12 mb-8 flex items-center justify-center">
          <span className="font-heading text-xl md:text-3xl text-muted-foreground">
            {displayed}<span className="inline-block w-0.5 h-7 bg-primary ml-1 animate-pulse" />
          </span>
        </div>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          I craft beautiful digital experiences with clean code, smooth animations, and pixel-perfect design.
        </p>
        <div className="flex items-center justify-center gap-4 mb-12">
          <a href="#projects" className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(175_80%_50%/0.3)] transition-all duration-500 hover:-translate-y-0.5">View My Work</a>
          <a href="#contact" className="px-8 py-3.5 rounded-xl border border-border bg-card/40 text-foreground font-semibold hover:border-primary/50 transition-all duration-500 hover:-translate-y-0.5">Let's Talk</a>
        </div>
        <div className="flex items-center justify-center gap-5">
          <a href="https://github.com/muaazbinmudassar451-netizen" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-xl border border-border bg-card/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
            <Github size={18} />
          </a>
          <a href="https://instagram.com/moaaz_shah" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-xl border border-border bg-card/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
            <Instagram size={18} />
          </a>
          <a href="https://www.linkedin.com/in/muaaz-mudassar-955855327/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-xl border border-border bg-card/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
            <Linkedin size={18} />
          </a>
        </div>
        <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"><ArrowDown size={24} /></a>
      </div>
    </section>
  );
};
export default HeroSection;
