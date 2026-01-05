import { Header } from "@/sections/Header";
import { HeroUnpublishedSection } from "@/sections/HeroUnpublished";
import { UnpublishedProjectsSection } from "@/sections/UnpublishedProjects";
import { IterationsLogSection } from "@/sections/IterationsLog";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroUnpublishedSection />
      <IterationsLogSection />
      <UnpublishedProjectsSection />
      {/* <TapeSection />
      <AboutSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
