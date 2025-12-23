import { Header } from "@/sections/Header";
import { HeroUnpublishedSection } from "@/sections/HeroUnpublished";
import { UnpublishedProjectsSection } from "@/sections/UnpublishedProjects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroUnpublishedSection />
      <UnpublishedProjectsSection />
      {/* <TapeSection />
      <AboutSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
