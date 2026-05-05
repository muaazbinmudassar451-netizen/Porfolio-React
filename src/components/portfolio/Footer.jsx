import React from "react";
import { Github, Linkedin, Instagram, Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border/30">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-heading text-lg font-bold gradient-text">Portfolio</span>
      <p className="text-muted-foreground text-sm flex items-center gap-1">Made with <Heart size={14} className="text-accent fill-accent" /> by Moaaz</p>
      <div className="flex gap-4">
        <a href="https://github.com/muaazbinmudassar451-netizen" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300"><Github size={18} /></a>
        <a href="https://instagram.com/moaaz_shah" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300"><Instagram size={18} /></a>
        <a href="https://www.linkedin.com/in/muaaz-mudassar-955855327/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300"><Linkedin size={18} /></a>
      </div>
    </div>
  </footer>
);
export default Footer;
