import { ClipboardCheck, Wrench, GraduationCap, Activity } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: ClipboardCheck, title: "Site Assessment", desc: "Technical evaluation of agricultural communities and infrastructure requirements." },
  { icon: Wrench, title: "Installation", desc: "Deployment of modular TriveraPro™ infrastructure components." },
  { icon: GraduationCap, title: "Operator Training", desc: "Training programs for system operation and management." },
  { icon: Activity, title: "Maintenance & Monitoring", desc: "Ongoing system performance monitoring and maintenance." },
];

const DeploymentModel = () => (
  <section id="deployment" className="section-padding section-dark">
    <div className="section-container">
      <ScrollReveal>
        <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-4">Implementation</p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-12">Deployment Model</h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {steps.map((step, i) => (
          <ScrollReveal key={step.title} delay={i * 0.1}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-7 h-7 text-accent" />
              </div>
              <span className="text-xs font-bold text-accent tracking-widest mb-2 block">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-lg font-bold text-primary-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex px-8 py-3.5 bg-accent text-accent-foreground font-semibold rounded-md hover:bg-accent/90 transition-colors"
          >
            Explore the Third Harvest Program
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default DeploymentModel;
