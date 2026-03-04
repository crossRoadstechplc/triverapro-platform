import { Sun, Coffee, Recycle, Zap, Sprout } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: Sun, title: "Energy Input", desc: "Solar energy powers processing infrastructure." },
  { icon: Coffee, title: "Processing Layer", desc: "Coffee cherries are processed locally." },
  { icon: Recycle, title: "Waste Conversion", desc: "Organic waste is converted into biomass feedstock." },
  { icon: Zap, title: "Energy Output", desc: "Biogas energy supports cooking and power needs." },
  { icon: Sprout, title: "Soil Regeneration", desc: "Compost returns nutrients to coffee farms." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="section-padding bg-muted">
    <div className="section-container">
      <ScrollReveal>
        <p className="text-sm font-semibold tracking-widest text-secondary uppercase mb-4">Process</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">How It Works</h2>
        <div className="flex flex-wrap gap-3 mb-16">
          {["Closed-loop design", "Modular scalability", "Off-grid capability"].map((feature, i) => (
            <span key={i} className="px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full text-sm">
              {feature}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.12} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 w-24 h-24 rounded-full bg-card border-2 border-secondary flex items-center justify-center mb-6 shadow-md">
                  <step.icon className="w-10 h-10 text-secondary" />
                </div>
                <span className="text-xs font-bold text-accent mb-2 tracking-widest">STEP {i + 1}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
