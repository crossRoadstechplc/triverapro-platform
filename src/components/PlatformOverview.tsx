import { Sun, Zap, Cog, Flame, CookingPot, Sprout } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const modules = [
  { icon: Sun, title: "Solar-Integrated Processing" },
  { icon: Zap, title: "Inverter-Supported Operations" },
  { icon: Cog, title: "Biomass Grinding System" },
  { icon: Flame, title: "Biogas Conversion Module" },
  { icon: CookingPot, title: "Clean Cooking Integration" },
  { icon: Sprout, title: "Nutrient Recovery Output" },
];

const PlatformOverview = () => (
  <section id="platform" className="section-padding bg-background">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest text-secondary uppercase mb-4">Platform Overview</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            A Unified Infrastructure System
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            TriveraPro™ is an integrated infrastructure platform engineered by SPX to transform how coffee-producing communities process, power, and regenerate.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The platform connects solar energy, coffee processing infrastructure, biomass conversion, biogas generation, and nutrient recovery into a unified decentralized system.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-primary rounded-xl p-8 flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className="grid grid-cols-3 gap-4">
                {["Solar", "Processing", "Biomass", "Biogas", "Energy", "Soil"].map((label, i) => (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-lg bg-secondary/20 flex items-center justify-center">
                      {(() => { const Icon = modules[i].icon; return <Icon className="w-6 h-6 text-accent" />; })()}
                    </div>
                    <span className="text-xs text-primary-foreground/70 font-medium">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-xs text-primary-foreground/50 font-medium tracking-wider uppercase">Closed-Loop System</div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, i) => (
          <ScrollReveal key={mod.title} delay={i * 0.1}>
            <div className="group p-6 bg-card rounded-xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300">
              <mod.icon className="w-8 h-8 text-secondary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="text-lg font-semibold text-foreground">{mod.title}</h3>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformOverview;
