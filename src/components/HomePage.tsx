import NavSectionTwo from "./NavSectionTwo";
import HeroSectionOne from "./HeroSectionOne";
import HeroSectionTwo from "./HeroSectionTwo";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-foundation2 pt-10">
      <NavSectionTwo />
      <HeroSectionOne />
      <HeroSectionTwo />
    </div>
  );
}
