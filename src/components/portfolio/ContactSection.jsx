import React, { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal.js";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useScrollReveal();
  const [focused, setFocused] = useState(null);

  return (
    <section id="contact" className="py-32 relative">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">Let's <span className="gradient-text">Connect</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing together.</p>
            {[
              { icon: Mail, label: "Email", value: "muaazbinmudassar451@gmail.com" },
              { icon: Phone, label: "Phone", value: "0328 8532104" },
              { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="text-foreground font-medium">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
          <form className="glass-card p-8 space-y-5">
            {[{ name: "name", label: "Your Name", type: "text" }, { name: "email", label: "Your Email", type: "email" }].map((field) => (
              <div key={field.name} className="relative">
                <input type={field.type} placeholder={field.label} onFocus={() => setFocused(field.name)} onBlur={() => setFocused(null)}
                  className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 ${focused === field.name ? "border-primary/50 shadow-[0_0_15px_hsl(175_80%_50%/0.1)]" : "border-border"}`} />
              </div>
            ))}
            <textarea placeholder="Your Message" rows={4} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
              className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 resize-none ${focused === "message" ? "border-primary/50 shadow-[0_0_15px_hsl(175_80%_50%/0.1)]" : "border-border"}`} />
            <button type="button" className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_hsl(175_80%_50%/0.3)] transition-all duration-500 hover:-translate-y-0.5">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
