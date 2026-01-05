import { UnpublishedHeader } from "@/sections/UnpublishedHeader";
import { HeroUnpublishedSection } from "@/sections/HeroUnpublished";
import { UnpublishedProjectsSection } from "@/sections/UnpublishedProjects";
import { IterationsLogSection } from "@/sections/IterationsLog";
import { PhotographyGallerySection } from "@/sections/PhotoGallerySection";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <UnpublishedHeader />
      <HeroUnpublishedSection />
      <IterationsLogSection />
      <PhotographyGallerySection />
      <UnpublishedProjectsSection />
      {/* <TapeSection />
      <AboutSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
