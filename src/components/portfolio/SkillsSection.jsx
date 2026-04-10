import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal.js";

const skills = [
  { name: "HTML/CSS", level: 95 }, { name: "JavaScript", level: 50 },
  { name: "React", level: 50 }, { name: "Tailwind CSS", level: 80 },
  { name: "Bootstrap", level: 80 }, { name: "mySQL", level: 90 },
  { name: "PHP", level: 70 }, { name: "Laravel", level: 65 },
];

const SkillsSection = () => {
  const ref = useScrollReveal();
  return (
    <section id="skills" className="py-32 relative">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Skills</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">My <span className="gradient-text">Expertise</span></h2>
        </div>
        <div className="max-w-3xl mx-auto grid gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="group">
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span className="text-primary font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out group-hover:shadow-[0_0_12px_hsl(175_80%_50%/0.4)]"
                  style={{ width: `${skill.level}%`, transitionDelay: `${i * 80}ms` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
