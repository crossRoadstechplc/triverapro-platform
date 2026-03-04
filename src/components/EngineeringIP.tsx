import { Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const EngineeringIP = () => (
  <section id="engineering" className="section-padding bg-card">
    <div className="section-container max-w-4xl">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-secondary" />
          <p className="text-sm font-semibold tracking-widest text-secondary uppercase">Proprietary Technology</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Engineering & Intellectual Property</h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>TriveraPro™ is a proprietary integration platform developed by SPX. <span className="font-semibold text-foreground">Patent pending.</span></p>
          <p>System design, integration architecture, and deployment methodology are protected under the TriveraPro™ brand.</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default EngineeringIP;
