import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlatformOverview from "@/components/PlatformOverview";
import SystemArchitecture from "@/components/SystemArchitecture";
import TechnologyModules from "@/components/TechnologyModules";
import HowItWorks from "@/components/HowItWorks";
import Applications from "@/components/Applications";
import EngineeringIP from "@/components/EngineeringIP";
import DeploymentModel from "@/components/DeploymentModel";
import AboutSPX from "@/components/AboutSPX";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show the loading animation for 2.5 seconds on initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        <Navbar />
        <HeroSection />
        <PlatformOverview />
        <SystemArchitecture />
        <TechnologyModules />
        <HowItWorks />
        <Applications />
        <EngineeringIP />
        <DeploymentModel />
        <AboutSPX />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
