import { Sun, Zap, Cog, Flame, CookingPot, Sprout } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const modules = [
  { icon: Sun, title: "Solar-Integrated Processing", desc: "Renewable solar power supports decentralized coffee processing operations." },
  { icon: Zap, title: "Inverter Energy Layer", desc: "Integrated inverter systems stabilize power for processing equipment and local energy use." },
  { icon: Cog, title: "Biomass Grinding System", desc: "Coffee husk biomass is mechanically processed into feedstock for conversion." },
  { icon: Flame, title: "Biogas Conversion Module", desc: "Biomass feedstock is converted into renewable biogas energy." },
  { icon: CookingPot, title: "Clean Cooking Integration", desc: "Biogas energy supports household clean cooking systems." },
  { icon: Sprout, title: "Nutrient Recovery Output", desc: "Organic residues are converted into compost for soil regeneration." },
];

const TechnologyModules = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <ScrollReveal>
        <p className="text-sm font-semibold tracking-widest text-secondary uppercase mb-4">Technology</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Technology Modules</h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((mod, i) => (
          <ScrollReveal key={mod.title} delay={i * 0.08}>
            <div className="group h-full p-8 bg-card rounded-xl border border-border hover:border-secondary/40 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <mod.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{mod.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{mod.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologyModules;
