import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal.js";
import { Code2, Palette, Zap, Coffee } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects Done", value: "50+" },
  { icon: Palette, label: "Design Awards", value: "12" },
  { icon: Zap, label: "Happy Clients", value: "30+" },
  { icon: Coffee, label: "Cups of Coffee", value: "∞" },
];

const AboutSection = () => {
  const ref = useScrollReveal();
  return (
    <section id="about" className="py-32 relative">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">Passionate About <span className="gradient-text">Creating</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div>
            <div className="glass-card p-8 hover-glow relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <p className="text-muted-foreground leading-relaxed text-lg relative z-10">I'm a creative developer with experience building stunning web applications. I believe in the power of clean code and beautiful design working together.</p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4 relative z-10">When I'm not coding, you'll find me exploring new design trends, contributing to open source, or experimenting with creative coding projects.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-6 text-center hover-glow group transition-all duration-500">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="font-heading text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
