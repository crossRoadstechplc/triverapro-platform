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

const Index = () => (
  <>
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
  </>
);

export default Index;
