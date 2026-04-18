import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustFaqCta from "@/components/TrustFaqCta";
import ContactsSection from "@/components/ContactsSection";

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: "hsl(150, 35%, 7%)" }}>
      <Navbar />
      <HeroSection />
      <TrustFaqCta />
      <ContactsSection />
    </div>
  );
}