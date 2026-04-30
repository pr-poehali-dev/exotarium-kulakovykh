import HeroHero from "./hero/HeroHero";
import HeroServices from "./hero/HeroServices";
import HeroAnimals from "./hero/HeroAnimals";

export default function HeroSection() {
  return (
    <>
      <HeroHero />
      <HeroServices />
      <div className="section-divider" />
      <HeroAnimals />
    </>
  );
}
