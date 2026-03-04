import ScrollReveal from "./ScrollReveal";
import systemDiagram from "@/assets/system-diagram.jpg";
import { CheckCircle2 } from "lucide-react";

const highlights = ["Closed-loop design", "Modular scalability", "Off-grid capability"];

const SystemArchitecture = () => (
  <section className="section-padding section-dark">
    <div className="section-container">
      <ScrollReveal>
        <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-4">System Architecture</p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Platform Architecture</h2>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="rounded-xl overflow-hidden mb-10">
          <img src={systemDiagram} alt="TriveraPro closed-loop system architecture diagram" className="w-full" />
        </div>
      </ScrollReveal>

      <div className="flex flex-wrap gap-6 justify-center">
        {highlights.map((h, i) => (
          <ScrollReveal key={h} delay={0.2 + i * 0.1}>
            <div className="flex items-center gap-3 px-6 py-3 bg-secondary/10 rounded-full border border-secondary/20">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground font-medium text-sm">{h}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SystemArchitecture;
