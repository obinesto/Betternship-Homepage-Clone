import NavSectionTwo from "./NavSectionTwo";
import HeroSection from "./HeroSection";
import FeatureSectionOne from "./FeatureSectionOne";
import FeatureSectionTwo from "./FeatureSectionTwo";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-foundation2 pt-10">
      <NavSectionTwo />
      <HeroSection />
      <FeatureSectionOne />
      <FeatureSectionTwo />
    </div>
  );
}
