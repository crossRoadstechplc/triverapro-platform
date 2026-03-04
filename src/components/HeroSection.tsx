import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero-bg2.png";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const paragraphs = [
    <div className="space-y-2">
      <h2 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight drop-shadow-lg">
        Integrated Renewable
        <br />
        Infrastructure
      </h2>
      <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed drop-shadow-md">
        for Coffee-Producing Regions
      </p>
    </div>,
    <div className="space-y-2">
      <h2 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight drop-shadow-lg">
        Patent-Pending
        <br />
        Closed-Loop System
      </h2>
      <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed drop-shadow-md">
        Sustainable Energy & Soil Restoration
      </p>
    </div>,
    <div className="space-y-3">
      <h2 className="text-2xl md:text-4xl font-semibold font-heading text-white leading-tight drop-shadow-lg">
        Transforming Coffee
        <br />
        Production
      </h2>
      <p className="text-lg md:text-xl font-normal text-white/85 leading-relaxed drop-shadow-md max-w-2xl">
        A modular platform enabling decentralized processing, renewable energy generation, and regenerative soil restoration for sustainable farming communities.
      </p>
    </div>
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Solar infrastructure in coffee-producing region" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />
      </div>

      <div className="section-container w-full relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-left bg-black/10 backdrop-blur-sm p-10 md:p-16 rounded-3xl border border-white/20 shadow-2xl"
        >
          {/* <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6 drop-shadow-md">
            TriveraPro<span className="text-accent">™</span>
          </h1> */}

          <div className="h-40 md:h-48 relative mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="absolute inset-0 flex items-start justify-start text-left"
              >
                {paragraphs[currentIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap gap-4 justify-start">
            {/* <a
              href="#platform"
              className="px-8 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/90 transition-colors text-base shadow-sm"
            >
              Explore the Platform
            </a> */}
            <a
              href="#how-it-works"
              className="px-8 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-md hover:border-accent hover:text-accent transition-colors text-base bg-white/10 backdrop-blur-sm"
            >
              See How It Works
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
