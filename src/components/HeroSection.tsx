import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Solar infrastructure in coffee-producing region" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
    </div>

    <div className="section-container relative z-10 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
          TriveraPro<span className="text-accent">™</span>
        </h1>
        <p className="text-2xl md:text-3xl font-heading font-semibold text-primary-foreground/90 mb-4">
          Integrated Renewable Infrastructure
          <br />
          for Coffee-Producing Regions
        </p>
        <p className="text-lg text-primary-foreground/70 max-w-xl mb-10 font-body leading-relaxed">
          Patent-Pending Closed-Loop Platform connecting solar power, decentralized coffee processing, biomass conversion, and regenerative soil restoration.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#platform"
            className="px-8 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/90 transition-colors text-base"
          >
            Explore the Platform
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-md hover:border-accent hover:text-accent transition-colors text-base"
          >
            See How It Works
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
