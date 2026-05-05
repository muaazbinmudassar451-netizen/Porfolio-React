import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (link) => {
    setActive(link);
    setMenuOpen(false);
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-card py-3" : "py-6"}`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <span className="font-heading text-2xl font-bold gradient-text cursor-pointer" onClick={() => handleClick("Home")}>Portfolio</span>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button key={link} onClick={() => handleClick(link)}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary ${active === link ? "text-primary text-glow-sm" : "text-muted-foreground"}`}>
              {link}
            </button>
          ))}
        </div>
        <button className="hidden md:block px-5 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 transition-all duration-300"
          onClick={() => handleClick("Contact")}>
          Hire Me
        </button>
        <button onClick={toggleMenu} className="md:hidden p-2 rounded-xl border border-border bg-card/70 text-foreground hover:bg-card/90 transition-colors duration-300">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div className={`md:hidden overflow-hidden bg-card/95 border-t border-border/30 transition-all duration-300 ${menuOpen ? "max-h-72 py-4 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="container mx-auto px-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button key={link} onClick={() => handleClick(link)}
              className={`w-full text-left py-3 rounded-xl transition-colors duration-300 ${active === link ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-primary/5"}`}>
              {link}
            </button>
          ))}
          <button onClick={() => handleClick("Contact")}
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-all duration-300 hover:opacity-90">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
