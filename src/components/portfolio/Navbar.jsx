import React, { useState, useEffect } from "react";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (link) => {
    setActive(link);
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-card py-3" : "py-6"}`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <span className="font-heading text-2xl font-bold gradient-text cursor-pointer">Portfolio</span>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button key={link} onClick={() => handleClick(link)}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary ${active === link ? "text-primary text-glow-sm" : "text-muted-foreground"}`}>
              {link}
            </button>
          ))}
        </div>
        <button onClick={() => handleClick("Contact")}
          className="hidden md:block px-5 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 transition-all duration-300">
          Hire Me
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
