import { MapPin, BatteryCharging, Factory, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const apps = [
  { icon: MapPin, title: "Smallholder Coffee Regions", desc: "Supports decentralized processing infrastructure for smallholder farmers." },
  { icon: BatteryCharging, title: "Off-Grid Agricultural Communities", desc: "Provides renewable energy and processing capabilities where grid access is limited." },
  { icon: Factory, title: "Decentralized Processing Hubs", desc: "Enables localized value addition in agricultural supply chains." },
  { icon: Users, title: "Women-Led Enterprise Clusters", desc: "Supports economic participation through decentralized infrastructure systems." },
];

const Applications = () => (
  <section id="applications" className="section-padding bg-background">
    <div className="section-container">
      <ScrollReveal>
        <p className="text-sm font-semibold tracking-widest text-secondary uppercase mb-4">Use Cases</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Applications</h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-8">
        {apps.map((app, i) => (
          <ScrollReveal key={app.title} delay={i * 0.1}>
            <div className="group p-8 bg-card rounded-xl border border-border hover:border-secondary/40 hover:shadow-xl transition-all duration-300 h-full">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <app.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{app.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{app.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Applications;
