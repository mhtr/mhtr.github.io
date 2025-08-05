import { Navigation } from "./components/Navigation";
import { BackToTop } from "./components/BackToTop";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SpeakersSection } from "./components/SpeakersSection";
import { ProgramSection } from "./components/ProgramSection";
import { MaterialsSection } from "./components/MaterialsSection";
import { LocationSection } from "./components/LocationSection";
import { RulesSection } from "./components/RulesSection";
import { ContactsSection } from "./components/ContactsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="speakers">
        <SpeakersSection />
      </div>
      <div id="program">
        <ProgramSection />
      </div>
      <div id="materials">
        <MaterialsSection />
      </div>
      <div id="location">
        <LocationSection />
      </div>
      <div id="rules">
        <RulesSection />
      </div>
      <div id="contacts">
        <ContactsSection />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}