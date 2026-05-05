import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal.js";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "E-Commerce Platform", description: "A full-stack e-commerce solution with real-time inventory, Stripe payments, and admin dashboard.", tags: ["Tailwind", "SQL", "JS", "React", "Laravel"], color: "from-primary/20 to-accent/10", demo: "https://e-commerce-project-kappa-khaki.vercel.app/" },
  { title: "Appointment Booking System", description: "Appointment booking system with calendar scheduling and responsive client booking experience.", tags: ["Tailwind", "SQL", "JS", "React", "Laravel"], color: "from-accent/20 to-primary/10", demo: "https://appointment-booking-lemon-chi.vercel.app/" },
  { title: "Learning Management System", description: "A modern LMS platform for courses, student progress tracking, and scalable learning workflows.", tags: ["Tailwind", "SQL", "JS", "React", "Laravel"], color: "from-primary/15 to-accent/15", demo: "https://lms-project-green-ten.vercel.app/" },
  { title: "More Projects Coming Soon", description: "I’m building more amazing projects—stay tuned for new releases and live demos.", tags: ["Coming Soon"], color: "from-accent/15 to-primary/20", demo: null },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();
  return (
    <section id="projects" className="py-32 relative">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">Featured <span className="gradient-text">Projects</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div key={i} className="glass-card overflow-hidden group hover-glow transition-all duration-500 hover:-translate-y-2">
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <span className="font-heading text-2xl font-bold text-foreground/80 relative z-10">{project.title}</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (<span key={tag} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">{tag}</span>))}
                </div>
                <div className="flex gap-3">
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors duration-300"><ExternalLink size={16} /> Live Demo</a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">More Coming Soon</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
